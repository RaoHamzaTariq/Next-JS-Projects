'use client'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/context/AuthContext';
import Link from 'next/link';

export default function ProductImage() {
  
  const { user, signOut } = useAuth();
  if(!user){
    return <div className='py-28 w-screen flex flex-col justify-center items-center'>Not logged in <Link href={'/login'}>Sign in</Link></div>
  }

  return (
    <div className='py-28 w-screen flex flex-col justify-center items-center'>
     
      <Image className='rounded-[50%]' src={user?.user_metadata?.picture} alt={user?.user_metadata?.full_name} width={100} height={100}/>
    
    <p>{user?.user_metadata?.full_name}</p>
    <p>{user?.user_metadata?.email}</p>
    <p>Created with {user?.app_metadata?.provider}</p>

    <form action={signOut} className='mt-10'>
      <Button type='submit'>Sign Out</Button>
    </form>
      </div>
    // <div className='py-32'>testing</div>
  );
}
