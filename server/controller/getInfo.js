import User from '../models/UserDB.js';
export default  function  getDB(req , res)  {
User.find({}, function (err, result)  {
if(err) return res.status(404).json({message: err.message});
else    res.json({message: result});
})
}