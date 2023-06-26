SELECT DISTINCT p.maker, l.speed
FROM Product AS p, Laptop AS l
WHERE l.hd >= 10 AND l.model = p.model;
