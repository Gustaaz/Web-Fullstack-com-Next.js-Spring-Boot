'use client'
import { useRouter } from 'next/navigation'
import { MoveLeft } from 'lucide-react'

type BackButtonProps = {
  children?: React.ReactNode
}
export function BackButton({ children }: BackButtonProps) {
  const { back } = useRouter()
  return (
    <div className="flex items-center gap-2">
      <button onClick={back} className="hover:text-blue-600  ">
        <MoveLeft className="m-auto" size={22} />
      </button>
      <h1 className="text-2xl font-semibold leading-tight text-gray-800">
        {children}
      </h1>
    </div>
  )
}
