CREATE TABLE react_gallery(
id SERIAL PRIMARY KEY,
title VARCHAR(80),
path VARCHAR(100),
description VARCHAR(250),
likes INTEGER    
);

INSERT INTO "react_gallery" ("title", "path")