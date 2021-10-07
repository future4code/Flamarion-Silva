import selectUserByType from "../data/selectUserByType";

export const getUserByType = async(req: Request, res: Response)=>{
    try{

        const type = await selectUserByType(req.params.type)

        if(!type.length){
            throw new Error('Usuário não encontrado')
        }

        res.send(type)

    }catch(error: any){
      console.log(error)
      res.status(400).send({message: error.message || error.sqlMessage})
    }
}
