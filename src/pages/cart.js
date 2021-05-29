import { useEffect, useState } from 'react';

import { getCart } from 'api/menu';
import styles from './cart.module.css';

export default function Cart() {
  const [cart, setCart] = useState([]);
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  useEffect(() => {
    getCart().then((cart) => {
      if (cart) {
        console.log(cart);
        setCart(cart);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      {cart.length === 0 && <div>카트가 비어있습니다</div>}
      {cart.map((singleOrder) => {
        return (
          <div className={styles.cart_cell}>
            {singleOrder.menu.name} {singleOrder.qua}개
          </div>
        );
      })}
      <div>
        총액 :
        {cart.length !== 0 &&
          cart
            .map((singleOrder) => {
              return singleOrder.menu.price * singleOrder.qua;
            })
            .reduce((a, b) => {
              return a + b;
            })}
        원
      </div>
      <div>
        <span
          className={`d-inline-block ${styles.order_button}`}
          tabIndex="0"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="서비스 준비중입니다."
        >
          <button className="btn btn-primary" disabled>
            주문하기
          </button>
        </span>
      </div>
    </div>
  );
}
