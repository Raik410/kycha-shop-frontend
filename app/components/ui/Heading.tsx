import { FC, PropsWithChildren } from 'react';

import cn from 'clsx';

interface IHeading {
  className?: string;
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
  return (
    <h1 className={cn('text-opacity-80 font-semibold', className)}>
      {children}
    </h1>
  );
};

export default Heading;
