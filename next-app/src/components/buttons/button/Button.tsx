import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}
export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      type="submit"
      className=" inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      {children}
    </button>
  )
}
