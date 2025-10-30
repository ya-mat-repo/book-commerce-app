'use client';

// import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
// import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
// import { User } from '../types/types';

const Header = () => {
  // const Header = async () => {
  const { data: session } = useSession();
  const user = session?.user;
  // const session = await getServerSession();
  // const user = session?.user as User;

  return (
    <header className="bg-slate-600 text-gray-100 shadow-lg">
      <nav className="flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          Book commerce
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-sm font-medium"
          >
            ホーム
          </Link>
          <Link
            href={user ? 'profile' : '/api/auth/signin'}
            // href={user ? 'profile' : '/login'}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-sm font-medium"
          >
            {user ? 'プロフィール' : 'ログイン'}
          </Link>

          {user ? (
            <Link
              href={'api/auth/signout'}
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-sm font-medium"
            >
              ログアウト
            </Link>
          ) : (
            // <button
            //   onClick={() => signOut({ callbackUrl: '/login' })}
            //   className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-sm font-medium"
            // >
            //   ログアウト
            // </button>
            ''
          )}

          <Link href="/profile">
            <Image
              src={user?.image ?? '/default_icon.png'}
              alt="profile"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
