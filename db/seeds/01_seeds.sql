-- note: should we manually insert the ids ??



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




-- Seeds for favorites table

INSERT INTO favorites (id, product_id, user_id)
VALUES (382, 03, 1);


INSERT INTO favorites (id, product_id, user_id)
VALUES (041, 02, 1);

INSERT INTO favorites (id, product_id, user_id)
VALUES (901, 05, 3);



-- Seeds for messages table

INSERT INTO messages (id, product_id, user_id, is_sold, datetime, content)
VALUES (14, 05, 3, FALSE, '2020-03-22 04:05:06', 'How old is the laptop?');


INSERT INTO messages (id, product_id, user_id, is_sold, datetime, content)
VALUES (22, 03, 1, FALSE, '2019-06-04 10:43:20', 'hello, I am interested in the coffee');

-- message from an admin (?)
INSERT INTO messages (id, product_id, user_id, is_sold, datetime, content)
VALUES (13, 03, 1, TRUE, '2019-06-04 11:20:07', 'Sorry, the coffee is sold out');




