import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClientForServer } from './utils/supabase/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const supabase = await createClientForServer();
  const { data, error } = await supabase.auth.getUser();


  if(!data.user && error){
        return NextResponse.redirect(new URL('/login',request.url))
    }
  if(data.user){
        return NextResponse.next()
    }
}

export const config = {
  matcher: [
    '/checkout' 
  ],
};
