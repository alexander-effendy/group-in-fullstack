'use client';

import Link from 'next/link';
import React, { FC, ReactElement } from 'react';
import { usePathname } from 'next/navigation';

interface SidebarButtonProps {
  href: string;
  text: string;
  Icon: ReactElement; // Expecting a React element for the icon
}

const SidebarButton: FC<SidebarButtonProps> = ({
  href,
  text,
  Icon,
}): JSX.Element => {
  const pathname = usePathname();

  // Clone the Icon with additional classes
  const IconWithClasses = React.cloneElement(Icon, {
    className: `${Icon.props.className || ''} h-[18px] w-[18px]`,
  });

  // Special handling for root path
  const isRootPath = href === '/' && pathname === '/';
  // Use startsWith for other paths, but ensure it's not just the root path
  const isActive = isRootPath || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex items-center text-grayDashboard hover:text-primary px-10 active:text-primary ${
        isActive ? 'text-primary' : '' // Apply active state styling conditionally
      }`}
      style={{ fontFamily: 'MetropolisSemiBold' }}
    >
      <div className='flex justify-start items-center w-full'>
        {IconWithClasses}
        <p className='ml-4 text-md'>{text}</p> {/* Adjust margin as needed */}
      </div>
    </Link>
  );
};

export default SidebarButton;
