import OfferCard from '../../../components/OfferCard.tsx';
import { OffersType } from '../../../types/OffersType.ts';

type Props = {
  offers: OffersType;
}
const NearOffers = ({ offers }: Props) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offers.map((offer) =>
        <OfferCard key={offer.id} {...offer}/>
      )}
    </div>
  </section>
);

export default NearOffers;
