const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors())
// app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('This link is only for post')
})
app.post('/', (req, res) => {
    const { title, email } = req.body;
    console.log(title, email)
    res.status(200).json({ message: "Your data sent successfully", data: { title, email } })
})

app.listen(3000, () => {
    console.log('Server started and listening to port 3000')
})