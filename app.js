// jshint version:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Ejs Included
app.set('view engine', 'ejs') ;
// body-parser Included
app.use(bodyParser.urlencoded({extended:true}));
// public Folder for addition files
app.use(express.static("public"));


var items = ["Buy Food" , "Cook Food" , "Eat Food"];

app.get("/" , (req , resp )=>{
    var today = new Date ();
    var options ={
        weekday: "long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US" , options );

    resp.render("list" , {
        kindOfDay : day ,
        newListItems: items
    });
});


app.post("/" , (req ,res)=>{
    var item = req.body.newItem ;
    items.push(item);

    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server Started on Port 3000")
})












// var currentDay = today.getDay();
    
//     var day = "";
//     // var arrdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday" ,"Saturday" ];

//     switch (currentDay) {
//         case 0:
//             day= "Sunday";
//             break;
//         case 1:
//             day= "Monday";
//             break;
//         case 2:
//             day= "Tuesday";
//             break;
//         case 3:
//             day= "Wednesday";
//             break;
//         case 4:
//             day= "Thursday";
//             break;
//         case 5:
//             day= "Friday";
//             break;
//         case 6:
//             day= "Saturday";
//             break;
//         default:
//             day = "something went Wrong!";
//             console.log("Error! Current Day is equal to: " + currentDay);
//             break;
//     }

