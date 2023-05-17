// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Badge, Dropdown, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useCallback } from 'react';

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const Header = memo(() => {
  const handleSearch = useCallback(() => {}, []);
  return (
    <header className="w-full border-b border-solid border-grayscale-border font-body">
      <nav className="container mx-auto bg-white py-2.5">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dodoris"
              className="sm:h-10"
              width={190}
              height={60}
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Input
              style={{ width: 300 }}
              placeholder="Tìm kiếm sản phẩm"
              addonAfter={
                <span className="hover:cursor-pointer">
                  <SearchOutlined />
                </span>
              }
              onChange={handleSearch}
              className="xs:mr-[16px] lg:mr-[32px]"
            />
            <Dropdown menu={{ items }} trigger={['click']}>
              <div className="text-center hover:cursor-pointer">
                <Badge dot>
                  <ShoppingCartOutlined style={{ fontSize: 24 }} />
                </Badge>
                <p className="text-xs font-medium">Giỏ hàng</p>
              </div>
            </Dropdown>
          </div>

          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <Link
                  href="/"
                  className="block border-b border-grayscale-gray py-2 pl-3 pr-4 text-grayscale-black lg:border-0 lg:p-0 lg:hover:text-primarys-hover"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block border-b border-grayscale-gray py-2 pl-3 pr-4 text-grayscale-black lg:border-0 lg:p-0 lg:hover:text-primarys-hover"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block border-b border-grayscale-gray py-2 pl-3 pr-4 text-grayscale-black lg:border-0 lg:p-0 lg:hover:text-primarys-hover"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block border-b border-grayscale-gray py-2 pl-3 pr-4 text-grayscale-black lg:border-0 lg:p-0 lg:hover:text-primarys-hover"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/post"
                  className="block border-b border-grayscale-gray py-2 pl-3 pr-4 text-grayscale-black lg:border-0 lg:p-0 lg:hover:text-primarys-hover"
                >
                  Bài viết
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
});
Header.displayName = 'Header';
export default Header;
