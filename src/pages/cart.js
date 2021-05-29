import { useEffect, useState } from 'react';

import { getCart } from 'api/menu';
import styles from 'pages/cart.module.css';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then((cart) => {
      if (cart) {
        setCart(cart);
      }
    });
  }, []);
  return (
    <div className={styles.container}>
      {cart.length === 0 && <div>카트가 비어있습니다</div>}
      {cart.map((singleOrder) => {
        return (
          <div>
            {singleOrder.menu.name} {singleOrder.qua}개
          </div>
        );
      })}
    </div>
  );
}
