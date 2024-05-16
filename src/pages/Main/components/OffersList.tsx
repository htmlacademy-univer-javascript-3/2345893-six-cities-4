import OfferCard from '../../../components/OfferCard.tsx';
import { OfferType } from '../../../types/offerType.ts';

type Props = {
  offers: Array<OfferType>;
  onListItemHover: (title: string) => void;
}

function OffersList({ offers, onListItemHover }: Props) {
  return (
    <ul className="cities__places-list places__list tabs__content">
      {offers.length &&
        offers.map((offer) => (
          <li key={offer.id} onMouseEnter={() => onListItemHover(offer.title)}>
            <OfferCard {...offer}/>
          </li>)
        )}
    </ul>
  );
}

export default OffersList;
