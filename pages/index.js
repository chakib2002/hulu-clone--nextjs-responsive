import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="text-gray-300">
      <Head>
        <title>Hulu-clone</title>
        <link rel="icon" href="/hulu.ico" />
      </Head>
      <Header />
    </div>
  )
}
