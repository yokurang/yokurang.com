"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  RocketLaunchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  type NavigationItemProps = {
    label: string;
    href: string;
    Icon: React.ElementType;
    onClick?: () => void;
    className?: string;
  };

  const NavigationItem: React.FC<NavigationItemProps> = ({
    label,
    href,
    Icon,
    onClick,
    className,
  }) => {
    return (
      <Link href={href} passHref>
        <div
          className={`flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-black ${className}`}
          onClick={onClick}
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </div>
      </Link>
    );
  };

  const navItems = [
    { label: "Home", href: "/", Icon: HomeIcon },
    { label: "About", href: "/about", Icon: UserIcon },
    { label: "Posts", href: "/posts", Icon: RocketLaunchIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white text-gray-700 flex items-center justify-between px-8 shadow-md z-10">
      <div className="text-lg font-medium cursor-pointer text-2xl font-bold">
        yokurang
      </div>
      <div className="hidden sm:flex space-x-6">
        {navItems.map((item, index) => (
          <NavigationItem
            key={index}
            {...item}
            className="py-2 px-4 hover:underline"
          />
        ))}
      </div>
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 w-full bg-white flex flex-col text-center shadow-md">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              {...item}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            />
          ))}
        </div>
      )}
    </nav>
  );
}
