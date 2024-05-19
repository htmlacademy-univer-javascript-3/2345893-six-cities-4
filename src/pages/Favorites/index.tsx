import PlaceCard from './components/PlaceCard';
import { useAppSelector } from '../../hooks/useAppSelector.tsx';
import { groupBy } from '../../helpers/groupBy.ts';
import { Link } from 'react-router-dom';
import { getOffers } from '../../store/offersProcess/selectors.ts';

function Favorites() {
  const offers = useAppSelector(getOffers);
  const favorites = groupBy(offers.filter((offer) => offer.isFavorite), (offer) => offer.city.name);

  const cities = Object.keys(favorites);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favorites[city] && favorites[city].map((offer) =>
                      <PlaceCard key={offer.id} {...offer}/>
                    )}
                  </div>
                </li>)
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to='/' className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>);
}

export default Favorites;
