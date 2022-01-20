import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {

    console.log('use effect ran')
    setTimeout(() => {
        router.push('/')
    }, 1000000)
}, [])


  return (
    <div className="not-found">
      <h1>Whoops!</h1>
      <h2>That page cannot be found.</h2>
      <h2>Going back to the <Link href="/"><a>Homepage</a></Link> in 5 seconds.</h2>
    </div>

  )
}
