const dbConnect = require('./mongo1');

const deleteData=async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({
        name:'sanju'
    })
    console.warn(result);
    if(result.acknowledged){
        console.log("record deleted")
    }

}
deleteData();