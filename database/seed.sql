
\c eas_e_mart;

DELETE FROM categories;
DELETE FROM users;
DELETE FROM items;

INSERT INTO categories
(name, img_url)
VALUES
('furniture', 'https://classroomclipart.com/images/gallery/Clipart/Furniture/dining-table-chairs-furniture-clipart.jpg'),
('books', 'https:
//content.mycutegraphics.com/graphics/book/stack-of-books-clipart-book-clip-art.png');

INSERT INTO users
(username, password_digest, phone_number, email, location, first_name, last_name, latitude, longitude)
VALUES
('test','password','1234567','test@ga.co','nyc','john','doe',40.758850,-73.985142),
('test1','password1','2345678','test1@ga.co','boston','jone','doe',48.860446,2.344790);


INSERT INTO items
(user_name_id, category_id, name, description, price, condition, quantity, img_url)
VALUES
(2,2, 'sofa','green patent leather sofa', '$500','new',1,'https://a.1stdibscdn.com/archivesE/1stdibs/090412_AA/aa_Faultline_PM/24/DSCN9263.jpg'),
(2,2, '50 shades of grey','great book to read now a major motion picture', '$50','new',5,'https://voolas.com/wp-content/uploads/2016/07/501.jpg');

