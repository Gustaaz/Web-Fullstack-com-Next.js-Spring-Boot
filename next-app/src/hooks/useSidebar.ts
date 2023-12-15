import { useState } from 'react'

export const useSidebar = () => {
  const [open, setOpen] = useState(false)

  function onClick() {
    setOpen(!open)
  }

  return { open, onClick }
}
