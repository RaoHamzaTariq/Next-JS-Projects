// src/context/SupabaseContext.tsx
'use client';

import { createClient } from '@/utils/supabase/client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User, AuthError } from '@supabase/supabase-js';

interface SupabaseAuthContextType {
    user: User | null;
    error: AuthError | null;
    signOut: () => Promise<void>; // Add signOut method to context
}

const SupabaseAuthContext = createContext<SupabaseAuthContextType | undefined>(undefined);

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<AuthError | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const supabase = createClient();
            const { data: { user }, error } = await supabase.auth.getUser();

            if (error) {
                console.error('Error fetching user:', error);
                setError(error);
            } else {
                setUser(user);
            }
        };

        fetchUserData();
    }, []);

    const signOut = async () => {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('Error signing out:', error);
            setError(error);
            return;
        }

        setUser(null); // Update user state after signing out
    };

    return (
        <SupabaseAuthContext.Provider value={{ user, error, signOut }}>
            {children}
        </SupabaseAuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(SupabaseAuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a SupabaseProvider");
    }
    return context;
};
