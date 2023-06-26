SELECT model, speed, hd
FROM PC
WHERE (CD = '12x' OR CD = '24x') AND price < 600;
