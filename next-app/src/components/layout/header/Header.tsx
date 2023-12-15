import { User } from 'lucide-react'

export const Header = () => {
  return (
    <div className="flex h-16 items-center justify-end gap-2 bg-white px-4">
      <p className="text-sm text-gray-700 md:text-base">test@test.com</p>
      <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  )
}
