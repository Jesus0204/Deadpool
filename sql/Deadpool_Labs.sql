CREATE database Deadpool_Labs;

USE Deadpool_Labs;

CREATE TABLE Usuario (
	username VARCHAR(30) NOT NULL PRIMARY KEY,
    password VARCHAR(400), 
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE Mensaje (
	idMensaje INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(50), 
    mensaje VARCHAR(100), 
    username VARCHAR(30), 
	created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(idMensaje),
    FOREIGN KEY(username) REFERENCES Usuario(username)
);

CREATE TABLE Insta_Post (	
	IDInsta_Post INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(50),
    caption VARCHAR(100),
    fecha TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
    imagen VARCHAR(500),
    PRIMARY KEY(IDInsta_Post)
);

CREATE TABLE Rol (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(id)
);

CREATE TABLE Permiso (
    id INT NOT NULL AUTO_INCREMENT,
    funcion VARCHAR(45),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(id)
);

CREATE TABLE Posee (	
	idRol INT,
    idPermiso INT,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(idRol, idPermiso),
    FOREIGN KEY(idRol) REFERENCES Rol(id),
    FOREIGN KEY(idPermiso) REFERENCES Permiso(id)
);

CREATE TABLE Asigna (	
	idRol INT,
    username VARCHAR(30),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(idRol, username),
    FOREIGN KEY(idRol) REFERENCES Rol(id),
    FOREIGN KEY(username) REFERENCES Usuario(username)
);


INSERT INTO Usuario VALUES 
('Jesus0204','$2a$12$g4qEIHttkfgOsyIxiIv22ukyLuy1xVHKYJb6hRz1u6H.wUFuzkjtW','2024-03-07 16:24:04'),
('Deadpool','$2a$12$uhl34uz07jwrrau9GiQ4HOyEsPGcTjxUaY7/kH8e0kr09tQ8D3Nmm','2024-03-07 16:24:04'),
('Angel','$2a$12$NOTyaeOncqVJiun2xzU3zeaLpJTAKWhRWuPhJBRExKFRQViw/oSD2','2024-03-07 16:24:04'),
('Alexys','$2a$12$koueEzqKSYkdF7pH5Wxf/OrVTjHVp0.PDzn9HGaHrXsMPWzmdH9ZO','2024-03-07 16:24:04');

INSERT INTO Mensaje VALUES 
(1,"¡¿Help?!","Don\'t just stand there you ape! Get over here and give me a hand!",'Jesus0204','2024-03-07 16:25:37'),
(2,'Hello there','General Kenobi','Jesus0204','2024-03-07 16:58:37'),
(3,'Did I just get philosphical?','Life is an endless series of train-wrecks, with only brief, commercial-like breaks of happiness','Jesus0204','2024-03-07 16:58:37'),
(4,'Pregunta','Como estas Bro? Jalas por unas cheves a cabo piraña el que esta a lado del Oxxo fuera del Tec','Angel','2024-03-07 16:58:37');

INSERT INTO Insta_Post VALUES 
(1,'Escuchando unos buenos beats','¿A quién más le gusta Solence?','2024-03-07 22:16:32','https://media.npr.org/assets/img/2018/05/11/deadpool2-af0212_pubstill_01_r_rgb_wide-59f49b4c92ec6d13baabb22a2be452199f4b2925-s1600-c85.webp'),
(2,'¡¿Vacaciones?!','Aquí en Vallarta buscando a mi buen amigo Wolverine','2024-03-07 22:18:07','https://pbs.twimg.com/media/Fr3GjD6WIAIZEU3?format=jpg&name=medium'),
(3,'Lo encontre!','Estaba caminando de regreso hacia el universo de Fox.','2024-03-07 22:20:01','https://cnnespanol.cnn.com/wp-content/uploads/2023/07/deadpool-3-wolverine.jpg?quality=100&strip=info&w=940&h=530&crop=1'),
(4,'Pose heroíca','Me veo genial no?','2024-03-07 22:21:47','https://www.usatoday.com/gcdn/-mm-/32b0614a1fd095bbc49fcea15a4ae90ee6718e00/c=0-0-2999-1695/local/-/media/2016/02/11/USATODAY/USATODAY/635908058668140572-AP-FILM-REVIEW-DEADPOOL-79512492.JPG?width=1320&height=748&fit=crop&format=pjpg&auto=webp');