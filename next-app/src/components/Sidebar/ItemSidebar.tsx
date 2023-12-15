import Link from 'next/link'

interface ItemSidebarProps {
  open: boolean
  items: Array<{
    name: string
    href: string
    icon: React.ReactNode
  }>
}

export function ItemSidebar({ open, items }: ItemSidebarProps) {
  const showClass = open ? 'hidden' : ''
  const hiddenClass = open ? '' : 'translate-x-28 opacity-0 overflow-hidden'
  const menuHoverClass = open
    ? ''
    : 'group-hover:absolute overflow-hidden left-48 w-0 whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-500'

  return (
    <div className="relative mt-4 flex flex-col gap-4">
      {items.map((item, index) => {
        const transitionDelay = open ? `${index + 3}00ms` : ''
        return (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center gap-3.5 rounded-md p-2 text-sm font-medium hover:bg-gray-800"
          >
            <div>{item.icon}</div>
            <h2
              style={{ transitionDelay }}
              className={`whitespace-pre duration-500 ${hiddenClass}`}
            >
              {item.name}
            </h2>
            <h2 className={`${showClass} ${menuHoverClass}`}>{item.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}
