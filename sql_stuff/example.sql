DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150) NOT NULL,
    genus VARCHAR(75) NOT NULL,
    biome VARCHAR(200),
    avg_weight FLOAT(6, 2) NOT NULL,
    is_vertebrate BOOLEAN NOT NULL,
    diet VARCHAR(50),
    is_cute BOOLEAN DEFAULT true
);

INSERT INTO animals (name, genus, biome, avg_weight, is_vertebrate, diet, is_cute)
VALUES
('Red Panda', 'Ailurus', 'Temporate Forest', 7.4, true, 'Herbivore', true),
('Raven', 'Corvid', 'Urban', 2.5, TRUE, 'Omnivore', TRUE),
('Tiger', 'Panthera', 'Savanna', 400, true, 'Carnivore', true),
('Llama', 'lama', 'upland mountain plateaus', 440, true, 'herbivore' , true),
('Rusty-spotted Cat', 'Prionailurus', 'Wooded Grassland', 3, true, 'Omnivore', true) ,
('Blob Fish', 'Spineless sculpins', 'mesopelagic ocean zone', 20, false, 'omnivore', false),
('Lowland Streaked Tenrec', 'Hemicentetes', 'tropical lowland rain forests', 4.4, TRUE, 'Omnivore', TRUE),
('Western Lowland Gorilla', 'Gorilla', 'Rainforest', 310, true, 'herbivore', true),
('Pallas''s cat', 'Otocolobus', 'Desert Shrublands', 7.7, true, 'Carnivore', true),
('Shoebill Stork', 'Balaeniceps', 'Swamp', 12, true, 'piscivore', false),
('Orangutan', 'Pongo', 'Rain Forest', 120, true, 'Herbivore', false),
('Sloth', 'Bradypus', 'Tropical Rain Forests', 14,  TRUE, 'human', TRUE),
('Milk Snake', 'Lampropeltis', 'Forests', .5, true, 'carnivore', false);


INSERT INTO animals (name, genus, biome, avg_weight, is_vertebrate, diet)
VALUES
('Mantis Shrimp', 'Odontodactylus', 'tropical waters', 3.2, false, 'carnivore'),
('Baboon', 'Papio', 'semi-arid/tropical', 55, true, 'Omnivore');