import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="m-5">Hello Cake</h1>
    </div>
  )
}
