const DefaultRoutes = {
  default: '/',
  home: 'home',
  cart: 'cart',
  authorization: 'auth',
  book: '/book/:isbn13',
  search: '/results/:search-name',
  account: '/account/:uid',
  activation: '/activate/:uid/:token',
  reset: '/reset-password',
};

export default DefaultRoutes;
