const dbConnect = require('./mongo1');
// const database = require('./mongo1');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'priyanka'},{
            $set: {name:'sanju'}
        }
    );
    console.warn(result);
}
updateData();