import React from 'react';

import '#styles/scss/footer.scss'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__item footer__logo"></div>
          <div className="footer__item footer__text">
            Мы являемся официальными офисами продаж РЕСО-Гарантия в Санкт-Петербурге

            Договор поручения 5622531 от 24.03.2010

            Оформить полис можно как в любом нашем офисе так и заказать онлайн или заказать бесплатную доставку в удобное время и место.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;