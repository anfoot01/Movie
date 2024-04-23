import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";

export const Trending = () => {
	const listItems = films.map((film) => <Film key={film.id} film={film} />);

	return (
		<>
			<Header />
			<div className="trending">
				<div className="title">Trending</div>
				<div className="trending-list">
					{listItems}
				</div>
			</div>
			<div className="main-trend">sjdhfgjksdhf</div>
		</>
	);
};
