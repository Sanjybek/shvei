import style from './style.module.scss';
import picture1 from '../../picture/card_info.png';
import picture2 from '../../picture/card_info 2.png';
import picture3 from '../../picture/card_info 3png.png';
import picture4 from '../../picture/card_info 4.png';

const InfoCards = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.info}>
          <h3 className={style.info__title}>Наши премущества</h3>
          <div className={style.info__cards}>
            <div className={style.info__card}>
              <img className={style.info__picture_min} src={picture2} alt="" />
              <p className={style.info__text}>Подбираем ткань, фурнитуру вместе с вами</p>
            </div>
            <div className={style.info__card}>
              <img className={style.info__picture} src={picture1} alt="" />
              <p className={style.info__text}>Профессиональное планирование</p>
            </div>
            <div className={style.info__card}>
              <img className={style.info__picture} src={picture3} alt="" />
              <p className={style.info__text}>Квалифицированные специалисты</p>
            </div>
            <div className={style.info__card}>
              <img className={style.info__picture_min} src={picture4} alt="" />
              <p className={style.info__text}>Современное оборудование</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
