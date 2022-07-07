import { memo } from 'react';

import { MovieCard } from '../components/MovieCard';

import { Header } from './Header';

import '../styles/content.scss';

interface ContentProps {
	movies: Array<{
		imdbID: string;
		Title: string;
		Poster: string;
		Ratings: Array<{
			Source: string;
			Value: string;
		}>;
		Runtime: string;
	}>;
	selectedGenre: {
		title: string;
	};
}

function ContentComponent({ movies, selectedGenre }: ContentProps) {
	return (
		<div className="container">
			<Header selectedGenreTitle={selectedGenre.title} />

			<main>
				<div className="movies-list">
					{movies.map((movie) => (
						<MovieCard
							key={movie.imdbID}
							title={movie.Title}
							poster={movie.Poster}
							runtime={movie.Runtime}
							rating={movie.Ratings[0].Value}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export const Content = memo(ContentComponent);
