const db = require('../models');

const create = async (req, res) => {
    const data = req.body;
    const userId = req.params.userId;
    const task = req.params.task
    await db.Task.create(
        {
           title: data.title,
           userId : userId, 
           
        }
    );
    res.json("task created");
    console.log(data);
}


const retrieve = async (req,res) => {
    const retrievedData = await db.Task.findAll({
        
    });
     console.log(retrievedData);
     res.json(retrievedData)
}


const findOne = async (req,res) => {
    let input = req.params.id;
    const retrievedData = await db.Task.findOne({where: {
        id : input
    },
});
   
res.json(retrievedData);
}


const update = async (req,res) => {

    const inputId = req.params.id;
    console.log(req.body);
    await db.Task.update(req.body,{
        where: {
            id:inputId
          }
    });
    console.log('update successful');
    res.json('update successful');
}

const destroy = async (req,res) => {

    const inputId = req.params.id;
   await db.Task.destroy({
       where : {
           id : inputId
       }
   })

   console.log('deleted succ');
   res.json('deleted succ');
}

module.exports = {
    create,
    retrieve,
    findOne,
    update,
    destroy
}