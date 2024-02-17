import { Link } from 'react-router-dom';
import svg from '../../picture/shvai prom.png';
import style from './style.module.scss';
const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <nav className={style.header}>
          <img src={svg} alt={svg} />
          <div className={style.header__block}>
            <Link className={style.header__link} to={'/'}>
              Про нас
            </Link>
            <Link className={style.header__link} to={'/'}>
              Каталог
            </Link>
            <Link className={style.header__link} to={'/'}>
              Технология
            </Link>
            <Link className={style.header__link} to={'/'}>
              Контакты
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
