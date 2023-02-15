function tryCatchWrapper(endpointFn) {
    return (req, res, next) => {
        try {
             endpointFn(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    tryCatchWrapper,
}