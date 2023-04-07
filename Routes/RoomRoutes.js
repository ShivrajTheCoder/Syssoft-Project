const express=require("express");
const router=express.Router();
const Room=require("../Controllers/RoomController");

router.route("/addroom")
    .post(Room.AddRoom);


module.exports=router;