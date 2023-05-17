import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const AdminLayout = (props: IMainProps) => (
  <div className="w-full px-1 antialiased">
    {props.meta}

    <div className="mx-auto w-full">
      <div className="flex">
        <aside>sider</aside>
        <main className="content py-5 text-xl">{props.children}</main>
      </div>
      <footer className="border-t py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </footer>
    </div>
  </div>
);

export { AdminLayout };
