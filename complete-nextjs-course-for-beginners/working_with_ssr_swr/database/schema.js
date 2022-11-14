import mongoose from 'mongoose'


const kittySchema = new mongoose.Schema({
    name: String
})


const kitty = mongoose.modelNames().includes('kitty') ? mongoose.model('kitty') : mongoose.model('kitty', kittySchema, 'kitten')


export default kitty