import React from 'react'
import TravelAddBooking from './TravelAddBooking'
import {  useEffect } from 'react'
// import { useState, useEffect } from 'react'
// import TravelHeader from './TravelHeader'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

function TravelBody() {

    useEffect(() => {
        const getBookings = async () => {
           // const bookingsFromServer = await fetchBooking()
           // setBookings(bookingsFromServer)
        }
        getBookings()
    }, [])


    //Fetch Bookings

    // const fetchBooking = async () => {
    //     const resp = await fetch(`https://localhost:44384/api/Travel`)
    //     const data = await resp.json()
    //     console.log(data)
    //     return data
    // }
    //Add Task
    const addTask = async (task) => {

        console.log(task)
        debugger;
        // const res = await fetch(`http://52.33.224.212/api/Travel/Update`, {
        const res = await fetch(`http://localhost:5000/tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        debugger;
        console.log(res)
        const data = await res.json()
        console.log(data)



        // const id=Math.floor(Math.random()*1000)+1
        // const newBooking={id,...task}
        //setTravel([...tasks, newBooking])

       

        // setTravel(
        //     tasks.map((task) =>
        //       task.id === id ? {
        //         ...task, reminder:
        //           data.reminder
        //       } : task
        //     )
        //   )
    }

    return (

        <body>
            <div className="banner">
                <div className="bg">
                    <img src="/images/bg.jpg" className="cover" alt="img missing" />
                    <div className="content">
                        <h2>Explore The World</h2>
                        <a href="#searchBox" className="btn">Book Now</a>
                    </div>
                    <TravelAddBooking onAdd={addTask} />
                </div>
            </div>

        </body>

    )
}

export default TravelBody;
