export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite'
}

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Offers = 'OFFERS',
  OfferInfo = 'OFFER_INFO',
  OffersNearby = 'OFFERS_NEARBY',
  User = 'USER',
  Cities = 'CITIES',
  Reviews = 'REVIEWS'
}
