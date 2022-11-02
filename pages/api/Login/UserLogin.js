
import dbConnect from '../../util/mongo'
import Product from '../../util/Models/Product'
import  jwt  from 'jsonwebtoken';


export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {

      case 'POST':
        try {
            let user = await Product.findOne({email: req.body.email, password: req.body.password });
            if(user) {
              let token = jwt.sign({token:user._id},"Gaurav",{
  expiresIn:"7d"
})

let data = {
  responseToken : token,
  id:user._id,
  firstname : user.firstname
}
return res.status(200).json(data)

            } else {
                return res.status(404).json('Invalid Login');
            }
        //   res.status(201).json({ success: true, data: product })
        } catch (error) {
          res.status(400).json({ success: false,data:error + "error" ,})
        }
        break
      default:
        res.status(400).json({ success: false,data:"defalt" })
        break
    }
  }