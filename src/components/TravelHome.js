import React from 'react'
import TravelHeader from './TravelHeader'
import TravelBody from './TravelBody'
import TravelBookings from './TravelBookings'
import TravelFooter from './TravelFooter'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const TravelHome = () => {
   
    // const fetchBooking = async () => {
    //     const resp = await fetch(`https://localhost:44384/api/Travel`)
    //     data= await resp.json()
    //     console.log(data)
    //     return data
    // }
    
    return (
        <Router>
            <TravelHeader />
            <Route path='/' exact component={TravelBody} />
            <Route path='/TravelBookings'
            // render={(props) => (
            //     <TravelBookings {...data}  />
            //   )}
            component={TravelBookings}
             />
           <TravelFooter/>
        </Router>
    )
}

export default TravelHome
