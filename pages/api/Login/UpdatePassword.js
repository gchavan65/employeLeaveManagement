
import dbConnect from '../../util/mongo'
import Product from '../../util/Models/Product'
import  jwt  from 'jsonwebtoken';


export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {

      case 'PUT':
        try {
            let user = await Product.findOneAndUpdate({email: req.body.email},{$set:{password:req.body.password}},
              {
                new: true,
                runValidators: true,
              }
              );
            if(user) {     
return res.status(200).json(user)
            }
             else {
                return res.status(401).json('Invalid Username' );
            }
        } catch (error) {
          res.status(400).json({ success: false,data:error + "error" ,})
        }
        break
      default:
        res.status(400).json({ success: false,data:"defalt" })
        break
    }
  }