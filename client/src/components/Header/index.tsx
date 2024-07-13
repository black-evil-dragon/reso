import React from 'react';
import '#styles/scss/header.scss'

function Header() {

    return (
        <>
            <header className='header'>
                <div className="header__wrapper">
                    <div className="header__item header__logo">
                        logo
                    </div>

                    <div className="header__item">Услуги</div>
                    <div className="header__item">Ваш агент</div>
                    <div className="header__item">Контакты</div>

                    <div className="header__item">
                        +7 (000) 000 00 00
                    </div>

                    <div className="header__item header__button">
                        button
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;