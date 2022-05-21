import Layout from "../../components/layout"
import Head from "next/head"
import AnimeInfo from "../../components/AnimeInfo"
import AnimePlayer from "../../components/AnimePlayer"
import { useRouter } from "next/router"
import useAnimes from "../../hooks/useAnimes"

const Anime = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { animes, isLoading, isError } = useAnimes(slug);
    let content = null;
    if(isLoading) content = 'Loading' 
    if(isError || animes && animes.message === 'Not found') content = 'Error happened';
    if(animes && !animes.message) {
      content = <><AnimeInfo anime={animes}/><AnimePlayer series={animes.series}/></>;
    }
  return (
      <Layout>
          <Head>
              <title>This is anime name</title>
          </Head>
            {content}
          
      </Layout>
  )
}


export default Anime;