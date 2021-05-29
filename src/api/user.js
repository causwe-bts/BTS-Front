import Cookies from 'universal-cookie';
import axios from 'axios';

export const token = () => {
  var cookies = new Cookies();
  return cookies.get('auth');
};

export const signin = (username, password) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/api/user/signin',
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        var cookies = new Cookies();
        cookies.set('auth', res.data.body.token);
        resolve(res.data.body.token);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
