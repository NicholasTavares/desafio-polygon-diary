import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Data = ({ country, ticker, name, market, primaryExch, variation }) => {

    return (
        <tr className='table-container__body__row'>
            <td className='table-container__body__td'>{ticker}</td>
            <td className='table-container__body__td'>{name}</td>
            <td className='table-container__body__td'>{country}</td>
            <td className='table-container__body__td'>{market}</td>
            <td className='table-container__body__td'>{primaryExch}</td>
            <td className={`table-container__body__${variation > 0 ? 'td-green' : variation === 0 ? 'td' : 'td-red'}`}>{variation}%</td>
            <td className='table-container__body__td'>$733,026,826,051</td>
        </tr>
    )
}

export default Data