import EmptyPlaceholder from './components/EmptyPlaceholder';
import OffersList from './components/OffersList.tsx';
import { OfferType } from '../../types/offerType.ts';
import Map from '../../components/Map.tsx';
import { useState } from 'react';
import { Point } from '../../types/Point.ts';
import LocationTabs from './components/LocationTabs.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.tsx';
import { sortOffersByPrice } from '../../helpers/sortOffersByPrice.ts';
import { sortOffersByRating } from '../../helpers/sortOffersByRating.ts';

type Props = {
  offers: Array<OfferType>;
}

function Main({ offers }: Props) {
  const city = useAppSelector((state) => state.city);

  const offersByCity = offers.filter((offer) => offer.city === city.title);

  const points = offersByCity.map((offer) => {
    return {
      title: offer.name,
      lat: offer.lat,
      lng: offer.lng
    };
  });

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const handleListItemHover = (title: string) => {
    const currentPoint = points.find((point) => point.title === title);

    setSelectedPoint(currentPoint);
  };

  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>('Popular');

  const offersByPriceToHigh = () => {
    sortOffersByPrice(offers, true);
    setSelectedSort('Price: low to high');
  };

  const offersByPriceToLow = () => {
    sortOffersByPrice(offers);
    setSelectedSort('Price: high to low');
  };

  const offersByRating = () => {
    sortOffersByRating(offers);
    setSelectedSort('Top rated first');
  };

  return (
    <div className="page page--gray page--main">
      <main className={`page__main page__main--index ${!offersByCity.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationTabs/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {offersByCity.length ?
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersByCity.length} places to stay in {city.title}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpenSelect(!isOpenSelect)}>
                      {selectedSort}
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    {isOpenSelect &&
                      <ul className="places__options places__options--custom places__options--opened">
                        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                        <li className="places__option" tabIndex={0} onClick={offersByPriceToHigh}>
                          Price: low to high
                        </li>
                        <li className="places__option" tabIndex={0} onClick={offersByPriceToLow}>
                          Price: high to low
                        </li>
                        <li className="places__option" tabIndex={0} onClick={offersByRating}>
                          Top rated first
                        </li>
                      </ul>
                    }
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <OffersList offers={offersByCity} onListItemHover={handleListItemHover}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map city={city} points={points} selectedPoint={selectedPoint}/>
                </div>
              </> :
              <EmptyPlaceholder city={city.title}/>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
