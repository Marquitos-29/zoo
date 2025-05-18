drop database if exists zoo;
create database zoo;
use zoo;

CREATE TABLE TAnimal (
  Id int primary key NOT NULL auto_increment,
  Nombre varchar(50) NOT NULL,
  Descripcion varchar(255) NOT NULL,
  Dato varchar(255) NOT NULL,
  L_Foto varchar(128) NOT NULL
);

INSERT INTO TAnimal (Nombre, Descripcion, Dato, L_Foto) VALUES
('Leon', 'Gran felino africano, conocido como el "rey de la selva".', 'El rugido de un leon puede escucharse hasta a 8 km de distancia.', '/animales/leon.jpg'),
('Elefante africano', 'El mamifero terrestre mas grande del mundo.', 'Sus orejas tienen la forma del continente africano.', '/animales/elefante.jpg'),
('Tigre de Bengala', 'Uno de los grandes felinos mas poderosos del planeta.', 'Tiene rayas unicas como una huella digital.', '/animales/tigre.jpg'),
('Cebra', 'Mamifero africano con un pelaje a rayas blancas y negras.', 'Las rayas ayudan a confundir a los depredadores.', '/animales/cebra.jpg'),
('Jirafa', 'El animal terrestre mas alto del mundo.', 'Tiene la misma cantidad de vertebras en el cuello que un humano: siete.', '/animales/jirafa.jpg'),
('Panda gigante', 'Oso blanco y negro originario de China.', 'Pasa hasta 12 horas al dia comiendo bambu.', '/animales/panda.jpg'),
('Orangutan', 'Gran simio nativo de Indonesia y Malasia.', 'Su nombre significa "hombre del bosque" en malayo.', '/animales/orangutan.jpg'),
('Pinguino emperador', 'La especie de pinguino mas grande. Vive en la Antartida.', 'Los machos incuban los huevos en sus patas durante el invierno.', '/animales/pinguino.jpg'),
('Flamenco', 'Ave rosada conocida por su postura sobre una sola pierna.', 'Su color rosa viene de los pigmentos en su dieta (como camarones).', '/animales/flamenco.jpg'),
('Lobo gris', 'Canino salvaje con fuerte instinto de manada.', 'Se comunica con aullidos que pueden oirse a kilometros.', '/animales/lobo.jpg'),
('Rinoceronte blanco', 'Uno de los animales mas grandes de Africa.', 'Su cuerno esta hecho de queratina, como las unas humanas.', '/animales/rinoceronte.jpg'),
('Hipopotamo', 'Mamifero semiaquatico y muy territorial.', 'A pesar de su tamano, puede correr mas rapido que un humano.', '/animales/hipopotamo.jpg'),
('Cocodrilo del Nilo', 'Uno de los reptiles mas grandes del mundo.', 'Puede vivir mas de 70 anios.', '/animales/cocodrilo.jpg'),
('Camello', 'Mamifero del desierto con jorobas que almacenan grasa.', 'Puede pasar hasta dos semanas sin agua.', '/animales/camello.jpg'),
('Suricata', 'Pequeno mamifero africano que vive en grupos.', 'Siempre hay una suricata vigilando mientras las otras buscan comida.', '/animales/suricata.jpg'),
('Oso polar', 'Gran depredador del Artico.', 'Su piel es negra bajo el pelaje blanco, para absorber mas calor.', '/animales/osopolar.jpg'),
('Canguro', 'Marsupial saltador de Australia.', 'No puede caminar hacia atras.', '/animales/canguro.jpg'),
('Boa constrictor', 'Gran serpiente que mata por constriccion.', 'Puede tragarse presas mucho mas grandes que su cabeza.', '/animales/boa.jpg'),
('Tortuga gigante de Galapagos', 'Una de las tortugas mas longevas.', 'Puede vivir mas de 100 anios.', '/animales/tortuga.jpg'),
('Avestruz', 'Ave no voladora mas grande del mundo.', 'Puede correr a mas de 70 km/h.', '/animales/avestruz.jpg'),
('Capibara', 'El roedor mas grande del mundo, muy sociable y tranquilo.', 'Puede permanecer bajo el agua durante varios minutos para esconderse.', '/animales/capibara.jpg');


CREATE TABLE TEntrada (
  Id int primary key NOT NULL AUTO_INCREMENT,
  Correo varchar(100) NOT NULL,
  T_Grupo varchar(255) NOT NULL,
  Dia date NOT NULL,
  Hora time NOT NULL,
  Telefono int(11),
  Cant_Nino int,
  Cant_Adolescente int,
  Cant_Joven int,
  Cant_Adulto int,
  Cant_Mreducida varchar(255),
  Cant_Especial varchar(255),
  Donativos int,
  Precio_f int
);