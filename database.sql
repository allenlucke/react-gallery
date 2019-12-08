CREATE TABLE react_gallery(
id SERIAL PRIMARY KEY,
title VARCHAR(80),
path VARCHAR(100),
description VARCHAR(250),
likes INTEGER   
);

INSERT INTO "react_gallery" ("title", "path", "description", "likes")
VALUES('Julia in Blanket', 'images/img1.jpg', 'Photo my wife took of my daughter at about 7 weeks old.', 0),
('Together at last.', 'images/img2.jpg', 'Photo of us right before we left the hospital.', 0),
('Hello World', 'images/img3.jpg', 'Photo I took of Julia at about 5 weeks.', 0);