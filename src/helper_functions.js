import { useCallback, useState } from "react";

export const fall = () => {
  console.log("falling!");
  const words = [
    "React","bootstrap","reactUI","Javascript","Node.js","Git","Ruby","Rails","PostGreSQL"
  ]
}

export const useModalState = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => {
    setIsOpen(true)
  },[])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])
  
  return {isOpen,open,close}
}
