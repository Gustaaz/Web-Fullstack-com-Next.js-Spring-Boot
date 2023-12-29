import React, { TextareaHTMLAttributes, forwardRef } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label: string
  helpText?: string
  description?: string
  length?: number
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label = 'Textarea',
      helpText = '',
      description = '',
      name = '',
      length = 0,
      ...rest
    },
    ref,
  ) => {
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
          <div className="flex justify-between">
            {label}
            <span>{length}/100</span>
          </div>
        </label>
        <textarea
          {...rest}
          ref={ref}
          maxLength={100}
          rows={6}
          name={name}
          id={name}
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${helperTextBorder}`}
        />
        <p className={`text-xs italic ${helpTextColor}`}>
          {helpText || description}
        </p>
      </>
    )
  },
)
