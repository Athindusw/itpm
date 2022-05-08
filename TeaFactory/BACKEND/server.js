const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


//import routes
//const MachineRepairRouter = require("./routes/MachineRepairs.js");
const VehicleRouter = require("./routes/Vehicles.js");

//const PORT = process.env.PORT || 8070;
//app middleware
app.use(bodyParser.json());
app.use(cors());


//app.use("/MachineRepair",MachineRepairRouter);
app.use("/Vehicle",VehicleRouter);


const PORT = 8000;
const DB_URL = "mongodb+srv://banukaiw:banuka2001@clustertea.p64vi.mongodb.net/clustertea?retryWrites=true&w=majority"

mongoose.connect(DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
  console.log('DB Connected');
})
.catch((err) =>console.log('DB connection erro',err));

app.listen(PORT, () =>{
  console.log(`app is running on ${PORT}`);
});



