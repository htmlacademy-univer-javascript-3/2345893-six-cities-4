import { Navigate, useParams } from 'react-router-dom';
import CommentForm from './components/CommentForm.tsx';
import ReviewsList from './components/Reviews/ReviewsList.tsx';
import { CITIES } from '../../mocks/cities.ts';
import NearOffers from './components/NearOffers.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.tsx';
import Loader from "../../components/Loader.tsx";

function Offer() {
  const offers = useAppSelector((state) => state.offers);
  const isLoading = useAppSelector((state) => state.isOffersDataLoading);
  const params = useParams();

  const offer = offers.find((item) => item.id === params.id);
  const city = CITIES.find((c) => c.title === offer?.city.name) ?? CITIES[0];

  if (!offer && !isLoading) {
    return <Navigate to='/'/>;
  }

  const reviews = [
    {
      name: 'Max',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      date: 'April 2019',
      rating: 4,
      avatar: 'img/avatar-max.jpg',
    }
  ];

  const nearOffers = offers.slice(0, 3);

  const points = nearOffers.map((offerItem) => ({
    title: offerItem.title,
    lat: offerItem.location.latitude,
    lng: offerItem.location.longitude
  }));

  return (
    <main className="page__main page__main--offer">
      {isLoading || !offer ?
        <Loader/> :
        <>
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
                </div>
                <div className="offer__image-wrapper">
                  <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                </div>
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <button
                    className={`offer__bookmark-button offer__bookmark-button${offer.isFavorite ? '--active' : ''} button`}
                    type="button"
                  >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${offer.rating * 2 * 10}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    <li className="offer__inside-item">
                      Wi-Fi
                    </li>
                    <li className="offer__inside-item">
                      Washing machine
                    </li>
                    <li className="offer__inside-item">
                      Towels
                    </li>
                    <li className="offer__inside-item">
                      Heating
                    </li>
                    <li className="offer__inside-item">
                      Coffee machine
                    </li>
                    <li className="offer__inside-item">
                      Baby seat
                    </li>
                    <li className="offer__inside-item">
                      Kitchen
                    </li>
                    <li className="offer__inside-item">
                      Dishwasher
                    </li>
                    <li className="offer__inside-item">
                      Cabel TV
                    </li>
                    <li className="offer__inside-item">
                      Fridge
                    </li>
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74"
                           alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">
                    Angelina
                </span>
                    <span className="offer__user-status">
                    Pro
                </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                      building is green and from 18th century.
                    </p>
                    <p className="offer__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where
                      the
                      bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <ReviewsList reviews={reviews}/>
                  <CommentForm/>
                </section>
              </div>
            </div>
            <section style={{ maxWidth: '1144px', margin: 'auto', marginBottom: '50px' }}>
              {/*<Map city={city} points={points} selectedPoint={undefined}/>*/}
            </section>

          </section>
          <div className="container">
            <NearOffers offers={nearOffers}/>
          </div>
        </>}
    </main>
  );
}

export default Offer;
