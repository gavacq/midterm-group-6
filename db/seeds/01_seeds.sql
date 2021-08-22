-- note: should we insert the user id??


-- Seeds for users table

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (1, 'User1', 111111111, 'Canada', 'British Columbia', 'Street 1', '111 111');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (2, 'User2', 222222222, 'Canada', 'Ontario', 'Street 2', '222 222');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (3, 'User3', 333333333, 'Canada', 'Quebec', 'Street 3', '333 333');



-- Seeds for products table

INSERT INTO products (id, name, description, price, image_path)
VALUES (01, 'plant', 'This is a plant', 25, '../../public/images/product_images/plant.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (02, 'car', 'This is a car', 5000, '../../public/images/product_images/car.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (03, 'coffee', 'This coffee pairs great with naan', 5, '../../public/images/product_images/coffee.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (04, 'handbag', 'Original price: $150', 70, '../../public/images/product_images/handbag.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (05, 'laptop', 'Selling brand new laptop, 15 inch screen', 999, '../../public/images/product_images/laptop.jpg');
