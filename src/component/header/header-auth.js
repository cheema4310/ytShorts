'use client';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

import Avatar from './avatar';

export function HeaderAuth() {
  const session = useSession();
  let authContext;
  if (session.status === 'loading') {
  } else if (session.data?.user) {
    authContext = <Avatar src={session.data?.user.image || ''} />;
  } else {
    authContext = (
      <div>
        <form action={actions.signIn}>
          <button type="submit" className="leading-[50px] text-lighter">
            Sign In
          </button>
        </form>
      </div>
    );
  }
  return authContext;
}
