import Link from 'next/link';
import classNames from 'classnames';
import styles from './MenuCell.module.css';

export default function MenuCell({ menu, className }) {
  return (
    <Link href={`/menu/${menu.id}`}>
      <div className={classNames(className, styles.container)}>
        <div>{menu.name}</div>
        <div>{menu.price}</div>
        <div>{menu.description}</div>
      </div>
    </Link>
  );
}
