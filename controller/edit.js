import db from "../model/db.js";

const edit = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, image } = req.body;
  try {
    const update = `UPDATE menulist SET title=?, description=?, price=?, image=? WHERE id=?`;
    const values = [title, description, price, image, id];
    await db.execute(update, values);
    res.status(200).json({ message: "Menu updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating menu", error: error.message });
  }
};

const getmenuById = async (req, res) => {
  const { id } = req.params;
  try {
    const sql = "SELECT * FROM menulist WHERE id = ?";
    const [rows] = await db.execute(sql, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { edit, getmenuById };
