export default (req, res, next) => {
    req.passvar = 123321
    console.log('test1: ', req.passvar)
    next()
}