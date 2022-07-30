import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Search from "../Search/Search";
import SearchMobile from "../Search/SearchMobile";
import HeaderWidget from "./HeaderWidget";

export default function Header({ children, title }) {
  // const headerWidget = [
  //     {
  //         title: "chat",
  //         image: "/images/message.svg"
  //     },
  //     {
  //         title: "notifications",
  //         image: "/images/notification.svg"
  //     }
  // ]

  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>

      <header className="z-10 top-0 h-16 border-b bg-bga-light-blue lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden className="text-2xl text-gray-100 font-medium lg:block">
            {title}
          </h5>

          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <Image
              src="/images/burguer-menu.svg"
              alt="menu"
              width={24}
              height={24}
            />
          </button>

          <div className="flex space-x-4">
            {/* <Search />
                        <SearchMobile />
                        {headerWidget.map((item, index) => (
                            <HeaderWidget {...item} key={index} />
                        ))} */}
            <Link href="/auth">
              <div className="flex justify-between items-center">
                <button className="px-2 py-2 bg-whitesmoke flex items-center space-x-4 rounded-md text-gray-900 group">
                  <Image
                    src="/images/logout.svg"
                    alt="logout"
                    width={20}
                    height={20}
                  />
                  <span className="group-hover:text-gray-500">
                    Finalizar Sesion
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
