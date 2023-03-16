const { User } = require('./db/models');
const jwt = require('jsonwebtoken');

const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;

    return jwt.verify(token, process.env.SECRET_KEY, null, async (err, jwtPayload) => {
        if (err) {
            return next();
        }

        try {
            const { userId } = jwtPayload.data;
            req.user = await User.findByPk(userId);
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) res.clearCookie('token');

        return next();
    });
};

const requireAuth = function (req, _res, next) {
    console.log(req.user)
    if (req.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
}

module.exports = {restoreUser, requireAuth}