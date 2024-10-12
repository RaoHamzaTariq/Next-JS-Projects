"use client";

import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({children}:{children:any}) => {
  return (
    <SessionProvider>
    {children}
    </SessionProvider>
  )
}

export default SessionWrapper