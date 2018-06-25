
\c eas_e_mart;


INSERT INTO categories
(name, img_url)
VALUES
('Electronics', 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Apps-ksnapshot-icon.png'),
('Computers', 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Devices-computer-laptop-icon.png'),
('Cell Phones','http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Devices-phone-icon.png'),
('TV & Home Theater','http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Devices-video-television-icon.png'),
('Games','http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Apps-preferences-desktop-gaming-icon.png'),
('Appliances','http://icons.iconarchive.com/icons/greg-barnes/vintage-kitchen/128/Toaster-icon.png'),
('Furniture','http://icons.iconarchive.com/icons/archigraphs/modern-chairs/128/Magenta-Seat-icon.png');
-- 8  ('Clothes','http://icons.iconarchive.com/icons/babasse/old-school/128/user-icon.png');



INSERT INTO users
(username, password_digest, phone_number, email, location, first_name, last_name, latitude, longitude)
VALUES
('test','password','1234567','test@ga.co','nyc','john','doe',40.758850,-73.985142),
('test1','password1','2345678','test1@ga.co','boston','jone','doe',48.860446,2.344790),
('asdf','$2b$12$pIHAW4LngwWeaWoqCqcTpuFBFiSCNZ4dCGhTSpQA2Ji0lXPiasedK','234','asdf','asf','asfd','af',40.0,73.0);


INSERT INTO items
(user_name_id, category_id, name, description, price, condition, quantity, img_url)
VALUES
(2,1, 'canon EOS Rebel','dslr camera', '699.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3514/3514031_sd.jpg'),
(2,1, 'EOS Rebel SL2','dslr camera', '599.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6157/6157902_sd.jpg'),
(2,1, 'Outdoor Speakers','Yamaha Natural Sound All-Weather Outdoor Speakers', '89.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8837/8837654_sd.jpg'),
(2,2, 'MacBook Pro 15"','Apple MacBook Pro 15.4" Pre-owned Laptop Intel Core i7', '899.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5876/5876107_sd.jpg'),
(2,2, 'MacBook Pro 13"','Apple MacBook Pro 13.3" Intel Core i5, 4GB Memory, 320GB Hard Drive, Silver', '1500.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5849/5849400_sd.jpg'),
(2,2, 'HP Pavilion','Touch-Screen Laptop Intel Core i3 8GB Memory 500GB Hard Drive', '499.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6237/6237362_sd.jpg'),
(2,3, 'Apple iPhone 6s','32GB Memory, Space Gray', '449.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6251/6251005_rd.jpg'),
(2,3, 'iPhone SE','32GB Memory iPhone, Silver', '500.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6230/6230500_sd.jpg'),
(2,3, 'iPhone 8 Plus','64GB (PRODUCT)RED™ Special Edition', '799.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5580/5580906_bd.jpg'),
(2,3, 'iPhone X','64GB, Silver', '999.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009792_sd.jpg'),
(2,4, 'Sony 65" LED','X850E Series 2160p Smart 4K UHD TV with HDR', '1099.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5748/5748206_sd.jpg'),
(2,4, 'Samsung 65" LED','MU6290 Series 2160p Smart 4K Ultra HD TV with HDR', '1199.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6051/6051115_sd.jpg'),
(2,4, 'VIZIO 65" LED','P-Series 2160p Smart 4K UHD TV with HDR', '1500.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213228_sd.jpg'),
(2,4, 'Sharp 65" LED','2160p Smart 4K UHD TV with HDR Roku TV', '699.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5746/5746201_sd.jpg'),
(2,5, 'Sony PlayStation','4 1TB Limited Edition, Blue', '499.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6252/6252368_sd.jpg'),
(2,5, 'Sony PlayStation 4','1TB Console Black', '299.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5850/5850905_sd.jpg'),
(2,5, 'Dragon Ball FighterZ','Dragon Ball FighterZ - PlayStation 4', '59.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5920/5920100_sd.jpg'),
(2,5, 'Nintendo Switch','32GB Console Neon Red/Neon Blue Joy-Con', '499','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5670/5670100_sd.jpg'),
(2,5, 'Pokkén Tournament DX','Pokkén Tournament DX for Nintendo Switch', '59.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5896/5896300_sd.jpg'),
(2,5, 'Microsoft Xbox One S','500GB Console, White', '199.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6114/6114810_sd.jpg'),
(2,6, 'Whirlpool French Door Refrigerator','25.2 Cu. Ft. French Door Refrigerator with Internal Water Dispenser, Stainless steel', '1099.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5789/5789904_sd.jpg'),
(2,6, 'Bosch Dishwasher','800 Series 24" Pocket Handle Dishwasher with Stainless Steel Tub, Stainless steel', '854.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5710/5710298_sd.jpg'),
(2,6, 'LG Over-the-Range Microwave','1.7 Cu. Ft. Over-the-Range Microwave, Stainless steel', '149.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5117/5117701_sd.jpg'),
(2,6, 'LG Front-Loading Washer','4.5 Cu. Ft. 9-Cycle Front-Loading Washer, White', '599.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5544/5544000_sd.jpg'),
(2,7, 'Calico Designs Computer Desk','Ashwood Convertible Computer Desk, Graphite/Ashwood', '99.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5580/5580807_sa.jpg'),
(2,7, 'Arozzi Gaming Chair','Arozzi Gaming Chair White', '199.00','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6075/6075208_sd.jpg'),
(2,7, 'Office Chair','Eco Leather Chair, Espresso', '131.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6246/6246097_sa.jpg'),
(2,7, 'Computer Desk','Comfort Products Inc. Rothmin Computer Desk, Black', '131.99','new',1,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2911/2911305_sa.jpg');
-- (2,1, 'name','description', 'price','new',1,''),
