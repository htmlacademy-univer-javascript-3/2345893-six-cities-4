import { Link } from 'react-router-dom';
import { OfferType } from '../types/OffersType.ts';
import { useAppDispatch } from "../hooks/useAppDispatch.ts";
import { changeIsFavorite } from "../store/apiActions.ts";
import { useAppSelector } from "../hooks/useAppSelector.tsx";
import { AppRoute, AuthorizationStatus } from "../const.ts";
import { useState } from "react";
import { redirectToRoute } from "../store/action.ts";
import { getAuthorizationStatus } from "../store/userProcess/selectors.ts";

function OfferCard({ id, price, title, type, rating, previewImage, isPremium = false, isFavorite = false }: OfferType) {
  const hasAccess = useAppSelector(getAuthorizationStatus);

  const [favorite, setFavorite] = useState(isFavorite);

  const dispatch = useAppDispatch();

  const onClickFavorite = () => {
    if (hasAccess === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login))
    }
    dispatch(changeIsFavorite({ id, status: !favorite ? 1 : 0 }));
    setFavorite(!favorite);
  }

  return (
    <article className="cities__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} reloadDocument>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button place-card__bookmark-button${favorite ? '--active' : ''} button`}
            type="button"
            onClick={onClickFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 2 * 10}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
