
import dbConnect from '../../util/mongo'
import Leave from '../../util/Models/Product'
export default async function handler(req, res) {
  const {
    query: { id },
    method,

  } = req

  await dbConnect()

  switch (method) {
    case 'PUT' /* Get a model by its ID */:
      console.log(req.query)
      try {
        const product = await Leave.update({
          
          "_id": req.query.id,
         "leavesData._id": req.query.subid
        },
       req.body,
       {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(400).json({ success: false ,data:error})
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false ,data:error })
      }
      break

    // case 'PUT' /* Edit a model by its ID */:
      try {
        const product = await Leave.update(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(400).json({ success: false, data: "error" })
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedproduct = await Leave.deleteOne({ _id: id })
        if (!deletedproduct) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: `data will delete of this ${id}` })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}