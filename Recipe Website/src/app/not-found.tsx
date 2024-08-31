import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>This page can not bet found.</h1>
        <Link href={"/"}>Go to home</Link>
    </div>
  )
}

export default NotFound