import { memo } from 'react';

import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface SideBarProps {
	genres: Array<{
		id: number;
		name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
		title: string;
	}>;
	selectedGenreId: number;
	onGenreSelect: (genreId: number) => void;
}

function SideBarComponent({
	genres,
	selectedGenreId,
	onGenreSelect,
}: SideBarProps) {
	function handleClickButton(id: number) {
		onGenreSelect(id);
	}

	return (
		<nav className="sidebar">
			<span>
				Watch<p>Me</p>
			</span>

			<div className="buttons-container">
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}

export const SideBar = memo(SideBarComponent);
