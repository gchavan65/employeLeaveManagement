
import dbConnect from '../../util/mongo'
import Admin from '../../util/Models/Admin'
import jwt from 'jsonwebtoken';


export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    
    case 'GET' /* Get a model by its ID */:
      try {
        const product = await Admin.findById(email)
        if (!product) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'POST':
      try {
        let user = await Admin.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
          let token = jwt.sign({ token: user._id }, "Gaurav", {
            expiresIn: "7d"
          })

          let data = {
            responseToken: token,
            id: user._id,
            email:user.email,
            
          }
          return res.status(200).json(data)

        } else {
          return res.status(404).json('Invalid Login');
        }
        //   res.status(201).json({ success: true, data: Admin })
      } catch (error) {
        res.status(400).json({ success: false, data: error + "error", })
      }
      break
    default:
      res.status(400).json({ success: false, data: "defalt" })
      break
  }
}