import express from "express";
import { get, getAll} from "../controllers/category";
const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", get);;

export default router;