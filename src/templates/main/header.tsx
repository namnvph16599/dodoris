import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';

const Header = memo(() => {
  return (
    <header className="w-full border-b border-solid border-grayscale-border">
      <nav className="font-poppins container mx-auto bg-white py-2.5">
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
            <Link
              href="/"
              className="mr-2 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
            >
              Log in
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
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
