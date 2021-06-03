import React, {useState} from 'react'
import Options from './Options'

const IconOption = ({icon, type}) => {

    const [slide, setSlide] = useState(false)

    const marketType = ['STOCKS', 'CRYPTO', 'FX']
    const marketLocation = ['US', 'GLOBAL']

    return (
        <div className='header__icon' onClick={() => setSlide(!slide)}>
            {icon}

            <div className='header__container-options'>
            {slide ? type==='market' ? 
            marketType.map(value => <Options text={value}/>) :
             marketLocation.map(value => <Options text={value}/>)
             : null}
            </div>
            
        </div>
    )
}

export default IconOption