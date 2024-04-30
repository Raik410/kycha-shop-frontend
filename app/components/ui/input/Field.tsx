import cn from 'clsx';
import { forwardRef } from 'react';
import { IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, className, style, error, type = 'text', ...rest }, ref) => {
    return (
      <div className={cn('', className)} style={style}>
        <label>
          <span>{placeholder}</span>
          <input
            className={cn(
              'border-solid border-[1px] rounded-md px-2 py-1 w-full outline-none transition-all',
              {
                'border-red': !!error,
                'focus:border-primary': !error,
              },
            )}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...rest}
          />
        </label>
        {error && <div className="text-red pt-2">{error}</div>}
      </div>
    );
  },
);

Field.displayName = 'Field';

export default Field;
