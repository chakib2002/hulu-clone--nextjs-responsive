import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import Requests from '../utils/requests'
export default function Home(props) {
  return (
    <div className="text-gray-300">
      <Head>
        <title>Hulu-clone</title>
        <link rel="icon" href="/hulu.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={props.results} />
    </div>
  )
}

export async function getServerSideProps(context) {

  const genre = context.query.genre;
try{
  const request = await fetch(`https://api.themoviedb.org/3${Requests[genre]?.url || Requests.fetchTrending.url}`)
  let results = await request.json()
  return {
    props: {
      results
    }
  }
}catch(err){
  console.error(err)
}

}
