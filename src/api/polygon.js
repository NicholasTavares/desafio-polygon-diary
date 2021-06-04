import {useState} from 'react'
import axios from 'axios'

export default function Ticker(){
    const [data, setData] = useState(null)
    
    async function search(BASE_URL){
        if(BASE_URL){
            console.log(BASE_URL)
            await axios.get(`${BASE_URL}`).then(res => setData(res))
        }
    }

    return [data, search]

}
