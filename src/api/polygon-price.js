import {useState} from 'react'
import axios from 'axios'

export default function Price(){
    const [price, setPrice] = useState(null)
    
    async function searchPrice(TICKER){
        if(TICKER){
            console.log(TICKER)
            const result = await axios.get(`https://api.polygon.io/v1/open-close/${TICKER}/2020-10-14?unadjusted=true&apiKey=z763xgz4zplhCz0dglQZtc59e9wKGzgM`)
            console.log(result)
            setPrice(result)
        }
    }

    return [price, searchPrice]

}
