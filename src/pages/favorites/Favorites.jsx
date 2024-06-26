import { Header } from "/src/shared/ui/Header/Header.jsx";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Favorites = () => {
	const listItems = films.map((film) => <Film key={film.id} film={film} />);

	return (
		<>
		
			<Header></Header>
			<div className="container-fav">
			<div className="favorites">
				<div className="title">Favourites</div>
				<div className="favorites-list">
					{listItems}
				</div>
			</div>
			</div>
		</>
	);
};
