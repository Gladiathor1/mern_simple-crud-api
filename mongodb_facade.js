const { MongoClient, ServerApiVersion } = require('mongodb');


async function dbcreate(newURL){



    const uri = "mongodb+srv://Jehanzeb:x6mffcZsNOwz63dA@cluster0.doseh.mongodb.net/MyDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try{
        await client.connect();
        const result = await client.db('MyDatabase').collection('MyCollection').insertOne(newURL);
        return result;
    }finally{
        await client.close();
    }
    
    
    
    // client.connect(err => {
    // const collection = client.db("test").collection("devices");
    // // perform actions on the collection object
    // const result = await client.db('Mydatabase').collection('MyCollection').insertOne(newURL)
    
    // client.close();
    // });
}


async function dbget(newURL){



    const uri = "mongodb+srv://Jehanzeb:x6mffcZsNOwz63dA@cluster0.doseh.mongodb.net/MyDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try{
        await client.connect();
        const result = await client.db('MyDatabase').collection('MyCollection').find({}).toArray();
        return result;
    }finally{
        await client.close();
    }
}


async function dbdel(newURL) {
    const uri = "mongodb+srv://Jehanzeb:x6mffcZsNOwz63dA@cluster0.doseh.mongodb.net/MyDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const result = await client.db('MyDatabase').collection('MyCollection').deleteOne({ newURL });
        // return result;
    }
    finally {
        await client.close();
    }

}


async function dbupdate(url,newURL) {
    const uri = "mongodb+srv://Jehanzeb:x6mffcZsNOwz63dA@cluster0.doseh.mongodb.net/MyDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        
        // const query = { value: url };
        // const upt = { $set: { value: newUrl } }

        const result = await client.db('MyDatabase').collection('MyCollection').updateOne(url, newURL)
    //    const result = await client.db('MyDatabase').collection('MyCollection').deleteOne({ newURL });
        // return result;
    }
    finally {
        await client.close();
    }

}


module.exports.dbcreate = dbcreate;
module.exports.dbget = dbget;
module.exports.dbupdate = dbupdate;
module.exports.dbdel = dbdel;