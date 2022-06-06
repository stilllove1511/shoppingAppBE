import express from "express";
import accountController from "../controllers/accountController";

const accountRouter = express.Router()

accountRouter.put('/update-password', accountController.updatePassword)

export default accountRouter