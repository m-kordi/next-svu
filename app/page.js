import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Link href="/testme"><h1 className={styles.coco}>go to testme</h1></Link>
    </div>
  )
}
