import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="border-t border-solid border-grayscale-border px-2 py-2.5 font-body shadow-footer sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              width={200}
              height={200}
              alt="DODORIS logo"
            />
          </Link>
          <span />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          <div>
            <h2 className="mb-6 text-base font-bold text-grayscale-gray">
              Về Dodoris
            </h2>
            <ul className="text-grayscale-black ">
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="/about">Giới thiệu</Link>
              </li>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="/contact">Liên hệ</Link>
              </li>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="/news">Tin tức</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-base font-bold text-grayscale-gray">
              Hỗ trợ khách hàng
            </h2>
            <ul>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="https://github.com/themesberg/flowbite">
                  Hướng dẫn chọn size
                </Link>
              </li>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="https://github.com/themesberg/flowbite">
                  Chính sách bảo hành, đổi/trả
                </Link>
              </li>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="https://discord.gg/4eeurUVvTy">
                  Thanh toán, giao nhận
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-base font-bold text-grayscale-gray">
              Liên hệ
            </h2>
            <ul className="text-grayscale-black ">
              <li className="mb-4  rounded text-sm md:bg-transparent md:p-0">
                <span>037602xxxx</span>
              </li>
              <li className="mb-4  rounded text-sm md:bg-transparent md:p-0">
                <span>dodoris@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-base font-bold text-grayscale-gray">
              Theo dõi Dodoris tại
            </h2>
            <ul className="flex space-x-6 text-grayscale-black sm:mt-0 sm:justify-start">
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link
                  href="https://www.facebook.com/DodorisClothing"
                  className="dark:hover:text-white"
                >
                  <img
                    height={32}
                    width={32}
                    src="/images/facebook.png"
                    alt="Facebook Logo"
                  />
                </Link>
              </li>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="/" className="dark:hover:text-white">
                  <Image
                    height={32}
                    width={32}
                    src="/images/zalo.png"
                    alt="Zalo Logo"
                  />
                </Link>
              </li>
              <li className="mb-4  rounded text-sm hover:text-[#FFABAB] md:bg-transparent md:p-0">
                <Link href="/" className="dark:hover:text-white">
                  <Image
                    height={32}
                    width={32}
                    src="/images/youtube.png"
                    alt="Youtube Logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-grayscale-border text-center sm:mx-auto lg:my-8" />
      <div className="sm:block sm:text-center ">
        <span className="block text-center text-sm sm:text-center">
          © 2023 <Link href="/">Dodoris™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
