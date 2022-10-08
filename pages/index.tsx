import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "./../components/Banner";
import requests from "../utils/requests";
import { Movie } from "../typing";
import Row from "../components/Row";
interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}
const Home = (props: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={props.netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={props.trendingNow} />
          <Row title="Top Rated" movies={props.topRated} />
          <Row title="Action Thrillers" movies={props.actionMovies} />

          <Row title="Comedies" movies={props.comedyMovies} />
          <Row title="Scary Movies" movies={props.horrorMovies} />
          <Row title="Romance Movies" movies={props.romanceMovies} />
          <Row title="Documentaries" movies={props.documentaries} />
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const trendingNow = await axios
    .get(requests.fetchTrending)
    .then((res) => res.data.results);
  const netflixOriginals = await axios
    .get(requests.fetchNetflixOriginals)
    .then((res) => res.data.results);
  const topRated = await axios
    .get(requests.fetchTopRated)
    .then((res) => res.data.results);
  const actionMovies = await axios
    .get(requests.fetchActionMovies)
    .then((res) => res.data.results);
  const comedyMovies = await axios
    .get(requests.fetchComedyMovies)
    .then((res) => res.data.results);
  const horrorMovies = await axios
    .get(requests.fetchHorrorMovies)
    .then((res) => res.data.results);
  const romanceMovies = await axios
    .get(requests.fetchRomanceMovies)
    .then((res) => res.data.results);
  const documentaries = await axios
    .get(requests.fetchDocumentaries)
    .then((res) => res.data.results);
  return {
    props: {
      netflixOriginals: netflixOriginals,
      trendingNow: trendingNow,
      topRated: topRated,
      actionMovies: actionMovies,
      comedyMovies: comedyMovies,
      horrorMovies: horrorMovies,
      romanceMovies: romanceMovies,
      documentaries: documentaries,
    },
  };
};
