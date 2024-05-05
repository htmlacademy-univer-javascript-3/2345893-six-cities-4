import PlaceCard from './components/PlaceCard';
import { OfferType } from '../../types/offerType.ts';

type Props = {
  favorites: { [city: string]: Array<OfferType> };
}

function Favorites({ favorites }: Props) {
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
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>);
}

export default Favorites;
