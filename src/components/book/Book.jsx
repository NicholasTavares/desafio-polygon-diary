import React from 'react'
import Header from '../header/Header'
import Table from '../table/Table'

const Book = () => {
    return (
        <div className='book-container'>
            <Header />
            <div className='table-container'>
                <Table />
            </div>
        </div>
    )
}

export default Book