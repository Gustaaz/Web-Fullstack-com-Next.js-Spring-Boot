import React, { TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label: string
  helpText?: string
  description?: string
}

export const Textarea = ({
  label = 'Textarea',
  name = 'textarea',
  helpText = '',
  description = '',
  ...props
}: TextareaProps) => {
  const helpTextColor = `${helpText ? 'text-red-500' : 'text-gray-600'}`
  const helperTextBorder = `${helpText && 'border-red-300'} ${
    helpText ? 'focus:border-red-500' : 'focus:border-gray-500'
  } `
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        {...props}
        id={name}
        name={name}
        rows={6}
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${helperTextBorder}`}
      />
      <p className={`text-xs italic ${helpTextColor}`}>
        {helpText || description}
      </p>
    </>
  )
}
