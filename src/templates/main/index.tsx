import type { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => (
  <div className="w-full px-1 antialiased">
    {props.meta}

    <div className="mx-auto">
      <Header />

      <main className="content py-5 text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { MainLayout };
