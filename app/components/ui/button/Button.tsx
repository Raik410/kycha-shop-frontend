import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import cn from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'dark' | 'light';
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  className,
  variant = 'dark',
  ...rest
}) => {
  return (
    <button
      className={cn(
        'rounded-xl font-medium shadow-md px-5 py-2',
        {
          'text-secondary bg-primary': variant === 'dark',
          'text-primary bg-white': variant === 'light',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
