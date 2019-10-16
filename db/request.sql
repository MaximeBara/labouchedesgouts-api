/* Afficher tous les menus avec leur contenu */
SELECT entree.nom, plat.nom, dessert.nom
FROM menu, entree, plat, dessert
WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert;

/* Afficher tous les desserts <5e */
SELECT *
FROM dessert
WHERE dessert.prix < 5;

/* Trouver le menu le plus cher */
SELECT entree.nom, plat.nom, dessert.nom
FROM menu, entree, plat, dessert
WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert AND entree.prix=(SELECT MAX(prix) FROM entree) AND plat.prix=(SELECT MAX(prix) FROM plat) AND dessert.prix=(SELECT MAX(prix) FROM dessert);

/* Trouver le menu le moins cher */
SELECT entree.nom, plat.nom, dessert.nom
FROM menu, entree, plat, dessert
WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert AND entree.prix=(SELECT MIN(prix) FROM entree) AND plat.prix=(SELECT MIN(prix) FROM plat) AND dessert.prix=(SELECT MIN(prix) FROM dessert);

/* Afficher les menus par ordre de prix croissant */
SELECT entree.nom, plat.nom, dessert.nom, entree.prix + plat.prix + dessert.prix as prix_menu
FROM menu, entree, plat, dessert
WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert
ORDER BY prix_menu ASC;

/* Afficher tous les menus de moins de 20e */
SELECT entree.nom, plat.nom, dessert.nom, entree.prix + plat.prix + dessert.prix as prix_menu
FROM menu, entree, plat, dessert
WHERE menu.id_entree=entree.id_entree AND menu.id_plat=plat.id_plat AND menu.id_dessert=dessert.id_dessert
GROUP BY entree.nom, plat.nom, dessert.nom
HAVING prix_menu <15;

/* Afficher les entrées, plats, desserts qui ne sont pas dans les menus */
SELECT entree.nom, plat.nom, dessert.nom
FROM entre, plat, dessert
WHERE entree.id_entree NOT IN (SELECT id_entree FROM menu) AND plat.id_plat NOT IN (SELECT id_plat FROM plat) AND dessert.id_dessert NOT IN (SELECT id_dessert FROM menu);