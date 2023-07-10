'use client'

import { usePathname } from 'next/navigation'

export const CurrentPagePath = ()=>{
  const pathname = usePathname();
  return <h1>Current path: {pathname}</h1>;
}