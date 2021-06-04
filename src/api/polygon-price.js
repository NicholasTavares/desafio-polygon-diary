import {useState} from 'react'
import axios from 'axios'

export default function Price(){
    const [price, setPrice] = useState(null)
    let contador = 0
    let limit = 10
    let returnArray = [] 
    
    function searchPrice(arrayTickers){
        return axios.get(`https://api.polygon.io/v1/open-close/${arrayTickers[contador].ticker}/2020-10-14?unadjusted=true&apiKey=z763xgz4zplhCz0dglQZtc59e9wKGzgM`).
        then((response) => {
                console.log(response.data)
                returnArray.push(response.data);
                contador++
                setTimeout(() => {
                    searchPrice(arrayTickers);
                }, 4000)
                if(contador >= limit){
                    return returnArray
                }
        }).catch((err) => {
          return err
        }
    )};

    return [price, searchPrice]

}
