const dbConnect = require('./mongo1');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insert(
        [{name:'priyanka',age:30,job:'software'},
        {name:'neeraj',age:30,job:'software'},
        {name:'rohan',age:30,job:'software'}

    ]
        );
if(result.acknowledged)
{
    console.log("data inserted");
}
        console.log(result);
    // console.log(db);
}
insert();
