INSERT INTO entree (nom, descr, prix)
VALUES ( 'Salade de chèvre chaud', '', 5 ), 
( 'Tartare de saumon et d’avocat', '', 5 ), 
( 'Aumônière de foie gras', '', 5 ), 
( 'Carpaccio de Saint Jacques aux truffes', '', 5 ), 
( 'Escargots à l’ail gratinés', '', 5 );

INSERT INTO plat (nom, descr, prix)
VALUES ( 'Steak tartare', '', 5 ), 
( 'Raclette', '', 5 ), 
( 'Pizza façon Anthony', '', 5 ), 
( 'Navarin de mouton', '', 5 ), 
( 'Gratin dauphinois', '', 5 );

INSERT INTO dessert (nom, descr, prix)
VALUES ( 'Parfait à la fraise', '', 5 ), 
( 'Clafouti au nutella', '', 5 ), 
( 'Crumble aux pommes', '', 5 ), 
( 'Crèpe', '', 5 ), 
( 'Glace 2 boules', '', 5 );

INSERT INTO menu (id_entree, id_plat, id_dessert)
VALUES (1,1,1), (2,2,2), (3,3,3), (4,4,4), (5,5,5);