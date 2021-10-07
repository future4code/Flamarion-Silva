import selectUserByName from "../data/selectUserByName";

export const getUserByName = async(req: Request, res: Response)=>{
    try{

        const user = await selectUserByName(req.query.name)

        if(!user.length){
            throw new Error('Usuário não encontrado')
        }

        res.send(user)

    }catch(error: any){
      console.log(error)
      res.status(400).send({message: error.message || error.sqlMessage})
    }
}
