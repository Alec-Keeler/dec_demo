const errCollection = (req, res, next) => {
    req.errors = {}
    next()
}

const checkName = (req, res, next) => {
    const name = req.body.name

    if (!name) {
        req.errors.needName = "Please provide a name for the new animal"
    }
    if (name.length > 150) {
        req.errors.longName = "Please provide a name that is fewer than 150 characters long"
    }
    let words = name.split(' ')
    if (words.includes('Blue')) {
        req.errors.noBlue = 'Animals may not be blue!'
    }
    next()
}

const checkGenus = (req, res, next) => {
    const genus = req.body.genus

    if (!genus) {
        req.errors.needGenus = 'Please provide this animal\'s genus'
    }
    next()
}

const checkAvgWeight = (req, res, next) => {
    const avgWeight = req.body.avgWeight

    if (!avgWeight) {
        req.errors.needAvgWeight = 'Please provide this animal\'s average weight'
    }
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
    if (Object.keys(req.errors).length) {
        console.log('test?')
        res.status(401)
        return res.json({
            title: "There were some errors",
            errors: req.errors
        })
    }
    next()
}

// const errorHandlers = [errCollection, breakfastCheckName, breakfastCheckCooked, checkErrors]
const errorHandlers = [errCollection, checkName, checkGenus, checkAvgWeight]

module.exports = {errorHandlers}