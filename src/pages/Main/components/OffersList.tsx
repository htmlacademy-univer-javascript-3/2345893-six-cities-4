import OfferCard from '../../../components/OfferCard.tsx';
import { OfferType } from '../../../types/offerType.ts';

type Props = {
  offers: Array<OfferType>;
}

function OffersList({ offers }: Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.length &&
        offers.map((offer) =>
          <OfferCard key={offer.id} {...offer}/>
        )}
    </div>
  );
}

export default OffersList;
