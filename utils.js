const errCollection = (req, res, next) => {
    req.errors = {}
    next()
}

const breakfastCheckName = (req, res, next) => {
    if (req.body.name) {
        return next()
    }
    req.errors.name = 'Please provide a name for this breakfast'
    next()
}

const breakfastCheckCooked = (req, res, next) => {
    if (req.body.cooked === true || req.body.cooked === false) {
        return next()
    }
    req.errors.cooked = 'Please provide a valid cooked value (true or false)'
    next()
}

const checkErrors = (req, res, next) => {
    if (req.errors) {
        console.log('errors')
    }
    res.status(401)
    res.json({
        title: "There were some errors",
        errors: req.errors
    })
}

const errorHandlers = [errCollection, breakfastCheckName, breakfastCheckCooked, checkErrors]

module.exports = {errorHandlers}