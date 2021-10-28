import { Request, Response } from "express"
import { con } from "../data/connection"
import { Authentication } from "../services/Authentication"


export const editRecipe = async(req:Request, res:Response)
:Promise<void>=>{
    let statusCode = 400
    try{

        const token = req.headers.authorization
        const tokenData = new Authentication().getTokenData(token as string)
        
        const {title, description} = req.body

        if(!token){
            statusCode = 401
            throw new Error('Token inválido, expirado ou ausente dos headers.')
        }

        if(!title || !description){
            statusCode = 401
            throw new Error('Preencha os campos.')
        }

        const [recipe] = await con('recipes').where({
            user_id: tokenData
        })

        if(!recipe){
            statusCode = 404
            throw new Error('Receita não encontrada.')
        }

        if(recipe.id !== req.params.id){
            statusCode = 401
            throw new Error('Receita não encontrada')
        }
        
        await con('recipes').update({
            title,
            description,
            createdAt: new Date()
        }).where({
            id: req.params.id
        })

        res.status(200).send('Receita atualizada.')        

    }catch(e:any){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}