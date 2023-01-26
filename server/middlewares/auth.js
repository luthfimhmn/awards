const authorization = async (req,res,next) => {
    try {
        const {user_id} = req.params;
        //harusnya nanti akan sesuai dengan award yang dimiliki oleh user tersebut.
        next()
    } catch (error) {
        next(error)
    }

}

module.exports= {authorization}