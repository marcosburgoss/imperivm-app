create table unidades_habilidades
(
    id              int auto_increment
        primary key,
    id_unidad       int         null,
    id_habilidad    int         null,
    alias_unidad    varchar(45) null,
    alias_habilidad varchar(45) null,
    constraint fk_id_habilidad
        foreign key (id_habilidad) references habilidades (id),
    constraint fk_id_unidad
        foreign key (id_unidad) references unidades (id)
);

create index habilidades_unidades_idx
    on unidades_habilidades (id_habilidad);

create index unidades_habilidades_idx
    on unidades_habilidades (id_unidad);

INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (1, 3, 33, 'B-ARQUEROBRITANO', 'GOLPETRIPLE');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (2, 2, 2, 'B-GUERRERO', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (3, 4, 10, 'B-LANCEROBRITANO', 'INMUNIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (4, 4, 23, 'B-LANCEROBRITANO', 'PENETRACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (5, 6, 8, 'B-GUERREROCONJABALINA', 'GOLPEMORTAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (6, 5, 9, 'B-LUCHADORCALCEDONIO', 'DEFENSAESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (7, 5, 5, 'B-LUCHADORCALCEDONIO', 'REANIMACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (8, 7, 10, 'B-HIGHLANDER', 'INMUNIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (9, 8, 15, 'B-JEFENORMANDO', 'LIBERTAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (10, 8, 14, 'B-JEFENORMANDO', 'FEROCIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (11, 8, 20, 'B-JEFENORMANDO', 'ABSORCION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (12, 12, 23, 'C-LANCEROLIBIO', 'PENETRACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (13, 11, 27, 'C-INFANTENUMIDA', 'VENGANZA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (14, 13, 22, 'C-LUCHADORMAURITANO', 'CONTENCION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (15, 13, 25, 'C-LUCHADORMAURITANO', 'FURIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (16, 14, 3, 'C-GUERREROCONMAZA', 'OBSTINACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (17, 15, 18, 'C-TUAREG', 'VISTADELINCE');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (18, 15, 26, 'C-TUAREG', 'REGENERACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (19, 16, 20, 'C-NOBLE', 'ABSORCION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (20, 16, 35, 'C-NOBLE', 'DETERMINACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (21, 17, 32, 'C-ELEFANTEDEGUERRA', 'DAÑOEXPANSIVO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (22, 17, 26, 'C-ELEFANTEDEGUERRA', 'REGENERACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (23, 17, 15, 'C-ELEFANTEDEGUERRA', 'LIBERTAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (24, 21, 12, 'E-ARQUEROEGIPCIO', 'EXTENUACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (25, 20, 6, 'E-LUCHADOREGIPCIO', 'DESVANECIMIENTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (26, 22, 33, 'E-LANZADORDEHACHAS', 'GOLPETRIPLE');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (27, 24, 3, 'E-GUERRERODEHORUS', 'OBSTINACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (28, 23, 8, 'E-GUERRERODEANUBIS', 'GOLPEMORTAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (29, 25, 10, 'E-GUARDIANDELNILO', 'INMUNIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (30, 25, 14, 'E-GUARDIANDELNILO', 'FEROCIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (31, 26, 15, 'E-CARRODEOSIRIS', 'LIBERTAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (32, 26, 11, 'E-CARRODEOSIRIS', 'ATAQUEVENENOSO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (33, 30, 2, 'G-ARQUEROGALO', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (34, 29, 23, 'G-GUERRERO', 'PENETRACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (35, 31, 21, 'G-GUERREROCONHACHA', 'ATAQUEEXPERTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (36, 31, 14, 'G-GUERREROCONHACHA', 'FEROCIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (37, 32, 10, 'G-LANCERO', 'INMUNIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (38, 33, 4, 'G-JINETEGALO', 'CARGA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (39, 34, 8, 'G-GUERRERA', 'GOLPEMORTAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (40, 34, 27, 'G-GUERRERA', 'VENGANZA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (41, 35, 15, 'G-GUERRERODEFAND', 'LIBERTAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (42, 35, 34, 'G-GUERRERODEFAND', 'TRIUNFO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (43, 39, 12, 'I-ARQUEROIBERO', 'EXTENUACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (44, 38, 9, 'I-MILICIANO', 'DEFENSAESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (45, 41, 10, 'I-DEFENSOR', 'INMUNIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (46, 41, 31, 'I-DEFENSOR', 'RESISTENCIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (47, 40, 31, 'I-HONDERO', 'RESISTENCIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (48, 40, 13, 'I-HONDERO', 'GOLPEEXPERTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (49, 42, 4, 'I-JINETEIBERO', 'CARGA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (50, 43, 3, 'I-GUARDIADEELITE', 'OBSTINACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (51, 44, 21, 'I-GUERRILLERO', 'ATAQUEEXPERTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (52, 44, 15, 'I-GUERRILLERO', 'LIBERTAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (53, 44, 28, 'I-GUERRILLERO', 'OCULTACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (54, 48, 9, 'R-ARQUEROROMANO', 'DEFENSAESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (55, 47, 10, 'R-LEGIONARIO', 'INMUNIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (56, 55, 21, 'R-VELITE', 'ATAQUEEXPERTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (57, 49, 13, 'R-GLADIADOR', 'GOLPEEXPERTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (58, 50, 1, 'R-PRINCEP', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (59, 50, 2, 'R-PRINCEP', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (60, 51, 9, 'R-EQUITE', 'DEFENSAESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (61, 51, 25, 'R-EQUITE', 'FURIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (62, 56, 22, 'R-TRIBUNO', 'CONTENCION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (63, 56, 23, 'R-TRIBUNO', 'PENETRACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (64, 52, 29, 'R-PRETORIANO', 'DAÑOREFLEJADO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (65, 52, 5, 'R-PRETORIANO', 'REANIMACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (66, 53, 19, 'R-LIBERATUS', 'APRENDIZAJE');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (67, 53, 26, 'R-LIBERATUS', 'REGENERACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (68, 57, 14, 'R-CARRODEGUERRA', 'FEROCIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (69, 57, 33, 'R-CARRODEGUERRA', 'GOLPETRIPLE');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (70, 60, 1, 'T-ARQUERAGERMANA', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (71, 60, 2, 'T-ARQUERAGERMANA', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (72, 59, 1, 'T-LUCHADORGERMANO', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (73, 59, 2, 'T-LUCHADORGERMANO', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (74, 61, 6, 'T-GUERREROCONHACHA', 'DESVANECIMIENTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (75, 62, 23, 'T-CAZADORA', 'PENETRACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (76, 62, 28, 'T-CAZADORA', 'OCULTACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (77, 63, 2, 'T-JINETETEUTON', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (78, 67, 2, 'T-ARQUEROTEUTON', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (79, 68, 2, 'T-ASALTADORTEUTON', 'ATAQUEESPECIAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (80, 68, 31, 'T-ASALTADORTEUTON', 'RESISTENCIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (81, 64, 13, 'T-GUERREROCONMAZA', 'GOLPEEXPERTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (82, 65, 24, 'T-VALKIRIA', 'ATAQUELETAL');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (83, 65, 31, 'T-VALKIRIA', 'RESISTENCIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (84, 66, 7, 'T-HECHICERA', 'MALDICION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (85, 9, 1, 'B-DRUIDA', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (86, 9, 17, 'B-DRUIDA', 'ENCUBRIMIENTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (87, 18, 7, 'C-CHAMAN', 'MALDICION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (88, 29, 6, 'G-GUERRERO', 'DESVANECIMIENTO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (89, 36, 16, 'G-DRUIDA', 'CURACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (90, 36, 1, 'G-DRUIDA', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (91, 36, 28, 'G-DRUIDA', 'OCULTACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (92, 45, 1, 'I-SACERDOTISA', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (93, 45, 30, 'I-SACERDOTISA', 'INICIACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (94, 54, 1, 'R-SACERDOTE', 'VITALIDAD');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (95, 54, 16, 'R-SACERDOTE', 'CURACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (96, 1, 55, 'B-HEROE', 'CARISMA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (97, 1, 42, 'B-HEROE', 'MAESTRIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (98, 1, 52, 'B-HEROE', 'GESTA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (99, 1, 44, 'B-HEROE', 'MOVIMIENTOEVASIVO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (100, 1, 45, 'B-HEROE', 'RECUPERACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (101, 10, 48, 'C-HEROE', 'VIGOR');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (102, 10, 57, 'C-HEROE', 'OSADIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (103, 10, 36, 'C-HEROE', 'LIDERAZGO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (104, 10, 39, 'C-HEROE', 'MARCHAFORZADA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (105, 10, 50, 'C-HEROE', 'SABIDURIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (106, 19, 45, 'E-HEROE', 'RECUPERACION');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (107, 19, 48, 'E-HEROE', 'VIGOR');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (108, 19, 54, 'E-HEROE', 'SUPERVIVENCIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (109, 19, 39, 'E-HEROE', 'MARCHAFORZADA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (110, 19, 59, 'E-HEROE', 'CURACION2');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (111, 28, 42, 'G-HEROE', 'MAESTRIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (112, 28, 43, 'G-HEROE', 'ATAQUEHEROICO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (113, 28, 40, 'G-HEROE', 'RESISTENCIAHEROICA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (114, 28, 51, 'G-HEROE', 'LLAMADAALADEFENSA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (115, 28, 53, 'G-HEROE', 'PROEZA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (116, 58, 44, 'T-HEROE', 'MOVIMIENTOEVASIVO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (117, 58, 51, 'T-HEROE', 'LLAMADAALADEFENSA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (118, 58, 39, 'T-HEROE', 'MARCHAFORZADA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (119, 58, 52, 'T-HEROE', 'GESTA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (120, 58, 47, 'T-HEROE', 'EUFORIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (121, 37, 59, 'I-HEROE', 'CURACION2');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (122, 37, 56, 'I-HEROE', 'ALTOELFUEGO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (123, 37, 38, 'I-HEROE', 'SUPERIORIDADDEFENSIVA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (124, 37, 40, 'I-HEROE', 'RESISTENCIAHEROICA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (125, 37, 47, 'I-HEROE', 'EUFORIA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (126, 46, 36, 'R-HEROE', 'LIDERAZGO');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (127, 46, 37, 'R-HEROE', 'SUPERIORIDADOFENSIVA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (128, 46, 38, 'R-HEROE', 'SUPERIORIDADDEFENSIVA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (129, 46, 39, 'R-HEROE', 'MARCHAFORZADA');
INSERT INTO unidades_habilidades (id, id_unidad, id_habilidad, alias_unidad, alias_habilidad) VALUES (130, 46, 42, 'R-HEROE', 'MAESTRIA');
