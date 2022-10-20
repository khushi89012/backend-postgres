const db = require('../configuration/config')
const admModel = require('../models/addUser')
const Config = require('../configuration/config');
const common = require('../controllers/common');

module.exports = {
    add_user : async (req,res,next)=>{
        try{

            const {name,roll_n} = req.value.body;
            const user = {
                name: name,
                roll_n:roll_n
            }
            let err = {}
            const nameExist = await admModel.name_exists(user.name);
            if(nameExist.success){
                err.name='Name already exists';
            }
            const roll_nExists = await admModel.roll_n_exists(user.roll_n)
            if(roll_nExists.success){
                err.roll_n = 'Roll number already exists'
            }
            if(common.isEmptyObj(err)){
                next()
            }else{
                let return_err = {status :2, errors:err};
                return res.status(400).json(return_err)
            }
        }
        catch(err){
            res.status(400).json({
                status:3,
                message:err.message,
            })
            .end();


        }
    },
    update_user: async(req,res,next)=>{
        try{

            const {name,roll_n} = req.value.body;
            const user = {
                name: name,
                roll_n:roll_n
            }
            let err = {}
            const nameExist = await admModel.name_exists(user.name);
            if(nameExist.success){
                err.name='Name already exists';
            }
            const roll_nExists = await admModel.roll_n_exists(user.roll_n)
            if(roll_nExists.success){
                err.roll_n = 'Roll number already exists'
            }
            if(common.isEmptyObj(err)){
                next()
            }else{
                let return_err = {status :2, errors:err};
                return res.status(400).json(return_err)
            }
        }
        catch(err){
            common.isLogErr(err);
			res
				.status(400)
				.json({
					status: 3,
					message: err.message,
				})
				.end();


        }
}
}


