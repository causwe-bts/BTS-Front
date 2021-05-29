import React, { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
import Head from 'next/head';
import Router from 'next/router';
import { signup } from 'api/user';
import styles from './signup.module.css';

export default function Registration() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  function onSubmit(e) {
    signup(name, password, phone)
      .then(() => {
        Router.push('/signin');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Signin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>회원가입</div>
        <div>
          <p>
            <input value={name} onChange={onChangeName} placeholder="name" />
          </p>
          <p>
            <input value={phone} onChange={onChangePhone} placeholder="phone" />
          </p>
          <p>
            <input value={password} onChange={onChangePassword} placeholder="password" />
          </p>
          <button onClick={onSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
