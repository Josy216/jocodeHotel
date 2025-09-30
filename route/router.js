import express from 'express';
import { createTables } from '../controller/table.js';
import {addmenu, getmenus} from '../controller/addmenu.js';

const router = express.Router();

router.get('/tables', createTables)
router.post('/addmenu', addmenu)
router.get('/getmenu', getmenus)


export default router;