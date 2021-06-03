import React from 'react'
import IconOption from './option/IconOption'
import {IoIosOptions} from 'react-icons/io'
import {IoLocationSharp} from 'react-icons/io5'

const Header = () => {

    return (
        <header className='header'>
            <IconOption icon={<IoIosOptions/>} urlOption type='market'/>
            <IconOption icon={<IoLocationSharp/>} urlOption type='location'/>
        </header>
    )
}

export default Header