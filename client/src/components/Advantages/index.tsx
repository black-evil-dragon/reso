import React from 'react';

function Advantages() {
    return (
        <>
            <div className="advantages">
                <div className="advantages__wrapper">

                    <div className="advantages__title">
                        <h2>
                            Преимущества РЕСО
                        </h2>
                        <h3>

                        </h3>
                    </div>

                    <div className="advantages__group">
                        {
                            [1,2,3,4,5,6].map(() => (
                                <div className="advantages__item">
                                    <div className="advantages__item-icon">

                                    </div>
                                    <div className="advantages__item-title">
                                        <span className='title'>Удобное расположение</span>
                                        <span className='subtitle'>Удобное расположение офисов и режим работы</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advantages;