import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type = 'text',
  name,
  value,
  defaultValue,
  className = '',
  variant = 'primary',
  autoComplete = false,
  required = false,
  isFocused = false,
  handleChange = () => {},
  placeholder = '',
  isError = false,
}) {
  const input = useRef();

  useEffect(() => {
    if (isFocused && input.current) {
      input.current.focus();
    }
  }, [isFocused]);

  return (
    <div className="flex flex-col items-start w-full">
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        className={`rounded-2xl py-[13px] px-7 w-full
          ${variant === 'primary' ? 'bg-form-bg' : ''}
          ${variant === 'primary-outline' ? 'border border-white bg-transparent' : ''}
          ${variant === 'error' || isError ? 'border border-red-500 bg-red-50 text-red-600' : ''}
          ${className}`}
        ref={input}
        autoComplete={autoComplete ? 'on' : 'off'}
        required={required}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
}

// 👇 PropTypes didefinisikan SETELAH komponen, bukan sebelum export
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
  autoComplete: PropTypes.bool,
  required: PropTypes.bool,
  isFocused: PropTypes.bool,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
};
