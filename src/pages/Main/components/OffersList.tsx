import OfferCard from '../../../components/OfferCard.tsx';
import type { OffersType } from '../../../types/OffersType.ts';

type Props = {
  offers: OffersType;
  onListItemHover: (id: string) => void;
}

function OffersList({ offers, onListItemHover }: Props) {
  return (
    <ul className="cities__places-list places__list tabs__content">
      {offers.length &&
        offers.map((offer) => (
          <li key={offer.id} onMouseEnter={() => onListItemHover(offer.id)}>
            <OfferCard {...offer}/>
          </li>)
        )}
    </ul>
  );
}

export default OffersList;
