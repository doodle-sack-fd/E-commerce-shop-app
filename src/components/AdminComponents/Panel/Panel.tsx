import { Link, useLocation } from 'react-router-dom';
import styles from './Panel.module.scss';

const Panel = () => {
  const location = useLocation();
  console.log(location);
  return (
    <section className={styles.panel}>
      <div className={styles.panel__container}>
        {location.pathname !== '/admin' && (
          <Link to="/admin">
            <p>Перейти в админ панель</p>
          </Link>
        )}
        {location.pathname === '/admin' && (
          <Link to="/">
            <p>Перейти в магазин</p>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Panel;
