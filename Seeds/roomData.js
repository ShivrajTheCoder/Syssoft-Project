const mongoose=require("mongoose");
const DB_URL = "mongodb://localhost:27017/navigation";
const Room=require("../models/Rooms/RoomModels");
main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

const uploadRooms=async()=>{
    await Room.deleteMany({});
    const roomData=[
        {
            name:"LT-01",
            floor:"0"
        },
        {
            name:"LT-02",
            floor:"0"
        },
        {
            name:"LT-03",
            floor:"1"
        },
        {
            name:"LT-04",
            floor:"2"
        },
        {
            name:"LT-05",
            floor:"2"
        },
        {
            name:"LT-06",
            floor:"2"
        },
        {
            name:"LT-07",
            floor:"3"
        },
        {
            name:"LT-08",
            floor:"3"
        },
        {
            name:"LT-09",
            floor:"3"
        },
    ]

    roomData.forEach(async room=>{
        const newRoom=new Room(room);
        await newRoom.save()
        .then(()=>{
            console.log(newRoom,"added");
        })
        .catch(err=>{
            console.log(err);
        })
    })
    console.log("completed")
}

uploadRooms();