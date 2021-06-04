import React, { useEffect } from 'react'
import Data from './Data'
import Title from './Title'
import Ticker from '../../api/polygon-ticker.js'
import Price from '../../api/polygon-price'
import Loading from '../loading/Loading'

const Table = () => {
    const URL = 'https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=20&page=1&apiKey=z763xgz4zplhCz0dglQZtc59e9wKGzgM'
    const [data, searchData] = Ticker()
    const [price, searchPrice] = Price()
    const staticVariation = [5.33, -0.17, 2.11, 0.66, 1.80, -1.67, 3.80, -1.55, 0.00, -2.55,
        6.88, 0.91, -0.44, 1.10, 2.77, 7.82, 0.01, 0.00, 0.84, 1.50]

    useEffect(() => {
        searchData(URL)
    }, [])

    // PESQUISA DE PREÇO SEM FUNCIONAR
    //if (data) {
    //    searchPrice(data)
    //}

    if (data) {
        console.log(data)
    }

    return (
        <table className='table-container'>
            <Title />
            <tbody className='table-container__body'>
                {data ? data.map((data, i) => (<Data country={data.locale} ticker={data.ticker} name={data.name} market={data.market}
                    primaryExch={data.primaryExch} variation={staticVariation[i]} key={i} />)) :
                    <Loading />}
            </tbody>
        </table>
    )
}

export default Table