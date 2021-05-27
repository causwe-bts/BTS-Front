import { addToCart } from 'api/menu.js';
import styles from './[pizza].js';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function DetailMenu() {
  const router = useRouter();
  const { pizza } = router.query;
  const { name, price, description } = router.query;
  const [inputs, setInputs] = useState({
    qua: 1,
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function onButtonClick(e) {
    addToCart(router.query, inputs.qua).then(() => {
      router.push('/menu');
    });
  }

  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>{`가격: ${price}`}</div>
      <div>{`설명: ${description}`}</div>
      <input type="number" min="1" max="20" onChange={onChange} value={inputs.qua} name="qua" />
      <button onClick={onButtonClick}>장바구니 담기</button>
    </div>
  );
}
