const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../db/models')

router.post('/signup', async(req, res) => {
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({username, hashedPassword})

    const token = jwt.sign(
        {data: {userId: user.id, username: user.username}},
        process.env.SECRET_KEY,
        {expiresIn: 604800}
    )

    res.cookie('token', token)

    res.json(user)
})

router.delete('/session', (req, res) => {
    res.clearCookie('token')
    res.json({message: 'Successfully logged out'})
})

router.post('/session', async(req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({
        where: {username}
    })

    const isPassword = await bcrypt.compare(password, user.hashedPassword)

    if (!user || !isPassword) {
        return res.json({error: 'Invalid Credentials'})
    }

    const token = jwt.sign(
        { data: { userId: user.id, username: user.username } },
        process.env.SECRET_KEY,
        { expiresIn: 604800 }
    )

    res.cookie('token', token)

    res.json(user)

})

module.exports = router