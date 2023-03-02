DROP TABLE IF EXISTS animal_biomes;
DROP TABLE IF EXISTS biomes;
DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS diets;


CREATE TABLE diets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(25) NOT NULL UNIQUE
);

INSERT INTO diets (type) 
VALUES
('Herbivore'),
('Omnivore'),
('Carnivore'),
('Piscivore');

CREATE TABLE animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150) NOT NULL,
    genus VARCHAR(75) NOT NULL,
    avg_weight FLOAT(6, 2) NOT NULL,
    is_vertebrate BOOLEAN NOT NULL,
    is_cute BOOLEAN DEFAULT true,
    diet_id INTEGER REFERENCES diets(id) ON DELETE SET NULL
    -- FOREIGN KEY (diet_id) REFERENCES diets(id)
);

INSERT INTO animals (name, genus, avg_weight, is_vertebrate, diet_id, is_cute)
VALUES
('Red Panda', 'Ailurus', 7.4, true, 1, true),
('Raven', 'Corvid', 2.5, TRUE, 2, TRUE),
('Tiger', 'Panthera', 400, true, 3, true),
('Llama', 'lama', 440, true, 1, true),
('Rusty-spotted Cat', 'Prionailurus', 3, true, 2, true) ,
('Blob Fish', 'Spineless sculpins', 20, false, 2, false),
('Lowland Streaked Tenrec', 'Hemicentetes', 4.4, TRUE, 2, TRUE),
('Western Lowland Gorilla', 'Gorilla', 310, true, 1, true),
('Pallas''s cat', 'Otocolobus', 7.7, true, 3, true),
('Shoebill Stork', 'Balaeniceps', 12, true, 4, false),
('Orangutan', 'Pongo', 120, true, 1, false),
('Sloth', 'Bradypus', 14,  TRUE, 3, TRUE),
('Milk Snake', 'Lampropeltis', .5, true, 3, false),
('American Crow', 'Corvid', 1, true, 2, false),
('Mountain Goat', 'Oreamnos', 150, true, 1, true);


INSERT INTO animals (name, genus, avg_weight, is_vertebrate, diet_id)
VALUES
('Mantis Shrimp', 'Odontodactylus', 3.2, false, 3),
('Baboon', 'Papio', 55, true, 2);


CREATE TABLE biomes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    example_location VARCHAR(150)
);

INSERT INTO biomes (name, example_location)
VALUES
('temperate forest', 'Eastern Deciduous Forest'),
('tropical forest', 'Amazon Rain Forest'),
('woodland', 'East African Plains'),
('alpine tundra', 'North Cascades'),
('urban', 'Any city lol'),
('temperate grassland', 'Eurasion steppes'),
('desert', 'Mojave Desert'),
('ocean', 'Pacific Ocean');

CREATE TABLE animal_biomes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    animal_id INTEGER REFERENCES animals(id) ON DELETE CASCADE,
    biome_id INTEGER REFERENCES biomes(id) ON DELETE CASCADE
);

INSERT INTO animal_biomes (animal_id, biome_id)
VALUES
(1, 1),
(1, 3),
(2, 5),
(3, 4),
(3, 6),
(4, 7),
(4, 8),
(2, 2);