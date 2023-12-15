'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumb() {
  const currentPathname = usePathname()
  const pathnames = currentPathname.split('/').filter(Boolean)

  pathnames.unshift('/')
  const linkClas =
    'inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-600 hover:text-blue-600'
  const textClas = 'ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 '

  const linkElements = pathnames.map((name, index) => {
    const path = pathnames.slice(0, index + 1).join('')
    const key = name === 'inicio' ? index : name
    const isInicio = name === '/'

    const component = isInicio ? (
      <Link className={`${linkClas} `} href={'/'}>
        <Home size={20} /> Inicio
      </Link>
    ) : (
      <div className="flex items-center">
        <ChevronRight size={20} />
        <Link href={path} className={`${textClas} dark:text-gray-600`}>
          {name}
        </Link>
      </div>
    )

    return (
      <li key={key} className={`${isInicio && 'inline-flex items-center'}`}>
        {component}
      </li>
    )
  })

  return (
    <nav className="mb-5 ml-2 flex flex-wrap md:ml-0" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-1 md:space-x-1">
        {linkElements}
      </ol>
    </nav>
  )
}
