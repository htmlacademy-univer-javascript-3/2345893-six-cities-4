import ReviewsItem from './ReviewsItem.tsx';
import { Review } from '../../../../types/Review.ts';

type Props = {
  reviews: Array<Review>;
}

const ReviewsList = ({ reviews }: Props) => {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewsItem key={review.text} review={review}/>
        )}
      </ul>
    </>
  );
};

export default ReviewsList;
