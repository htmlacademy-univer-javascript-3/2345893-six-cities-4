import OfferCard from '../../../components/OfferCard.tsx';
import { OfferType } from '../../../types/offerType.ts';

type Props = {
  offers: Array<OfferType>;
}
const NearOffers = ({ offers }: Props) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) =>
          <OfferCard key={offer.id} {...offer}/>
        )}
      </div>
    </section>
  );
};

export default NearOffers;
