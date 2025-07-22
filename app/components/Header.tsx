import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#4e3434ff', borderBottom: '1px solid #ccc' }}>
            <Link href="/" style={{ margin: "2px", padding: "5px", background: "green" }} className="text-blue-500 hover:underline"> go to home page </Link>
            <Link href="/posts" style={{ margin: "2px", padding: "5px", background: "green" }} className="text-blue-500 hover:underline">go to posts page </Link>
            <Link href="/articles" style={{ margin: "2px", padding: "5px", background: "green" }} className="text-blue-500 hover:underline"> go to articles page </Link>
        </nav>
    )
}

export default Header
