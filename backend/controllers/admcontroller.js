const Cryptr = require("cryptr");
const { request } = require("express");
const JWT = require('jsonwebtoken');
const Config= require("../configuration/config")

AdmloginToken = (admin_data) => {
	console.log(Config.jwt.secret)
	return JWT.sign(
		{
			// id:admin_data.id,
			// username:admin_data.username,
			// password:admin_data.password
			
			
		},
		Config.jwt.secret
	);
};

module.exports = {
    handle_login: async (req, res, next) => {
       
		if (Number.	isInteger(req.user.id) && req.user.id > 0) {
			// console.log("this is userdata",req.user)
			// let adm_data={
			// 	admin_id:req.user.id,
			// 	username:req.user.username,
			// 	password:req.user.password
			// }
			// console.log("this is adm_data",adm_data)
		next();
		} else {
			let err_data = { password: 'Invalid login details' };
			return res.status(400).json({ status: 2, errors: err_data });
		}
	},
    login: async (req, res, next) => {
		if (Number.isInteger(req.user.id) && req.user.id > 0) {
			
			const token = AdmloginToken();
			console.log({token})
			
			res.status(200).json({ status: 1, token: token });
		} else {
			let err_data = { password: 'Invalid login details' };
			return res.status(400).json({ status: 2, errors: err_data });
		}
	},
}