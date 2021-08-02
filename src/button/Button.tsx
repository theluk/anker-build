import React from 'react';

import className from 'classnames';

type IButtonProps = {
  href?: string;
  xl?: boolean;
  children: string;
};

const Button = React.forwardRef(({ xl, children, href }: IButtonProps, ref) => {
  const btnClass = className({
    btn: true,
    'btn-xl': xl,
    'btn-base': !xl,
    'btn-primary': true,
  });

  const Component = href ? 'a' : 'button';

  return (
    <Component className={btnClass} href={href} ref={ref as any}>
      {children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </Component>
  );
});

export { Button };
