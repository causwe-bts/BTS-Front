import Cookies from 'universal-cookie';
import Head from 'next/head';
import Router from 'next/router';
import { signin } from 'api/user';
import styles from './signin.module.css';
import { useState } from 'react';

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function onSubmit(e) {
    console.log(inputs.username, inputs.password);
    signin(inputs.username, inputs.password)
      .then(() => {
        Router.push('/menu');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={`${styles.form_label}`}>Login</div>
        <div>
          <input
            className={`form-control ${styles.form_input}`}
            placeholder="username"
            name="username"
            onChange={onChange}
            value={inputs.username}
          />
          <input
            className={`form-control ${styles.form_input}`}
            placeholder="password"
            name="password"
            onChange={onChange}
            value={inputs.password}
          />
          <button className="btn btn-primary" onClick={onSubmit}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
