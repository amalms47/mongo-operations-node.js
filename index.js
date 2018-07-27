const mongo=require('mongoose');

//MongoDB connection 

mongo.connect('mongodb://localhost/playground')
.then(()=>console.log('connected to db'))
.catch(err=>console.log('could not connect',err));

//Schema

const courseSchema=new mongo.Schema({
    name:String,
    author:String,
    tags:[String],                              // represents array
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})



// Creating models

const Course=mongo.model('Course',courseSchema);  //creating a class called Course


async function createCourse() {
    
 const course=new Course({                            //creating object course  of class Course 
    name:'Angular.js course',
    author:'Anoop',
    tags:['Angular','Frontend'],
    isPublished:true
 });

 const result=await course.save();
 console.log(result);

}


// get courses

async function getCourses(){




                 /*******************    Logical query operators  *****************/




    // or                                //after .find() .or([ {author:'Amal'},{isPublished:true }])  
    // and



                 /*******************    comparison query operators  *****************/

    // eq (equal)
    // ne (not equal)
    // gt (greater than)                 // .find({price : $gt:10})       
    // gte (grreater than or equal)                                                   
    // lt (lessathan) 
    // lte (lessathan or equal) 
    // in                               // .find({price : $in:[2,20,4,34]})
    // nin (not in)




                 /*******************    Regular expressions  *****************/


    //Starts with a name Amal
    
    // =>    .find({author:/^Amal/})

     //Ends with a name Amal

     // =>    .find({author:/Amal$/})    to avoid case sensitive add i => /Amal$/i

     //Contains Amal
     
    //=>     .find({author:/.*Amal.*/})


    const pageNumber=2;
    const pageSize=10;

    const course=await Course

    .find()                                                         //use .find() to get  all
    .skip((pageNumber-1)*pageSize)                                  // pagination
    .limit(pageSize)                                                  
    .sort({name:1})                                            // 1  for ascending -1 for descebding
    //.select({name:1,tags:1,author:1});                                               // select required field

    //.count();                                                   // return count
    console.log(course);
}

//createCourse();

getCourses();