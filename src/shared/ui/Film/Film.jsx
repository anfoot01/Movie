import PropTypes from "prop-types";
import "./Film.scss";
export const Film = ({ film }) => {
  const handleUnFavorite = () => {
    console.log("handleUnFavorite");
  };
  return (
    <div className="film">
      <img className="film__img" src={film.image} alt={film.title} />
      <div className="film__info">
        <h2 className="film__title"> {film.title}</h2>
        <p className="film__desc">
          {film.year} | {film.genre}
        </p>
      </div>

      {film.isFavorited && <div onClick={handleUnFavorite}><button className="film__favorite"><img className="film__favorite__img" src="/src/assets/icons/heart-1.svg" alt="" /></button> </div>}
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.object,
};
