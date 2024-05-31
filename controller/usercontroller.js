var user = require('../model/usermodal');

exports.insert = async (req,res) =>{
    
    var data = await user.create(req.body);
    res.status(200).json({
        status:'success', 
        data,
    })
}

exports.get_data = async (req,res) => {

    var data = await user.find();
    // var data = await user.findById('6646c9992e7cdc63e8e26112');
    // var data = await user.find({"email":"admin@gmail.com"});
    // var data = await user.find().count();
    // var data = await user.find().skip(8);
    // var data = await user.find().limit(3);

    res.status(200).json({
        status:'display data',
        data,
    })
}

exports.update_data = async (req,res) => {

    var id = req.params.id;

    var data = await user.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:'data update',
        
    })
}

exports.delete_data = async (req,res) => {

    var id = req.params.id;

    var data = await user.findByIdAndDelete(id);

    res.status(200).json({
        status:'data delete'
    })
}