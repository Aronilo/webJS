function auth(req, res, next) {
    const apiKey = req.query.apiKey;
    if (apiKey != 'lera') {
        res.status(400).send('Неправильно')
    }
    else {
        next()
    }
}

function valid(req, res, next) {
    let body = req.body
    if (body?.name) {
        next()
    }
    else {
        res.status(400).json("OPS...")
    }
}


function badRequest(req, res) {
    res.status(400).send("Bad request")
}

module.exports = {auth, badRequest, valid}