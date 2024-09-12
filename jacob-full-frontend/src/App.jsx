import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ title: '', email: '' })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://jacob-full-web.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const result = await response.json();
      console.log(result.message)
      console.log(result.data)
    } catch (error) {
      console.error("Error: ", error)
    }
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
      <p>Data should be submitted to Express API, <br /> See the status in your browser console.</p>
    </>
  )
}

export default App
