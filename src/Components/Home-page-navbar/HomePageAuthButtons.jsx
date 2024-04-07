import React from 'react'
import Link from 'next/link'

const HomePageAuthButtons = ({text, color}) => {
  return (
    <Link href="/auth/login">
        <div className={"text-lg font-medium"}>{text}</div>
    </Link>
  )
}

export default HomePageAuthButtons