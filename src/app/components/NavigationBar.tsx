"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, RocketLaunchIcon, CodeBracketIcon, LightBulbIcon, XCircleIcon } from '@heroicons/react/24/solid';

type NavigationItemProps = {
  label: string;
  href: string;
  Icon: React.ElementType;
};

const NavigationItem: React.FC<NavigationItemProps> = ({ label, href, Icon }) => {
  return (
    <Link href={href} passHref>
      <div className="flex items-center space-x-2 text-gray-700 cursor-pointer">
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default function NavigationBar() {
  const navigationItems: NavigationItemProps[] = [
    { label: "Home", href: "/", Icon: HomeIcon },
    { label: "About", href: "/about", Icon: UserIcon },
    { label: "Resume", href: "/resume", Icon: BriefcaseIcon },
    { label: "Projects", href: "/projects", Icon: CodeBracketIcon },
    { label: "Posts", href: "/posts", Icon: RocketLaunchIcon },
    { label: "Contact", href: "/contact", Icon: EnvelopeIcon }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white text-gray-700 flex items-center justify-between px-8 shadow-md z-10">
      <div className="text-lg font-medium cursor-pointer">
        yokurang
      </div>
      <div className="hidden items-center space-x-6 sm:flex">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
      </div>
      <div className="sm:hidden">
        <button onClick={handleToggle}>
          {isOpen ? <XCircleIcon className="text-xl" /> : <LightBulbIcon className="text-xl" />}
        </button>
      </div>
      {isOpen &&
        <div className="absolute left-0 top-16 w-full bg-white text-gray-700 flex flex-col items-center space-y-6 py-5 sm:hidden shadow-md">
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} {...item} />
          ))}
        </div>
      }
    </div>
  );
}