const express=require("express");
const router=express.Router();
const Room=require("../Controllers/RoomController");

router.route("/addroom")
    .post(Room.AddRoom);

router.route("/allrooms")
    .get(Room.GetAllRooms)

router.route("/room/:roomId")
    .get(Room.GetSingleRoom)

module.exports=router;