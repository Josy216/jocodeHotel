import express from "express";
import { createTables } from "../controller/table.js";
import { addmenu, getmenus } from "../controller/addmenu.js";
import deleteMenu  from "../controller/delete.js";
import { edit, getmenuById } from "../controller/edit.js";

const router = express.Router();

router.get("/tables", createTables);
router.post("/addmenu", addmenu);
router.get("/getmenu", getmenus);
router.delete("/deletemenu/:id", deleteMenu);
router.put("/editmenu/:id", edit);
router.get("/getmenu/:id", getmenuById);

export default router;
