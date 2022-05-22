import Layout from '../components/layout'
import useAnime from '../hooks/useAnimes'
import { useState } from 'react';
// Importing Components
import Head from 'next/head'
import AnimeList from '../components/AnimeList'
import SearchBar from '../components/SearchBar'
import PaginationNav from '../components/PaginationNav'
import { SWRConfig } from 'swr';


export default function Home({fallback}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(1);
  const { animes, isLoading, isError } = useAnime(`?page=${activePage}${searchQuery !== '' ? '&search=' + searchQuery : '' }`);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  }

  const handleSearchSubmit = (inputText) => {
    setActivePage(1);
    setSearchQuery(inputText);
  }

  let content = null;
  if(isError) content = 'Error happened';
  if(animes && animes.docs.length > 0) {
    content = <><AnimeList animes={animes.docs} /> <PaginationNav activePage={activePage} handlePageChange={handlePageChange} data={animes} /></>;
  } else {
    content = 'Anime not found'
  }
  if(isLoading) content = 'Loading...';
  return (
    <SWRConfig value={fallback}>
      <Layout>
        <Head>
          <title>This is my main page</title>
          <meta name="description" content="This is just description for my fist page" />
        </Head>
        <main>
          <SearchBar handleSearchSubmit={handleSearchSubmit} />
          {content}
        </main>
      </Layout>
    </SWRConfig>
    
  )
}

export async function getStaticProps() {
  const animes =await fetch('http://89.44.194.174:5000/api/animes/').then(res => res.json());

  return {
    props: {
      fallback: {
        'http://89.44.194.174:5000/api/animes/': animes
      }
    }
  }
}


