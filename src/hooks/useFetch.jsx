import { useState,useEffect } from "react";

const url = "https://my-json-server.typicode.com/GiorgiNefaridze/twitter/person"

export default function useFetch(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(response => setData(response))
        .finally(setLoading(false))
    }, [])

    return { data,loading } 
}