const db = require("../database/connection");
const Items = {};

Items.all = () => {
  return db.any('SELECT * FROM items');
};

Items.find = id => {
  return db.one("SELECT * FROM items WHERE id = ${id} ORDER BY ID ASC", { id: id });
};

Items.create = newItem=> {
  return db.one("INSERT INTO items (user_name_id, category_id, name, description, price, condition, quantity, img_url) VALUES (${user_name_id}, ${category_id}, ${name}, ${description}, ${price}, ${condition}, ${quantity}, ${img_url}) RETURNING *", newItem);
};

Items.update = updatedItem => {
  return db.none("UPDATE items SET user_name_id = ${user_name_id}, category_id = ${category_id}, name = ${name}, description = ${description}, price = ${price}, condition = ${condition}, quantity = ${quantity}, image_url = ${image_url} WHERE id = ${id}", updatedItem);
};

Items.delete = id => {
  return db.result("DELETE FROM items WHERE id = ${id}", { id: id });
};

module.exports = Items;
