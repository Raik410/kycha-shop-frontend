import cn from 'clsx';
import { forwardRef } from 'react';
import { IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, className, style, error, type = 'text', ...rest }, ref) => {
    return (
      <div className={cn('', className)} style={style}>
        <label>
          <span>{placeholder}</span>
          <input ref={ref} type={type} {...rest} />
        </label>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  },
);

Field.displayName = 'Field';

export default Field;
