import ReviewsItem from './ReviewsItem.tsx';
import { Reviews } from '../../../../types/Review.ts';

type Props = {
  reviews: Reviews;
}

const ReviewsList = ({ reviews }: Props) => (
  <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) =>
        <ReviewsItem key={review.id} review={review}/>
      )}
    </ul>
  </>
);

export default ReviewsList;
