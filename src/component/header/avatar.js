'use client';
import Image from 'next/image';
import { useState } from 'react';
import * as actions from '@/actions';

export default function Avatar({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  const avatarClickHandler = () => {
    setIsOpen((p) => !p);
  };
  return (
    <div className="relative">
      <div onClick={avatarClickHandler}>
        <Image
          className="rounded-[50%] cursor-pointer hover:border hover:border-darker"
          src={src}
          alt="profile"
          width={50}
          height={50}
        />
      </div>
      {isOpen && (
        <div className="absolute right-0">
          <div className="mt-1 bg-lighter rounded-lg">
            <form action={actions.signOut}>
              <button
                type="submit"
                className="mx-3 mt-8 mb-3 w-24 py-2 bg-dark text-lightest rounded-xl shadow-md transition hover:bg-darkest"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
