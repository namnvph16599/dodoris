import '../styles/global.css';

import { ConfigProvider } from 'antd';
import vi_VN from 'antd/locale/vi_VN';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider locale={vi_VN}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default MyApp;
