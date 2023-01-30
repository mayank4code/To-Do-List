// jshint version:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

// Ejs Included
app.set('view engine', 'ejs') ;
// body-parser Included
app.use(bodyParser.urlencoded({extended:true}));
// public Folder for addition files
app.use(express.static("public"));


const items = ["Buy Food" , "Cook Food" , "Eat Food"];
const workItems = [];

app.post("/" , (req ,res)=>{

    const item = req.body.newItem ;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");        
    } else {
        items.push(item);
        res.redirect("/");
    }
    

    
})

app.get("/work" , (req ,res)=>{
    res.render("list" , {
        listTitle: "Work List" , 
        newListItems : workItems
    });
});
app.get("/about" , (req ,res)=>{
    res.render("about" , {
        listTitle: "About the Owner" 
    });
});
app.get("/" , (req , resp )=>{
    

    let day = date.getDate() ;
    // let day = date.getDay() ;

    resp.render("list" , {
        
        listTitle : day ,
        newListItems: items
    
    });
});




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

