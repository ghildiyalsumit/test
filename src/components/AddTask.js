import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState('')
    const [day, setday] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!task) {
            alert('Please enter task')
            return
        }
        else if (!day) {
            alert('Please enter day')
            return
        }
        onAdd({ task, day, reminder })
        setTask('')
        setday('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text'
                    palceholder='Add Task'
                    value={task} onChange={(e) => setTask(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='text'
                    palceholder='Add Day & Time'
                    value={day} onChange={(e) => setday(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                ></input>
            </div>
            <input className='btn btn-block' type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask
