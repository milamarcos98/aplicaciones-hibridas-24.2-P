import express from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } from "../controller/users_controller.js";
import jwt from "jsonwebtoken"

const router = express.Router();


const auth = (req, res, next) => {
    const headersToken = req.headers.authorization;
    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJjYW1pbGFAZ21haWwuY29tIiwiaWF0IjoxNzI2NzAyMzcwLCJleHAiOjE3MjY3MDU5NzB9.KDvx3G7QTOcLQvVTq_7dLY_cTjhboeGvvv6BJaW5mYQ"
    
    // ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJjYW1pbGFAZ21haWwuY29tIiwiaWF0IjoxNzI2NzAyMzcwLCJleHAiOjE3MjY3MDU5NzB9.KDvx3G7QTOcLQvVTq_7dLY_cTjhboeGvvv6BJaW5mYQ"]
    if(headersToken){
        const token = headersToken.split(" ")[1];
        const secretKey = "clavesupersecreta"
        jwt.verify(token, secretKey, (err, payload) => {
            if(err){
                console.log(err)
                return res.sendStatus(403)
            }
            console.log(payload)
            req.user = {
                id: payload.id,
                email: payload.at.email
            }
            next()
        })
       
    }else{
        res.status(401)
    }
}

router.get('/', auth, getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;