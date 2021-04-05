CREATE TABLE  admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    image_url VARCHAR(100) NULL,
    password VARCHAR(50) NOT NULL,
    mobile VARCHAR(20)  NULL
);

INSERT INTO `admin` (`admin_id`, `name`, `email`, `image_url`, `password`, `mobile`) 
VALUES (NULL, 'Admin', 'admin@negotium.com', NULL, 'admin@123', NULL);

CREATE TABLE  feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    company VARCHAR(50) NULL,
    feedback TEXT  NULL
);