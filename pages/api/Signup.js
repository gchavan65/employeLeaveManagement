
import dbConnect from '../util/mongo'
import Leave from '../util/Models/Product'
export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const product = await Leave.find({}) /* find all the data in our database */
          res.status(200).json({ success: true, data: product })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        const findfilter = await Leave.find({phoneno:req.body.phoneno,gamil:req.body.gmail}) 
       if(findfilter.length == 0){
            try {
                const product = await Leave.insertMany(
                  req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: product })
              } catch (error) {
                res.status(400).json({ success: false,data:error })
              }
        } if(findfilter){
            res.status(401).json({ success: true, data:"alredy Ragister Email or Phone no" })
        }
    
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }