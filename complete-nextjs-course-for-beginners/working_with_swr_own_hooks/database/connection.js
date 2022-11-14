import mongoose from 'mongoose'


const main = async () => {
    mongoose.connect('mongodb://localhost:27017/nextjs-couse')
        .then(connection => console.log('Database connected'))
        .catch(reason => console.error(reason))
}


export default main