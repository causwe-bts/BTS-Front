import React, { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
import Head from 'next/head';
import Router from 'next/router';
import styles from './signup.module.css';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // function isEmail(asValue) {
  //   var regExp =
  //     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  //   return regExp.test(asValue);
  // }
  // function isPassword(asValue) {
  //   var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
  //   return regExp.test(asValue);
  // }
  // function isPhone(asValue) {
  //   var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
  //   return regExp.test(asValue);
  // }
  // function isName(asValue) {
  //   var regExp = /^[a-zA-Z]{20}$/;
  //   return regExp.test(asValue);
  // }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
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
    // console.log(isName(name));
    // console.log(isEmail(email));
    // console.log(isPassword(password));
    // console.log(isPhone(phone));

    console.log({ email });
    console.log({ password });
    console.log({ name });
    console.log({ phone });

    var cookies = new Cookies();
    cookies.set('auth', 'sample_token');
    Router.push('/menu');
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
            <input value={email} onChange={onChangeEmail} placeholder="email" />
          </p>
          <p>
            <input value={password} onChange={onChangePassword} placeholder="password" />
          </p>
          <p>
            <input value={name} onChange={onChangeName} placeholder="name" />
          </p>
          <p>
            <input value={phone} onChange={onChangePhone} placeholder="phone" />
          </p>
          <button onClick={onSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
