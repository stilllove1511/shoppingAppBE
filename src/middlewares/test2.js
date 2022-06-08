export default (req, res, next) => {
    console.log('test2: ', req.passvar)
    next()
}