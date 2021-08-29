import { useState } from 'react'

const TravalAddBooking = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [member, setMember] = useState('')
    const [travelDate, setTravelDate] = useState('')
    const [fromDest, setFromDest] = useState('')
    const [toDest, setToDest] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please write name');
            return
        }
        onAdd({ name, age, member, travelDate, fromDest, toDest })
        setName('')
        setAge('')
        setMember('')
        setTravelDate('')
        setFromDest('')
        setToDest('')
    }

    return (
        <form className="searchBox" id="searchBox" onSubmit={onSubmit}>
            <div className="inputBx">
                <p>Enter Name</p>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>Enter Age</p>
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>Total Members</p>
                <input type="text" placeholder="Total Members" value={member} onChange={(e) => setMember(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>Travel Date</p>
                <input type="date" placeholder="Travel Date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>From Destination</p>
                <input type="text" placeholder="From Destination" value={fromDest} onChange={(e) => setFromDest(e.target.value)} />
            </div>

            <div className="inputBx">
                <p>To Destination</p>
                <input type="text" placeholder="To Destination" value={toDest} onChange={(e) => setToDest(e.target.value)} />
            </div>
            <div className="inputBx">
                <p className="white">_</p>
                <input type="Submit" value="Submit" />
            </div>
        </form>
    )
}

export default TravalAddBooking
