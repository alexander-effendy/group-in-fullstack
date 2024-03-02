import Link from 'next/link';
import React, { FC, ReactElement } from 'react';

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
  // Clone the Icon with additional classes
  const IconWithClasses = React.cloneElement(Icon, {
    className: `${Icon.props.className || ''} h-[18px] w-[18px]`,
  });

  return (
    <Link
      href={href}
      className='flex items-center text-grayDashboard hover:text-primary px-10'
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
