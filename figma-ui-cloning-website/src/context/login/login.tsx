"use client";
import { ReactNode, useState } from "react";
import { Auth_Data, IAuthData } from "./context";

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [context, setContext] = useState<IAuthData>({
        isLogin: false,
        update: (props: IAuthData) => {
            setContext(() => ({
                isLogin: props.isLogin
                
                
            }));
            console.log(context);   
        },
    });

    return (
        <Auth_Data.Provider value={context}>
            {children}
        </Auth_Data.Provider>
    );
};