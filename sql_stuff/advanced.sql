-- Aggregates

SELECT AVG(avg_weight)
FROM animals
WHERE diet_id = 1;
-- WHERE diet_id IN (1, 2);

SELECT AVG(avg_weight)
FROM animals
GROUP BY diet_id
HAVING diet_id IN (1, 2);


-- Subqueries

SELECT animals.name, animals.diet_id, diets.id, diets.type
FROM animals
JOIN diets ON (animals.diet_id = diets.id)
WHERE diets.type = 'Herbivore';



SELECT animals.name, animals.diet_id
FROM animals
WHERE diet_id = (
    SELECT id
    FROM diets
    WHERE type = 'Herbivore'
);

INSERT INTO animals (name, genus, avg_weight, is_vertebrate, is_cute, diet_id)
VALUES
('Ball Python', 'Python', 4, 1, 1, (
    SELECT id FROM diets WHERE type = 'Carnivore'
));