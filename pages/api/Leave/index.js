
import dbConnect from '../../util/mongo'
import Leave from '../../util/Models/Product'
import moment from 'moment'

export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const product = await Leave.find({}) /* find all the data in our database */
          // product.map((val,index)=>{
          //   let leavesort = val.leavesData
          //  let sortdate =  leavesort.sort((data)=>{
          //   return data.time
          //  });
            // moment(o.time).format("DD-MM-YYYY h:mm:ss")
            // res.status(200).json(product)
          // })
        let sortdata =   product.sort((val)=>{
            return val.updatedAt
          })
          res.status(200).json({ success: true, data: sortdata })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const product = await Leave.insertMany(
            req.body
          ) /* create a new model in the database */
          res.status(201).json({ success: true, data: product })
        } catch (error) {
          res.status(400).json({ success: false,data:error })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }