import db from '../model/db.js';

const addmenu = async (req, res)=>{
    const { title, description, price, image } = req.body;
    if(!title || !description || !image || !price){
        return res.status(400).json({ message: 'All fields are required' });
    } 

    if(isNaN(price) || price <= 0){
        return res.status(400).json({ message: 'Price must be a positive number' });
    }

    try {
      const addmenu = `insert into menulist (title, description, price, image) values (?, ?, ?, ?)`;

      await db.query(addmenu, [title, description, price, image]);
      res.status(201).json({ message: 'Menu added successfully' });



    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getmenus = async (req, res)=>{
  try {
    const getmenu = `select * from menulist`
    const [rows] = await db.query(getmenu)
    res.status(200).json(rows)
  } catch (error) {
    console.log(`error ocuured : ${error.message}`)
  }
}

export  {addmenu, getmenus};