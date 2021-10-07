import selectByOrder from "../data/selectByOrder"

export const getByOrder = async(req: Request, res: Response)=>{

      try {
        const order = await selectByOrder(req.params.order)
        res.status(200).send(order)
      }catch(error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
      }
}
