const { resolve } = require("bluebird")
const db = require("../configuration/dbConfig")



module.exports = {
    addUser : async(username)=>{
        return new Promise((res,rej)=>{
            db.one(`INSERT INTO userTable(Name,Class,Section,Roll_n) Values($1,$2,$3,$4) returning id`,[
                Name,
                Class,
                Section,
                Roll_n
            ]).then((data)=>{
                resolve(data)
            })
            .catch((err)=>{
                console.log(err,message)
                rej(err)
            })
        })
    },
    updateUser: async (Roll_n)=>{
        return new Promise((res,rej)=>{
            db.result(
                `Update userTable set Name=($1),Class=($2),Section=($3),Roll_n=($3)`,[
                    Name,
                    Class,
                    Section,
                    Roll_n  
                ],
                (r) => r.rowCount
            ).then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                console.log(err.message)
                rej(err)
            });
        })
    }
}