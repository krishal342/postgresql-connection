import { prisma } from "../lib/prisma.js";

export const createController = async (req, res, next) => {
    try{
        const { name, email } = req.body;
        const user = await prisma.user.create({
            data: {
                name,
                email,
            }
        });
        res.status(201).json(user);
    }catch(err){
        next(err);
    }
};

export const getAllUserController = async (req, res,next) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
};

export const getUserByIdController = async (req, res, next) => {
    try{
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
};