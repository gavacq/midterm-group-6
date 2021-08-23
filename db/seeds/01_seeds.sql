

-- Seeds for users table

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (1, 'User1', 111111111, 'Canada', 'British Columbia', 'Vancouver', 'Street 1', '111 111');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (2, 'User2', 222222222, 'Canada', 'Ontario', 'Street 2', 'Toronto', '222 222');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (3, 'User3', 333333333, 'Canada', 'Quebec', 'Street 3', 'Montreal', '333 333');



-- Seeds for products table

INSERT INTO products (id, name, description, price, image_path)
VALUES (01, 'plant', 'This is a plant', 25, '../../public/images/product_images/plant.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (02, 'car', 'This is a car', 5000, '../../public/images/product_images/car.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (03, 'coffee', 'This coffee pairs great with naan', 5, '../../public/images/product_images/coffee.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (04, 'handbag', 'Brand new. Original price: $150', 70, '../../public/images/product_images/handbag.jpg');


INSERT INTO products (id, name, description, price, image_path)
VALUES (05, 'laptop', 'Selling brand new laptop, 15 inch display.', 999, '../../public/images/product_images/laptop.jpg');




-- Seeds for favorites table

INSERT INTO favorites (id, product_id, user_id)
VALUES (382, 03, 1);

INSERT INTO favorites (id, product_id, user_id)
VALUES (041, 02, 1);

INSERT INTO favorites (id, product_id, user_id)
VALUES (901, 05, 3);



-- Seeds for chats table

INSERT INTO chats (id, product_id, user_id)
VALUES (05, 05, 2);

INSERT INTO chats (id, product_id, user_id)
VALUES (10, 02, 1);

INSERT INTO chats (id, product_id, user_id)
VALUES (07, 02, 3);


-- Seeds for messages table

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (14, 05, FALSE, '2020-03-22 04:05:06', 'How old is the laptop?');

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (15, 07, TRUE, '2020-03-22 07:10:06', 'It is 1 year old');

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (13, 07, FALSE, '2021-02-19 08:10:20', 'hello');

