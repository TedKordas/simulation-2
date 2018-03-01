module.exports = {
    createUser: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.createUser([username, password])
        .then( data => {
            const user = data[0];

            req.session.user = {
                id: user.userid,
                username: user.username
            };

            res.status(200).send(req.session.user);
        })
            .catch( err => {
            console.log(err);
            res.status(500).send(err) 
        });
    },


    login: (req, res, next) => {
        console.log('logging in')
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.getUsers([username, password])
        .then( data => {
            if ( data.length !== 0 ) {
                const user = data[0];

                req.session.user = {
                    id: user.userid,
                    username: user.username
                };

                res.status(200).send(req.session.user);
            } else {
                res.status(500).send(err);
            }
        })
        .catch( err => res.status(500).send(err));
    },


    logout: (req, res, next) => {
        let name = req.session.user.username
        //console.log(name)
        req.session.destroy()
        res.status(200).send(`successfully logged out ${name}`)
    },


    postProperty: (req, res, next) => {
        console.log('post property firing')
        const db = req.app.get('db')
        const {session} = req;
        // const userId = req.body.user[0]
        const {name, description, img_url, address, city, states, zip, loan_amount, monthly_mortgage, desired_rent, recomended } = req.body;
        console.log(req.body)
        db.postProperty([name, description, img_url, address, city, states, zip, loan_amount, monthly_mortgage, desired_rent, recomended])
        .then(properties => {
            // db.getAllProperties([session.user.id])
            console.log('Property posted')
            res.status(200).send(properties)
        })
        .catch((err) => res.status(500).send(err))
    },


    deletePropertyFromUser: (req, res, next) => {
        const db = req.app.get('db')
        let { username } = req.params
        let { properties } = req.body
        db.deleteProperty(username, properties)
        .then(properties => {
            res.status(200).send(username)
        })
        .catch(() => res.status(500).send('something went wrong'))
    },


    getProps: (req, res, next) => {
        console.log('get properties working')
        const db = req.app.get('db')
        const {id} = req.params

        db.getAllProperties([id])
        .then((properties) => {
            return res.status(200).send(properties)
        })
        .catch((err) => res.status(500).send(err))
    },


    getProperties: (req, res, next) => {
        const db = req.app.get('db');
        const {session, query} = req;
        if(query.desiredRent){
            db.getAllProperties([session.user.id, query.desiredRent])
            .then(properties => res.status(200).send(properties))
            .catch( () => res.status(500).send());
        }
        db.getAllProperties([session.user.id])
        .then(properties => {
            return res.status(200).send(properties);
        })
        .catch( () => res.status(500).send(err));
    }
}