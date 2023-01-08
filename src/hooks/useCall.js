import axios from "axios"
import { useState, useEffect } from "react"

const useCall = ( url, getData )=>{

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
        .then((response)=>{
            setData(getData(response))
            //console.log(response);
        })
        .catch((error)=>{
            console.error(error);
        })
    }, [url])
    
    return [data]
}
export default useCall