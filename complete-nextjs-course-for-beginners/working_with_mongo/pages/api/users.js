import main from '../../database/connection'
import kitten from '../../database/schema'


export default function get_users(req, res) {
    main()
        .then(value => {
            const johnSmith = new kitten({
                name: 'John Smith'
            })
            johnSmith.save().then(() => {
                res.status(200).json(johnSmith)
            })

            const janeDoe = new kitten({
                name: 'Jane Doe'
            })
            janeDoe.save().then(() => {
                res.status(200).json(janeDoe)
            })
        })
        .catch(error => console.error(error))
}