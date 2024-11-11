'use client'
import { SignedIn, SignOutButton } from '@clerk/nextjs';



function SignOut() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4 text-center">
      <SignedIn>

        <SignOutButton redirectUrl="/">
          <button className="flex justify-center items-center text-center w-full mx-auto max-w-xs py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </SignOutButton>
      </SignedIn>
  
   
    </div>
  );
}

export default SignOut;

