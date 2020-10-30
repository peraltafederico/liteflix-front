import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import HeroImage from '../components/Home/HeroImage/HeroImage'
import UpcomingMovies from '../components/Home/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/Home/PopularMovies/PopularMovies'
import api from '../services'
import GenreMovies from '../components/Home/GenreMovies/GenreMovies'
import HomeSpinner from '../components/Home/HomeSpinner/HomeSpinner'

export default function Home({
  featured,
  upcoming,
  popular,
  groupedByGenre,
}: any): ReactElement {
  const { data: response, isFetching } = useQuery(
    'genreMovies',
    api.movies.getGroupedByGenre,
    {
      initialData: groupedByGenre,
    }
  )

  return (
    <>
      <HeroImage
        title={featured.title}
        overview={featured.overview}
        imgUrl={featured.imgUrl}
      />
      <UpcomingMovies movies={upcoming} />
      <PopularMovies movies={popular} />
      {isFetching ? (
        <HomeSpinner />
      ) : (
        (response?.data || groupedByGenre).map((group: any) => (
          <GenreMovies
            title={group.genre}
            key={group.genre}
            movies={group.movies}
          />
        ))
      )}
    </>
  )
}

export async function getStaticProps(): any {
  const [{ data: mainMovies }, { data: genresMovies }] = await Promise.all([
    api.movies.getMain(),
    api.movies.getGroupedByGenre(),
  ])

  return {
    props: {
      ...mainMovies,
      groupedByGenre: genresMovies,
    },
  }
}
