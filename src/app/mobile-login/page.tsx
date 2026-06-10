'use client'

import { useEffect } from 'react'

export default function MobileLogin() {
  useEffect(() => {
    window.location.href = 'mcc://login-success'
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      Redirecting back to app...
    </div>
  )
}
