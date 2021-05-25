import { useEffect, useState } from 'react';

import Link from 'next/link';
import MenuCell from 'components/MenuCell.js';
import { getMenu } from 'api/menu';
import styles from './index.module.css';

export default function Menu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getMenu().then((resmenus) => {
      setMenus(resmenus);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div>메뉴 페이지</div>
      <div>
        {menus.map((menu) => {
          return <MenuCell menu={menu} className={styles.menu} key={menu.name} />;
        })}
      </div>
    </div>
  );
}
