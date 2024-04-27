import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { Link } from "react-router-dom";
import "/src/pages/home/Home.scss";
export const Home = () => {
  const listItems = films.map((film) => <Film key={film.id} film={film} />);

  return (
    <div className="home">
      <div className="home-bg">
        <Header />
        <div className="p-l">
          <div className="home__card">
            <div className="home__title">Insider</div>
            <div className="home__desc">2022 | Comedy horror | 1 Season</div>
            <div className="home__btn-group">
              <button className="home__btn">Watch now</button>
              <button className="home__fav">
                <img
                  className="home__heart"
                  src="src/assets/icons/heart.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home__content">
        <h2 className="home__title-second">Trending</h2>
        <div className="trending-list">{listItems}</div>

        <div className="continue-watching">
          <h1 className="continue-watching__title">Continue watching</h1>
          <div className="continue-watching__items">
            <div className="continue-watching__item1">
              <button className="continue-watching__btn" type="button">
                <img
                  className="continue-watching__btn__img"
                  src="src/assets/icons/heart.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="continue-watching__item2">
              <button className="continue-watching__btn" type="button">
                <img
                  className="continue-watching__btn__img"
                  src="src/assets/icons/heart.svg"
                  alt=""
                />
              </button>
            </div>
            <div className="continue-watching__item3">
              <button className="continue-watching__btn" type="button">
                <img
                  className="continue-watching__btn__img"
                  src="src/assets/icons/heart.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
