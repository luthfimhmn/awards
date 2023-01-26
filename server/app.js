const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const { authorization } = require('./middlewares/auth');
const app = express();
const PORT = 3000;
const {users, award} = require('./models/index');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', async (req,res,next) => {
    try {
        res.send('hallo')
    } catch (error) {
        next(error)
    }
})

app.post('/login', async (req,res,next) => {
    try {
        const { email } = req.body;
        // const emailCheck = 'luthfimhmn@gmail.com'
        const registeredUser = await users.findOne({
            where: {email}
        })
        

        if(registeredUser) {
            res.status(200).json({
                name: registeredUser.name,
                email: registeredUser.email,
                message: 'Berhasil Login'
            })
        } else { 
            throw {message : 'Email Address is not exists'}
        }

    } catch (error) {
        next(error)
    }
})

// app.get('/awards/:award_id',authorization, (req,res,next) => {
//     try {
//         res.status(200).json([
//         {
//             Name: 'Testing Awards',
//             type: 'Vouchers',
//             Poin_to_exchange: 200,
//             Image: 'Image.jpg',
//             user_id: 1
//         },
//         {
//             Name: 'Testing Awards', 
//             type: 'Products',
//             Poin_to_exchange: 200,
//             Image: 'Image.jpg',
//             user_id: 1
//         },
//         {
//             Name: 'Testing Awards',
//             type: 'Gift Cards',
//             Poin_to_exchange: 200,
//             Image: 'Image.jpg',
//             user_id: 1
//         },
//         {
//             Name: 'Testing Awards',
//             type: 'Vouchers',
//             Poin_to_exchange: 200,
//             Image: 'Image.jpg',
//             user_id: 1
//         }
//     ])
//     } catch (error) {
//         next(error)
//     }
// }) 

app.get('/awards',authorization, async (req,res,next) => {
    try {
        const awardList = await award.findAll({attributes: {exclude:['user_id']}})
        res.status(200).json(awardList)
    } catch (error) {
        next(error)
    }
}) 

app.use(errorHandler)


app.listen(PORT , () => {
    console.log(`This app is running on ${PORT}`)
})