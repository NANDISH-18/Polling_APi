const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.create = async function(req,res){
    // The question are created
    console.log(req.url);
    console.log(req.body);
    try {
        // console.log('Request Body:', req.body);
        const ques = await Question.create(req.body)
        // console.log('New Question:', ques);
        res.send(ques);
    } catch (error) {
        console.log("error in creating schema")   
    }
   
    
}

module.exports.showDetails = async function(req,res){
    console.log(req.params.id);

    const ques = await Question.findById(req.params.id).populate('options');

    if(ques){
        res.send(ques);
    }else{
        res.send("id does not exists");
    }
}

module.exports.deleteQues=async function(req,res){
    // in this the question will be deleted
        const ques= await Question.findById(req.params.id).clone().catch(function(err){ console.log(err)})
        if(ques){
            // delete all the option, of the option db having the question id as the req.params.id
            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})
            // deleting all the option of that question
            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                res.send("ques deleted");
    
        }
        //  if th at question of the given id does not exists then just sending a message
        else{
            res.send('question does not exists')
        }
}
