import Cookies from 'universal-cookie';
import axios from '../../node_modules/axios/index';
import { resolve } from '../../node_modules/uri-js/dist/es5/uri.all';
import { token } from './user';

export const getMenu = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/api/menu/menulist',
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    })
      .then((res) => {
        resolve(res.data.body.menuList);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getCart = () => {
  return new Promise((resolve, reject) => {
    const cookies = new Cookies();
    const cart = cookies.get('cart');
    resolve(cart);
  });
};

export const addToCart = (menu, qua) => {
  return new Promise((resolve, reject) => {
    const cookies = new Cookies();
    const cart = cookies.get('cart');
    if (cart === undefined) {
      cookies.set('cart', '[]');
    }
    const newcookies = new Cookies();
    const prevCart = newcookies.get('cart');
    const newCart = prevCart.concat([
      {
        menu: menu,
        qua: parseInt(qua),
      },
    ]);
    cookies.set('cart', JSON.stringify(newCart));
    resolve();
  });
};
