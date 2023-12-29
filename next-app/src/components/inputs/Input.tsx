import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  helpText?: string
  description?: string
}
export const Input = ({
  label = '',
  name = '',
  helpText = '',
  description = '',
  ...props
}: InputProps) => {
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
        id={name}
        {...props}
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${helperTextBorder}`}
      />
      <p className={`text-xs italic ${helpTextColor}`}>
        {helpText || description}
      </p>
    </>
  )
}
