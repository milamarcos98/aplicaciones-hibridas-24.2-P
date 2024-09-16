import express, { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controller/users_controller";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;