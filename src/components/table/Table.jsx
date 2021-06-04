import React, { useEffect } from 'react'
import Data from './Data'
import Title from './Title'
import Ticker from '../../api/polygon.js'

const Table = () => {
    const BASE_URL = 'https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=z763xgz4zplhCz0dglQZtc59e9wKGzgM'
    const [data, searchData] = Ticker()

    useEffect(() => {
        searchData(BASE_URL)
    }, [])

    return (
        <table className='table-container'>
            <Title />
            <tbody className='table-container__body'>
                <Data />
            </tbody>
        </table>
    )
}

export default Table