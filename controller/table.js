import db from "../model/db.js";

const createTables = async (req, res) => {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS menulist (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10, 2) NOT NULL,
            image text NOT NULL
        )`);
    res.status(200).json({ message: "Table created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export { createTables };
