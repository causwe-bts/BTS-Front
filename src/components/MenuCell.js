import Link from 'next/link';
import classNames from 'classnames';
import styles from './MenuCell.module.css';

export default function MenuCell({ menu, className }) {
  const { name, price, description, imgURL } = menu;
  return (
    <Link
      href={{
        pathname: `/menu/${menu.id}`,
        query: menu,
      }}
    >
      <div className={classNames(className, styles.container)}>
        <div>
          <img src={imgURL}></img>
        </div>
        <div>
          <h3>{name}</h3>
          <div>{price}원</div>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
}
