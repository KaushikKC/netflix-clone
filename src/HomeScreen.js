import React from 'react';
import "./HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';

function HomeScreen() {
  return <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row
        title='NETFLIX ORGINALS'
        fetchUrl= {requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  </div>;
}

export default HomeScreen;
