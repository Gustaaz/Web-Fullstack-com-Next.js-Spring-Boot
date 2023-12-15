import { LinkFooter } from './LinkFooter'
import { TitleColumnsFooter } from './TitleColumnsFooter'

interface ColumnsFooterProps {
  title: string
  links: Array<{
    title: string
    href: string
  }>
}
export function ColumnsFooter({ title, links }: ColumnsFooterProps) {
  return (
    <div className="flex flex-col items-start justify-start space-y-6 sm:w-40 md:w-auto xl:w-72">
      <TitleColumnsFooter title={title} />
      {links.map((link) => (
        <LinkFooter key={link.title} href={link.href} title={link.title} />
      ))}
    </div>
  )
}
