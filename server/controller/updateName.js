import User from "../models/UserDB.js"

export default async function PutUserDB(req, res) {
  const newUserName = req.body.namer
  const id = req.body.id

  try {
    await User.findById(id, (error, updatedUser) => {
      updatedUser.username = newUserName
      updatedUser.save()
      res.send("done")
    }).clone().exec()
  } catch (error) {
    console.error(error)
  }
}