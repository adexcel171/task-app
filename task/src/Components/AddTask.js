import { useState } from 'react'


 
 
function AddTask({ onAdd }) {

  function onSubmit(e) {
    e.preventDefault()
    if (!text) {
      alert(' please add text')

      return
    }
    onAdd({ text, day, reminder })
    setDay('')
    setText('')
    setReminder(false)
  }
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder='add task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type="text" placeholder='add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-cotrol-check'>
        <label>Set Reminder</label>
        <input type="checkbox"  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value='Save Task' className="btn btn-block" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
    </form>
  )
}

export default AddTask;
