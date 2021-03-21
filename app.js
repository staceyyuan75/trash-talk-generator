// app.js
// packages required in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk')
const targetList = require('./target-people.json')

// template engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// static files setting
app.use(express.static('public'))

// body-parser setting
app.use(bodyParser.urlencoded({ extended: true }))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { targets: targetList.results })
})

app.post('/', (req, res) => {
  const options = req.body
  const trash_talk = generateTrashTalk(req.body.target)

  let targetChecked = targetList.results.map((target, index, arr) => {
    arr[index].checked = false
    if (target.title === req.body.target) {
      arr[index].checked = true
    }
    return arr[index]
  })

  res.render('index', {
    targets: targetChecked,
    trash_talk: trash_talk,
    options: options,
  })
})

// server start
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
