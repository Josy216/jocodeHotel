// controller/delete.js
import db from "../model/db.js";

const deletemenu = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM menulist WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json({ message: "Menu item deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Error deleting menu item" });
  }
};

export default deletemenu;
