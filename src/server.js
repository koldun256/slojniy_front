const express = require('express')
const app = express()
const port = 3000
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile('/home/tumbochka/projects/slojniy_front/dist/index.html')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
