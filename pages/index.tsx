import React, { ReactElement } from 'react'
import HeroImage from '../components/Home/HeroImage/HeroImage'
import UpcomingMovies from '../components/Home/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/Home/PopularMovies/PopularMovies'
import api from '../services'
import GenreMovies from '../components/Home/GenreMovies/GenreMovies'

const upcomingMovies = [
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
]

const popularMovies = [
  {
    imageUrl: '/images/borrar_large.png',
  },
  {
    imageUrl: '/images/borrar_large.png',
  },
  {
    imageUrl: '/images/borrar_large.png',
  },
  {
    imageUrl: '/images/borrar_large.png',
  },
]

export default function Home({
  featured,
  upcoming,
  popular,
  groupedByGenre,
}: any): ReactElement {
  return (
    <>
      <HeroImage
        title={featured.title}
        overview={featured.overview}
        imgUrl={featured.imgUrl}
      />
      <UpcomingMovies movies={upcoming} />
      <PopularMovies movies={popular} />
      {groupedByGenre.map((group) => (
        <GenreMovies
          title={group.genre}
          key={group.name}
          movies={group.movies}
        />
      ))}
    </>
  )
}

Home.getInitialProps = async () => {
  const [{ data: mainMovies }, { data: genresMovies }] = await Promise.all([
    api.movies.getMain(),
    api.movies.getGroupedByGenre(),
  ])

  return {
    ...mainMovies,
    groupedByGenre: genresMovies,
  }
}