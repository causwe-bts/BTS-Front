import axios from '../../node_modules/axios/index';

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
