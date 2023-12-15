import { ReactNode } from 'react'

interface FooterProps {
  title: string | ReactNode
  href: string
}

export function LinkFooter({ title, href }: FooterProps) {
  return (
    <a
      target="_blank"
      href={href}
      className="text-left text-base leading-none text-gray-100 hover:text-gray-400"
      rel="noreferrer"
    >
      {title}
    </a>
  )
}
