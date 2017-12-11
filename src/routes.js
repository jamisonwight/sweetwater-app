import Home from 'components/Home/home';
import Cart from 'components/Cart/cart';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cart',
    name: Cart,
    component: Cart
  },
 
];

export default routes;
