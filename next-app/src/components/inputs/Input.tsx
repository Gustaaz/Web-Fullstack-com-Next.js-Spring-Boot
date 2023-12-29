import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  helpText?: string
  description?: string
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = '',
      helpText = '',
      description = '',
      name,
      type = 'text',
      ...rest
    },
    ref,
  ) => {
    const helperTextBorder = `${helpText && 'border-red-300'} ${
      helpText ? 'focus:border-red-500' : 'focus:border-gray-500'
    } `
    const helpTextColor = `${helpText ? 'text-red-500' : 'text-gray-600'}`

    return (
      <>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          id={name}
          type={type}
          name={name}
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${helperTextBorder}`}
        />
        <p className={`text-xs italic ${helpTextColor}`}>
          {helpText || description}
        </p>
      </>
    )
  },
)
