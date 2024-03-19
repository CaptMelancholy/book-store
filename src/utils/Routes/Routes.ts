const DefaultRoutes = {
  default: '/',
  home: 'home',
  cart: '/cart',
  authorization: '/auth',
  activation_request: '/to-activate',
  activation_comp: '/success',
  favorite: '/fav',
  book: '/book/:isbn13',
  search: '/results/:search/:page?',
  account: '/account/:uid',
  activation: '/activate/:uid/:token',
  reset: '/reset-password',
};

export default DefaultRoutes;
