'use server';

import { redirect } from "next/navigation";
import { createClientForServer } from "./supabase/server";

const signInWith = (provider: 'google' | 'github' | 'facebook') => async () => { // Specify valid providers
    const supabase = await createClientForServer();

    const auth_callback_url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/callback`;

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: auth_callback_url,
        },
    });

    if (data?.url) {
        redirect(data.url); // Redirect to the URL provided by Supabase
    }

    if (error) {
        console.error('Error during sign in:', error);
        return { error }; // Return the error for handling in the UI
    }

    console.log('Sign in data:', data);
    
    return { data }; // Return the data for further processing
};

const signInWithGoogle = signInWith('google');
const signInWithGithub = signInWith('github');

const signOut = async () =>{
    const supabase = await createClientForServer();
    await supabase.auth.signOut();
    
}


const signUpWithEmail = async (formData: FormData) => {
    const supabase =await createClientForServer();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string; // Get full name from FormData

    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName // Store full name in user metadata
            }
        }
    });

   

    if (error) {
        console.error('Error signing up:', error);
        return {
            success: null,
            error: error.message,
        };
    }
    
    console.log(data)
    return {
        success: "SignUp successfully",
        error: null,
    };
};


const logInWithEmail = async (formData: FormData) => {
    const supabase = await createClientForServer();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log(email,password)

    // Sign in the user
    const { data, error } = await supabase.auth.signInWithPassword({
        email:"raohamza6767@gmail.com",
        password:"RaoHamza9211!",
    });

    if (error) {
        console.error('Error logging in:', error);
        
        console.log(data)
        return {
            success: null,
            error: error.message,
        };
    }
    console.log(data)

    return {
        success: "Login successful! Redirecting...",
        error: null,
    };
};


export { signInWithGoogle,signInWithGithub, signOut,signUpWithEmail,logInWithEmail };
