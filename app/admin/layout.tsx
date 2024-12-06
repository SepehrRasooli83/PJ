'use client'

import { SessionProvider, useSession } from 'next-auth/react';
import { ReactNode} from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    
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
