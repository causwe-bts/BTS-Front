import { addToCart } from 'api/menu.js';
import styles from './[pizza].module.css';
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
      <h1>{name}</h1>
      <div className={styles.description_box}>{`가격: ${price}`}</div>
      <div className={styles.description_box}>{`설명: ${description}`}</div>
      <input
        className="form-control"
        type="number"
        min="1"
        max="20"
        onChange={onChange}
        value={inputs.qua}
        name="qua"
      />
      <button className={`btn btn-primary ${styles.submit_button}`} onClick={onButtonClick}>
        장바구니 담기
      </button>
    </div>
  );
}
