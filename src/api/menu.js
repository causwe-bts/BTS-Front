import Cookies from 'universal-cookie';
import axios from '../../node_modules/axios/index';
import { resolve } from '../../node_modules/uri-js/dist/es5/uri.all';

export const getMenu = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 'combi',
        name: '콤비네이션 피자',
        price: 19000,
        description: '기본기 피자',
      },
      {
        id: 'hawaian',
        name: '하와이안 피자',
        price: 20000,
        description: '파인애플이 듬뿍 올라간 피자',
      },
      {
        id: 'pepperoni',
        name: '페퍼로니 피자',
        price: 22000,
        description: '피자의 정석',
      },
    ]);
  });
};

export const getCart = () => {
  return new Promise((resolve, reject) => {
    const cookies = new Cookies();
    const cart = cookies.get('cart');
    resolve(cart);
  });
};

export const addToCart = (id, qua) => {
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
        id: id,
        qua: parseInt(qua),
      },
    ]);
    cookies.set('cart', JSON.stringify(newCart));
    resolve();
  });
};
