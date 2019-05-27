import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactElement;
}

function Layout({ children }: Props): ReactElement {
  return (
    <>
      <nav>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/products">
          <span>Products</span>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;
