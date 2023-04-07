const exp = module.exports;
const Room = require("../models/Rooms/RoomModels");

exp.AddRoom = async (req, res, next) => {
    console.log(req.body);
    const { name } = req.body;
    console.log(name)
    await Room.find({ name })
        .then(async resp => {
            console.log(resp.length);
            if (resp.length > 0) {
                return res.status(409).json({
                    message: "Room Already Present",
                })
            }
            else {
                const newRoom = new Room(req.body);
                console.log(newRoom);
                await newRoom.save()
                    .then(successs => {
                        return res.status(201).json({
                            message: "Room added",
                        })
                    })
                    .catch(err => {
                        return res.status(500).json({
                            message: "Error occured while adding room"
                        })
                    })
            }

        })
        .catch(err => {
            return res.status(500).json({
                message: "Error occured while adding room"
            })
        })
}