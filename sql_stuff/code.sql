SELECT * 
FROM animals;

SELECT name, is_cute FROM animals;

SELECT * FROM animals
WHERE name = 'Red Panda';

SELECT * FROM animals
WHERE avg_weight >= 10;

SELECT * FROM animals
WHERE avg_weight <= 10 OR is_cute = true;

-- Deleting
DELETE FROM animals
WHERE id = 3;

-- Updating
UPDATE animals
SET is_cute = true
WHERE id = 10;

UPDATE animals
SET avg_weight = avg_weight + 10;

-- W10D4

SELECT name, diet_id
FROM animals
WHERE diet_id IN (1, 2);

SELECT name, avg_weight
FROM animals
WHERE avg_weight BETWEEN 100 AND 400;

SELECT name
FROM animals
WHERE name LIKE '%red%';

SELECT name 
FROM animals
ORDER BY name ASC;

SELECT name
FROM animals
LIMIT 5;

SELECT name
FROM animals
LIMIT 5
OFFSET 5;

SELECT name, avg_weight AS average_weight
FROM animals;

-- SELECT
-- FROM
-- JOINS
-- WHERE
-- GROUP BY
-- HAVING
-- ORDER BY
-- LIMIT
-- OFFSET


SELECT animals.name, animals.diet_id, diets.id, diets.type
FROM animals
JOIN diets ON (animals.diet_id = diets.id);

SELECT biomes.name, biomes.id, animal_biomes.biome_id, animal_biomes.animal_id, animals.id, animals.name, animals.diet_id, diets.id, diets.type
FROM animal_biomes
JOIN animals ON (animal_biomes.animal_id = animals.id)
JOIN diets ON (animals.diet_id = diets.id)
JOIN biomes ON (animal_biomes.biome_id = biomes.id)
WHERE animals.id = 3;