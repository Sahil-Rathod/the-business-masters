"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

export default function Navbar(props) {
  const leftmenu = [
    // {
    //   label: "Home",
    //   href: "/"
    // },
    // {
    //   label: "About",
    //   href: "/about"
    // },
    // {
    //   label: "Contact",
    //   href: "/contact"
    // }
  ];

  const rightmenu = [
    {
      label: "Archive",
      href: "/archive"
    },
    {
      label: "Contact",
      href: "/",
      external: true
      // badge: "new"
    },
    {
      label: "Download",
      href: "",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container className="hidden">
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className=" flex hidden flex-wrap justify-between md:flex-nowrap md:gap-10">
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-row md:justify-start">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href="/"
                          className="w-[18rem] dark:hidden">
                          {props.logo ? (
                            <Image
                              {...urlForImage(props.logo)}
                              alt="Logo"
                              priority={true}
                              sizes="(max-width: 640px) 100vw, 200px"
                            />
                          ) : (
                            <span className="block text-center">
                              The Business Masters
                            </span>
                          )}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/" className="w-[18rem] dark:hidden">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        The Business Masters
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/"
                    className="hidden w-[18rem] dark:block">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        The Business Masters
                      </span>
                    )}
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-red-500 focus:outline-none md:hidden dark:text-gray-300 ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-lg font-medium text-gray-600 hover:text-red-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          <span> {item.label}</span>
                          {item.badge && (
                            <span className="ml-2 rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600 dark:bg-cyan-200 dark:text-red-800 ">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-lg font-medium text-gray-600 hover:text-red-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-lg font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-red-500 hover:text-red-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-lg lg:space-x-4",
                          active
                            ? "text-red-500"
                            : "text-gray-700 hover:text-red-500 focus:text-red-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

<div class="relative mx-auto max-w-screen-xl p-5 sm:p-10 md:p-16">
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-12">
    <div class="sm:col-span-5">
      <a href="#">
        <div
          class="overflow-hidden bg-cover text-center"
          style="min-height: 300px; background-image: url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1')"
          title="Woman holding a mug"></div>
      </a>
      <div class="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
        <div class="">
          <a
            href="#"
            class="text-xs font-medium uppercase text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900">
            Election
          </a>
          <a
            href="#"
            class="mb-2 block text-2xl font-bold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
            Revenge of the Never Trumpers
          </a>
          <p class="mt-2 text-base text-gray-700">
            Meet the Republican dissidents fighting to push Donald
            Trump out of office—and reclaim their party
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-5 sm:col-span-7 lg:grid-cols-3">
      <div class="">
        <a href="#">
          <div
            class="h-40 overflow-hidden bg-cover text-center"
            style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
            title="Woman holding a mug"></div>
        </a>
        <a
          href="#"
          class="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
          Trump Steps Back Into Coronavirus Spotlight
        </a>
      </div>
      <div class="">
        <a href="#">
          <div
            class="h-40 overflow-hidden bg-cover text-center"
            style="background-image: url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
            title="Woman holding a mug"></div>
        </a>
        <a
          href="#"
          class="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
          How Trump Mistakes Became Biden Big Breaks
        </a>
      </div>
      <div class="">
        <a href="#">
          <div
            class="h-40 overflow-hidden bg-cover text-center"
            style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
            title="Woman holding a mug"></div>
        </a>
        <a
          href="#"
          class="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
          Survey: Many Americans Dissatisfied With U.S.
        </a>
      </div>
      <div class="">
        <a href="#">
          <div
            class="h-40 overflow-hidden bg-cover text-center"
            style="background-image: url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
            title="Woman holding a mug"></div>
        </a>
        <a
          href="#"
          class="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
          How Trumps Mistakes Became Bidens Big Breaks
        </a>
      </div>
      <div class="">
        <a href="#">
          <div
            class="h-40 overflow-hidden bg-cover text-center"
            style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
            title="Woman holding a mug"></div>
        </a>
        <a
          href="#"
          class="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
          Survey: Many Americans Dissatisfied With U.S.
        </a>
      </div>
      <div class="">
        <a href="#">
          <div
            class="h-40 overflow-hidden bg-cover text-center"
            style="background-image: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
            title="Woman holding a mug"></div>
        </a>
        <a
          href="#"
          class="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
          Trump Steps Back Into Coronavirus Spotlight
        </a>
      </div>
    </div>
  </div>
</div>;
