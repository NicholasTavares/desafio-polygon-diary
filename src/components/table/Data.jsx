import React from 'react'

const Data = ({ country, ticker, name }) => {

    return (
        <tr className='table-container__body__row'>
            <td className='table-container__body__td'>{country}</td>
            <td className='table-container__body__td'>Computer Hardware</td>
            <td className='table-container__body__td'>{name}</td>
            <td className='table-container__body__td'>{ticker}</td>
            <td className='table-container__body__td'>3,252.65484656484864</td>
            <td className='table-container__body__td'>3.27%</td>
            <td className='table-container__body__td'>$733,026,826,051</td>
        </tr>
    )
}

export default Data