import React from 'react';
import clsx from 'clsx';

enum ButtonVariant {
  'primary',
  'secondary',
}

interface ButtonProps {
  variant?: keyof typeof ButtonVariant;
  children: React.ReactNode;
  id: string | undefined;
  disabled?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  id,
  disabled = false,
}) => {
  return (
    <button
      className={clsx('px-6 py-2 rounded', {
        'bg-blue-500 hover:bg-blue-400': variant === 'primary',
        'bg-yellow-500 hover:bg-yellow-400': variant === 'secondary',
      })}
      id={id}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
