import React from 'react'

interface TitleFooterProps {
  title: string
}

export function TitleColumnsFooter({ title }: TitleFooterProps) {
  return (
    <h2 className="text-base font-bold leading-4 text-white xl:text-xl xl:font-semibold xl:leading-5">
      {title}
    </h2>
  )
}
