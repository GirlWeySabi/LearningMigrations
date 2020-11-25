const db = require('../models/index');

const create = async (req, res) => {
    const data = req.body;

    await db.User.create(
        data
    );
    res.json(data);
    console.log(data);
}

const retrieve = async (req, res) => {
    const retrievedData = await db.User.findAll();
    console.log(retrievedData);
    res.json(retrievedData);
} 


const findOne = async (req,res) => {
    let input = req.params.id;
    const retrievedData = await db.User.findOne({where: {
        id : input
    },
});
    
    res.json(retrievedData);
}

const update = async (req, res) => {
    const inputId = req.params.id;
    console.log(req.body)
    await db.User.update(req.body , {
        where: {
            id: inputId
        }
    });
    console.log('update successful');
    res.json('update successful')

}

const destroy = async (req, res) => {
    console.log('jkhugyugfygyugfyufgyuf');
    const inputId = req.params.id;
   const data = await db.User.destroy({
        where : {
            id : inputId

    }
});


console.log(data);
res.json('deleted successfully');

}

module.exports = {
    create,
    retrieve,
    findOne,
    update,
    destroy
}