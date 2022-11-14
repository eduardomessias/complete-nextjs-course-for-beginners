import main from '../../database/connection'
import kitty from '../../database/schema'


function get(req, res) {
    res.status(200).json({ method: 'GET', endpoint: 'USERS' })
}


function post(req, res) {
    // main()
    //     .then(() => {
    //         const johnSmith = new kitty({
    //             name: 'John Smith'
    //         })
    //         johnSmith.save().then(() => {
    //             res.status(200).json(johnSmith)
    //         })
    //     })
    //     .catch(error => console.error(error))

    res.status(200).json({ method: 'POST', endpoint: 'USERS' })
}


export default function get_users(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            get(req, res)
            break
        case 'POST':
            post(req, res)
            break
        default:
            res.setHeaders(['GET', 'POST'])
            res.status(405).end(`Method ${method} not allowed`)
            break
    }
}