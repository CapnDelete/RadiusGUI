import React from "react"
import GetThings from '../../components/GetData/GetData'
import Thing from "./Thing"

function Things(props) {
    const data = GetData(props.apiUrl)[0]
    //console.log(data.RadiusThings != null && Array.from(data.RadiusThings))
    const things = data.RadiusThings != null && Array.from(data.RadiusThings).map(thing => <Thing key={thing.ID} name={thing.Text} />)
    return (
        <div>
            {things}
        </div>)
}

export default Things