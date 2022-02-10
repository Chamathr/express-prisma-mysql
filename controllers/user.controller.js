const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.allUsers = async (req, res, next) => {
  try{
    const allUsers = await prisma.test_1.findMany();
    res.send(allUsers)
  }
  catch(error){
    res.status(500).json({error})
  }
}

exports.addUsers = async (req, res, next) => {
  try{
    await prisma.test_1.create({
      data: {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
      }
    })
    res.send('successfully created')
  }
  catch(error){
    res.status(500).json({ error });
  }
}

exports.updateUsers = async (req, res, next) => {
  try{
    await prisma.test_1.update(
      {
        where: {id: parseInt(req.params.id)},
        data: {
          name: req.body.name
        }
      }
    )
    res.send("successfully updated")
  }
  catch(error){
    res.status(500).json({error})
  }
}

exports.deleteUsers = async (req, res, next) => {
  try{
    await prisma.test_1.delete(
      {
        where: {id: parseInt(req.params.id)}
      }
    )
    res.send("successfully deleted")
  }
  catch(error){
    res.status(500).json({error})
  }

}
