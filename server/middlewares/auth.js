const authorization = async (req,res,next) => {
    try {
        const {award_id} = req.params;
        req.kocak = 'kocak nih'
        next()
    } catch (error) {
        next(error)
    }

}

module.exports= {authorization}