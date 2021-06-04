import React from 'react'

const Title = () => {

    return (
        <thead className='table-container__table-title'>
            <tr>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                Ticker
                            </p>
                        </div>
                    </div>
                </th>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                Nome
                            </p>
                        </div>
                    </div>
                </th>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                Country
                            </p>
                        </div>
                    </div>
                </th>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                Market
                            </p>
                        </div>
                    </div>
                </th>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                Primary Exch
                            </p>
                        </div>
                    </div>
                </th>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                24h %
                            </p>
                        </div>
                    </div>
                </th>
                <th className='table-container__table-title__container-item'>
                    <div className='table-container__table-title__container-item__content'>
                        <div className='table-container__table-title__container-item__content__item'>
                            <p className='table-container__table-title__container-item__content__item-text'>
                                Market cap
                            </p>
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
    )
}

export default Title