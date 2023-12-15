'use client'
import { Home, AlignRight, PackageOpen } from 'lucide-react'
import { ItemSidebar } from './ItemSidebar'
import { useSidebar } from '@/hooks'

export const Sidebar = () => {
  const { open, onClick } = useSidebar()
  const items = [
    { name: 'Início', href: '/', icon: <Home size={20} /> },
    { name: 'Produtos', href: '/produtos', icon: <PackageOpen size={20} /> },
  ]

  return (
    <div className="relative z-50 flex">
      <div
        className={`min-h-screen bg-[#0e0e0e] ${
          open ? 'w-72' : 'w-16'
        } fixed px-4 text-gray-100 duration-500`}
      >
        <div className="flex justify-end py-3">
          <button className="cursor-pointer" onClick={onClick}>
            <AlignRight size={26} />
          </button>
        </div>
        <nav className="relative mt-4 flex flex-col gap-4">
          <ItemSidebar items={items} open={open} />
        </nav>
      </div>
    </div>
  )
}
