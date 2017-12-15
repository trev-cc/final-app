var mongoose = require('mongoose');
var request = require('request');
var member = mongoose.model("member");

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(JSON.parse(content));
    //res.json(content);
}

/* GET Members */
module.exports.getMemberData = function(req, res)
{
    member
   .find({})
   .exec(function (err, member){
        if(err){
            sendJSONresponse(res, 404, {
                "message": "members were not found"
            });
            return;
        }else if (err){
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
        }
        console.log(member);
        sendJSONresponse(res, 200, member);
    }); 
}