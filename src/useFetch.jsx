import { useState,useEffect } from "react";

export default function useFetch(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});

    useEffect(()=> {
        getData()
    } ,[])

    const getData = () => {
        fetch("https://my-json-server.typicode.com/GiorgiNefaridze/twitter/person")
        .then(res => res.json())
        .then(response => setData(response))
        .finally(setLoading(false))
    }

    return { data,loading } 
}