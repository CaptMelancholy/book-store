const DefaultRoutes = {
  default: '',
  home: '/home',
  search: '/results/:search-name',
  book: '/book/:book-name',
  cart: '/cart',
  account: '/account/:uid',
  activation: '/activate/:uid/:token',
  authorization: '/auth',
  reset: '/reset-password',
};

export default DefaultRoutes;
