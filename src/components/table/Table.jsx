import React, { useEffect } from 'react'
import Data from './Data'
import Title from './Title'
import Ticker from '../../api/polygon-ticker.js'
import Loading from '../loading/Loading'

const Table = () => {
    const URL = 'https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=z763xgz4zplhCz0dglQZtc59e9wKGzgM'
    const [data, searchData] = Ticker()

    useEffect(() => {
        searchData(URL)
    }, [])

    return (
        <table className='table-container'>
            <Title />
            <tbody className='table-container__body'>
                {data ? data.map((data) => (<Data country={data.locale} ticker={data.ticker} name={data.name} />)) :
                    <Loading />}
            </tbody>
        </table>
    )
}

export default Table