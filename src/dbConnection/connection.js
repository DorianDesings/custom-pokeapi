const mongoose = require('mongoose')

const password = 'j0bombLbtR3bIfBA'
const dbname = 'pokedex'
const uri = `mongodb+srv://Dorian:${password}@cluster0.ill1w.mongodb.net/${dbname}?retryWrites=true&w=majority`

// const connection = ()=> {
//     mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
// }
// module.exports = connection

module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})