import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ title: '', email: '' })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Stature: ${response.status}`)
    }
    const result = await response.json();
    console.log(result.message)
    console.log(result.data)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder='Your Name' type="text" name='title' onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          <br />
          <input placeholder='Your Email' type="email" name="email" id="" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>Data should be submitted to Express API, <br /> See the status in browser console.</p>
    </>
  )
}

export default App
