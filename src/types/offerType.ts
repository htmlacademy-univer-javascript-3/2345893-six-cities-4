export type OfferType = {
  id: string;
  price: number;
  name: string;
  type: string;
  rating: number;
  img: string;
  isPremium?: boolean;
  isFavorite?: boolean;
  lat: number;
  lng: number;
  city: string;
}
