import React, { Component } from 'react'

// const[statename,FunToUpdateState]=useState('')



class TravelBookings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }


componentDidMount(){
    fetch('https://localhost:44384/api/Travel?travelDate=2021-08-27')
    .then(res=>res.json())
    .then(json=>{
        this.setState({
            isLoaded:true,
            items:json
        })
    });
}

render() {
    var {isLoaded,items}=this.state;
    if(!isLoaded){
        return <div>Loading....</div>;
    }
    else{
    return (
        <div className="container">

            <h1>Travel Booking Details</h1>
            <table id='customers'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>No. of members</th>
                        <th>From Destination</th>
                        <th>To Destination</th>
                        <th>Travel Date</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((booking) => (
                        <tr key={booking.id}>
                            <td >{booking.name}</td>
                            <td >{booking.age}</td>
                            <td >{booking.members}</td>
                            <td >{booking.fromDest}</td>
                            <td >{booking.toDest}</td>
                            <td >{booking.travelDate}</td>
                        </tr>


                    ))}

                </tbody>
            </table>
        </div>

    );
}
}
// }
// const bookings = [
//     {
//         "id": "4939e0ad-de19-4fff-9487-9f52c7e5bb42",
//         "name": "Sumit",
//         "age": "67",
//         "members": "6",
//         "fromDest": "Kochi",
//         "toDest": "Chennai",
//         "travelDate": "08/27/2021 00:00:00",
//         "createdOn": "0:08/26/2021 01:09:36.130"
//     },
//     {
//         "id": "6c277934-041d-459a-84f4-31dfdde7b4f0",
//         "name": "Ram",
//         "age": "60",
//         "members": "7",
//         "fromDest": "Luckhnow",
//         "toDest": "Bhopal",
//         "travelDate": "08/27/2021 00:00:00",
//         "createdOn": "0:08/26/2021 01:32:35.435"
//     }
// ]
// // const fetchBooking = async () => {
// //     const resp = await fetch(`https://localhost:44384/api/Travel`)
// //     const data = await resp.json()
// //     console.log(data)
// //     return data
// // }
// // const bookings=fetchBooking()
// //const Tasks = ({ tasks, onDelete, onToggle }) => {

}
export default TravelBookings;
