const restaurantsDatabase = require("../models/restaurants");

exports.UploadRestaurant = async (req, res) =>{
    const data = req.body;
    try {
        const newRestaurant = new restaurantsDatabase(data)
        await newRestaurant.save();
        res.json({message:"success", data:newRestaurant})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


exports.getRestaurants = async(req, res) =>{
    try {
        const allData = await restaurantsDatabase.find(); ///to will gets all data in this database
      if(allData.length>0){
        res.json({length:allData.length, data:allData})
      }else{
        res.json({message:'Thanks for using our API., but here no data available please check later'});
      }
    } catch (error) {
        res.json({message:'Somthing went wrong'})
    }
    res.json({data:req.data})
}



exports.getSingleRestaurant = async(req, res) =>{
 
  try {
    const restaurantId = req.params.restaurantId;
      const data = await restaurantsDatabase.findById(restaurantId)
      if(data){
        res.json({message:'done!', data:data})
      }else{
        res.json({message:'user Id is not found'})
      }
  } catch (error) {
      res.json({message:error.message})
  }
}


exports.UpdateRestaurant = async(req, res) =>{
  const data = req.body;
  const restaurantId = req.params.restaurantId;
  console.log();
  try {
    const updateRestaurant = await restaurantsDatabase.findByIdAndUpdate(req.params.restaurantId, data, {new:true})

    if(updateRestaurant){
      res.json({message:'updated', data:updateRestaurant})
    }else{
      res.json({message:'Id not Found'})
    }
  } catch (error) {
    res.json({message:error.message})
  }
}


exports.deleteRestaurant = async(req, res) =>{
  const restaurantId = req.params.restaurantId;
  const password = req.params.password;
  const username = req.params.username;
  try {
    if(username === "bhaskar" && password === "1234567890"){
      const deleteRestaurant = await restaurantsDatabase.findByIdAndDelete(restaurantId)
          if(deleteRestaurant){
            res.json({message:'deleted successfully', dataDeleted:deleteRestaurant})
          }else{
            res.json({error:'Id is not found'})
          }
    }else{
      res.json({error:'invalid credentials'})
    }
  } catch (error) {
    res.json({message:error.message})
  }
}