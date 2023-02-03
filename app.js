// jshint version:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js")

const app = express();

// Ejs Included
app.set('view engine', 'ejs') ;
// body-parser Included
app.use(bodyParser.urlencoded({extended:true}));
// public Folder for addition files
app.use(express.static("public"));

/*DataBase Connection And Utillised */
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/ToDoList" );

const itemsSchema ={
    name:String
}

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({name:"Welcome To-Do-List!"});
const item2 = new Item({name:"Hit the + Button to Add new item."});
const item3 = new Item({name:"<--- Hit This to Delete an item."});

const defaultItems =[item1,item2,item3];


/*DataBase Connection And Utillised */

app.get("/" , (req , resp )=>{

    Item.find({},(err, foundItems)=>{
        if(err){console.log(err);}

        else if(foundItems.length ===0){
            Item.insertMany(defaultItems,(err)=>{
                if(err){console.log(err);}
                else {console.log("Successfully saved default items to DB.")}
            });
            resp.redirect("/");
        }
        else {
            resp.render("list" , { listTitle : "Today" , newListItems: foundItems });
        }
    });
       
});

app.get("/date" , (req , resp )=>{
    

    let day = date.getDate() ;
    // let day = date.getDay() ;

    resp.render("list" , {
        
        listTitle : day ,
        newListItems: items
    
    });
});

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

app.post("/" , (req ,res)=>{

    const itemName = req.body.newItem ;

    const item = new Item({name:itemName});
    item.save();
    res.redirect("/");

    
    
    
    
    
    // if (req.body.list === "Work") {
    //     workItems.push(item);
    //     res.redirect("/work");        
    // } else {
    //     items.push(item);
    //     res.redirect("/");
    // }
    

    
})



app.listen(process.env.PORT  || 3000,()=>{
    console.log("Server Started on Port 3000")
})





/*   DataBase Added */ 













































// // jshint version:6

// const express = require("express");
// const bodyParser = require("body-parser");

// const date = require(__dirname + "/date.js")

// const app = express();

// // Ejs Included
// app.set('view engine', 'ejs') ;
// // body-parser Included
// app.use(bodyParser.urlencoded({extended:true}));
// // public Folder for addition files
// app.use(express.static("public"));



// const items = ["Buy Food" , "Cook Food" , "Eat Food"];
// const workItems = [];

// app.get("/" , (req , resp )=>{
    

//     let day = date.getDate() ;
//     // let day = date.getDay() ;

//     resp.render("list" , {
        
//         listTitle : day ,
//         newListItems: items
    
//     });
// });

// app.get("/date" , (req , resp )=>{
    

//     let day = date.getDate() ;
//     // let day = date.getDay() ;

//     resp.render("list" , {
        
//         listTitle : day ,
//         newListItems: items
    
//     });
// });

// app.get("/work" , (req ,res)=>{
//     res.render("list" , {
//         listTitle: "Work List" , 
//         newListItems : workItems
//     });
// });
// app.get("/about" , (req ,res)=>{
//     res.render("about" , {
//         listTitle: "About the Owner" 
//     });
// });

// app.post("/" , (req ,res)=>{

//     const item = req.body.newItem ;
//     if (req.body.list === "Work") {
//         workItems.push(item);
//         res.redirect("/work");        
//     } else {
//         items.push(item);
//         res.redirect("/");
//     }
    

    
// })



// app.listen(process.env.PORT  || 3000,()=>{
//     console.log("Server Started on Port 3000")
// })






















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

