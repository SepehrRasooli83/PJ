'use client'

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>
        <SessionProvider>
            {children}
        </SessionProvider>
      </div>
    </div>
  );
}
