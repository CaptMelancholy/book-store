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
  account: '/account',
  activation: '/activate/:uid/:token',
  reset: '/reset-password',
  new_password: '/password/reset/confirm/:uid/:token',
};

export default DefaultRoutes;
