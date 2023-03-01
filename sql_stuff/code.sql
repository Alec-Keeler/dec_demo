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