

-- Seeds for users table

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (1, 'User1', 111111111, 'Canada', 'British Columbia', 'Vancouver', 'Street 1', '111 111');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (2, 'User2', 222222222, 'Canada', 'Ontario', 'Street 2', 'Toronto', '222 222');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (3, 'User3', 333333333, 'Canada', 'Quebec', 'Street 3', 'Montreal', '333 333');

INSERT INTO users (id, name, phone, country, province, city, street, postal_code)
VALUES (4, 'Gavin', 444444444, 'Canada', 'British Columbia', 'Vancouver', 'Street 4', '444 444');



-- Seeds for products table

INSERT INTO products (id, name, description, price, image_path)
VALUES (01, 'plant', 'This is a plant', 25, '/images/product_images/plant.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (02, 'car', 'This is a car', 5000, '/images/product_images/car.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (03, 'coffee', 'This coffee pairs great with naan', 5, '/images/product_images/coffee.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (04, 'handbag', 'Brand new. Original price: $150', 70, '/images/product_images/handbag.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (05, 'laptop', 'Selling brand new laptop, 15 inch display.', 999, '/images/product_images/laptop.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (06, 'apples', 'Organic ambrosia apples from the farm. $10 for 3kg.', 10, '/images/product_images/apples.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (07, 'game controller', 'I am selling two of these, both are in perfect condition.', 30, '/images/product_images/controller.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (08, 'Wireless headphones', 'Bluetooth headphones, 2019 model', 75, '/images/product_images/headphones.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (09, 'Macarons', 'Fresh from the bakery. 10 for $15.', 15, '/images/product_images/macarons.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (10, 'Lighthouse', 'WiFi not included.', 13000, '/images/product_images/lighthouse.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (12, 'Naan', 'Great mid-lecture snack', 10, '/images/product_images/naan.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (13, 'Chai', 'const assert = require("chai").assert', 12, '/images/product_images/chai.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (14, 'sneakers', 'new kicks', 12, '/images/product_images/sneakers.jpg');

INSERT INTO products (id, name, description, price, image_path)
VALUES (15, 'polaroid camera', 'Only used a few times. Film no included.', 80, '/images/product_images/polaroid.jpg');




-- Seeds for favorites table

INSERT INTO favorites (id, product_id, user_id)
VALUES (382, 03, 1);

INSERT INTO favorites (id, product_id, user_id)
VALUES (041, 02, 1);

INSERT INTO favorites (id, product_id, user_id)
VALUES (901, 05, 3);

INSERT INTO favorites (id, product_id, user_id)
VALUES (119, 13, 4);

INSERT INTO favorites (id, product_id, user_id)
VALUES (079, 12, 4);

INSERT INTO favorites (id, product_id, user_id)
VALUES (613, 03, 4);



-- Seeds for chats table

INSERT INTO chats (id, product_id, user_id)
VALUES (05, 05, 2);

INSERT INTO chats (id, product_id, user_id)
VALUES (10, 02, 1);

INSERT INTO chats (id, product_id, user_id)
VALUES (07, 02, 3);

INSERT INTO chats (id, product_id, user_id)
VALUES (56, 03, 4);


-- Seeds for messages table

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (14, 05, FALSE, '2020-03-22 04:05:06', 'How old is the laptop?');

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (15, 07, TRUE, '2020-03-22 07:10:06', 'It is 1 year old');

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (13, 07, FALSE, '2021-02-19 08:10:20', 'hello');

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (44, 56, FALSE, '2021-08-24 05:39:04', 'hello, I need coffee to fuel my caffeine addiction.');

INSERT INTO messages (id, chat_id, from_admin, datetime, content)
VALUES (45, 56, TRUE, '2021-08-24 06:00:00', 'lol');