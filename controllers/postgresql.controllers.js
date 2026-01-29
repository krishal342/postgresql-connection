import { prisma } from "../lib/prisma.js";


// create operation
export const createController = async (req, res, next) => {
    try{
        const { name, email } = req.body;
        const user = await prisma.user.create({
            data: {
                name,
                email:email.toLowerCase(),
            }
        });
        res.status(201).json(user);
    }catch(err){
        next(err);
    }
};

// read operation
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

// update operation
export const updateUserController = async (req, res, next) => {
    try{
        const {id} = req.params;
        const { name, email } = req.body;
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        });
        user.name = name || user.name;
        user.email = email ? email.toLowerCase() : user.email;
        await prisma.user.update({
            where: {
                id
            },
            data: user
        });
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// delete operation
export const deleteUserController = async (req, res, next) => {
    try{
        const {id} = req.params;
        await prisma.user.delete({
            where:{
                id,
            }
        });
        res.status(200).json({message: 'User deleted successfully'});
    }catch(err){
        next(err);
    }
}