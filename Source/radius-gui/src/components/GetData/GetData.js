import { useState, useEffect } from "react";

function GetData(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    function getData() {
        fetch(props)
            .then(res => res.json())
            .then((result) => {
                setLoading(true)
                setData(result)
            })
    }

    useEffect(() => {
        if (props.timerEnabled){
            getData()
            const setIntervalId = setInterval(
                () => getData(), 1000)
            return () => clearInterval(setIntervalId)
        } else {
            getData()
        }
    }, [])
    return [data, loading]
}

export default GetData