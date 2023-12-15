'use client'
import { useRouter } from 'next/navigation'
import { MoveLeft } from 'lucide-react'

export function BackButton() {
  const { back } = useRouter()
  return (
    <button onClick={back} className="hover:text-blue-600  ">
      <MoveLeft className="m-auto" size={22} />
    </button>
  )
}
