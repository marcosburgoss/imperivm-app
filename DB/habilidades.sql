create table habilidades
(
    id          int auto_increment
        primary key,
    nombre      varchar(45)  null,
    descripcion varchar(300) null,
    energia     int          null,
    alias       varchar(45)  not null,
    imagen      varchar(60)  not null
);

INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (1, 'Vitalidad', 'El guerrero recupera energía más rápidamente', 0, 'VITALIDAD', 'assets/icons/habilidades/VITALIDAD.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (2, 'Ataque especial', 'Añade al valor de ataque de la unidad el doble de los puntos de energía que posee', 1, 'ATAQUEESPECIAL', 'assets/icons/habilidades/ATAQUEESPECIAL.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (3, 'Obstinación', 'Inflige un daño adicional equivalente al 10% de la salud máxima del enemigo', 1, 'OBSTINACION', 'assets/icons/habilidades/OBSTINACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (4, 'Carga', 'Es una característica de las unidades a caballo, que aumebta 8 veces la potencia de ataque de la unidad si ha permanecido más de diez segundos sin realizar un ataque', 4, 'CARGA', 'assets/icons/habilidades/CARGA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (5, 'Reanimación', 'El guerrero recupera un punto de energía por cada golpe infligido al enemigo', 0, 'REANIMACION', 'assets/icons/habilidades/REANIMACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (6, 'Desvanecimiento', 'Reduce a cero los puntos de energía del objetivo', 1, 'DESVANECIMIENTO', 'assets/icons/habilidades/DESVANECIMIENTO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (7, 'Maldición', 'Permite a la unidad echar una maldición al enemigo para que falle su próximo ataque', 1, 'MALDICION', 'assets/icons/habilidades/MALDICION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (8, 'Golpe mortal', 'La unidad acaba con el enemigo si el nivel de salud de este tras recibir el daño se encuentra por debajo del 50%. Esta característica especial no tiene efecto en héroes', 4, 'GOLPEMORTAL', 'assets/icons/habilidades/GOLPEMORTAL.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (9, 'Defensa especial', 'Añade al valor de defensa de la unidad el doble de los puntos de energía que posee. Se activa cuando una unidad es golpeada', 1, 'DEFENSAESPECIAL', 'assets/icons/habilidades/DEFENSAESPECIAL.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (10, 'Inmunidad', 'Permite a la unidad salir indemne del golpe propinado por un enemigo', 1, 'INMUNIDAD', 'assets/icons/habilidades/INMUNIDAD.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (11, 'Ataque venenoso', 'El guerrero infecta a su objetivo y le hace enfermar restándole salud máxima. El efecto de la enfermedad desaparece cuando recupera toda la salud, por ejemplo, situándose junto a un pozo', 3, 'ATAQUEVENENOSO', 'assets/icons/habilidades/ATAQUEVENENOSO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (12, 'Extenuación', 'Cada golpe certero sobre un adversario reduce la energía del enemigo en 2 puntos', 1, 'EXTENUACION', 'assets/icons/habilidades/EXTENUACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (13, 'Golpe experto', 'Elimina de un solo golpe al enemigo si este es un oponente muy inferior. No es efectivo contra héroes', 4, 'GOLPEEXPERTO', 'assets/icons/habilidades/GOLPEEXPERTO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (14, 'Ferocidad', 'La unidad recupera su nivel máximo de energía cuando derrota a un enemigo', 0, 'FEROCIDAD', 'assets/icons/habilidades/FEROCIDAD.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (15, 'Libertad', 'La unidad que la posee no puede ser vinculada a ningún pueblo', 0, 'LIBERTAD', 'assets/icons/habilidades/LIBERTAD.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (16, 'Curación', 'Los guerreros aliados reciben 20 puntos de salud más el nivel de la unidad que posee la característica especial', 1, 'CURACION', 'assets/icons/habilidades/CURACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (17, 'Encubrimiento', 'Permite a la unidad hacerse o hacer invisible a otra unidad aliada', 2, 'ENCUBRIMIENTO', 'assets/icons/habilidades/ENCUBRIMIENTO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (18, 'Vista de lince', 'Revela la posición de las unidades enemigas ocultas', 0, 'VISTADELINCE', 'assets/icons/habilidades/VISTADELINCE.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (19, 'Aprendizaje', 'El guerrero recibe un punto de experiencia por cada golpe asestado a un enemigo más experimentado', 1, 'APRENDIZAJE', 'assets/icons/habilidades/APRENDIZAJE.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (20, 'Absorción', 'La unidad recibe tantos puntos como daño ha causado en el enemigo', 1, 'ABSORCION', 'assets/icons/habilidades/ABSORCION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (21, 'Ataque experto', 'Suma el nivel de la unidad a su valor de ataque', 1, 'ATAQUEEXPERTO', 'assets/icons/habilidades/ATAQUEEXPERTO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (22, 'Contención', 'La unidad no inflige daño alguno, pero tampoco lo recibe mientras tenga energía. Cada ataque fallido consume 1 punto de energía; cada golpe infligido le proporciona 1 punto de energía', 0, 'CONTENCION', 'assets/icons/habilidades/CONTENCION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (23, 'Penetración', 'Inflige el máximo daño sin tener en cuenta el valor de defensa del enemigo', 1, 'PENETRACION', 'assets/icons/habilidades/PENETRACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (24, 'Ataque letal ', 'Si la unidad posee más del doble de puntos de salud que el enemigo y este recibe daño, será eliminado. No se puede emplear contra héroes', 4, 'ATAQUELETAL', 'assets/icons/habilidades/ATAQUELETAL.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (25, 'Furia', 'Incrementa la capacidad de ataque de la unidad que la posee en perjuicio de su propia salud. La salud que pierde se transforma en daño adicional para el enemigo. La pérdida de salud de la unidad que posee la "Furia" es limitada: nunca puede quedar por debajo del 50% de su salud máxima', 4, 'FURIA', 'assets/icons/habilidades/FURIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (26, 'Regeneración', 'La unidad recupera su salud más rápidamente', 4, 'REGENERACION', 'assets/icons/habilidades/REGENERACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (27, 'Venganza', 'Cuando la unidad es derrotada, en venganza inflige a su verdugo 100 puntos de daño', 0, 'VENGANZA', 'assets/icons/habilidades/VENGANZA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (28, 'Ocultación', 'La unidad es invisible para sus enemigos si permanece inactiva durante 10 segundos', 0, 'OCULTACION', 'assets/icons/habilidades/OCULTACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (29, 'Daño reflejado', 'Devuelve al atacante todo el daño recibido en lucha cuerpo a cuerpo', 1, 'DAÑOREFLEJADO', 'assets/icons/habilidades/DAÑOREFLEJADO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (30, 'Iniciación', 'La unidad que la posee otorga experiencia a las unidades aliadas con menos experiencia que ella', 1, 'INICIACION', 'assets/icons/habilidades/INICIACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (31, 'Resistencia ', 'Recibe 5 puntos de salud máxima', 0, 'RESISTENCIA', 'assets/icons/habilidades/RESISTENCIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (32, 'Daño expansivo ', 'La unidad que lo posee inflige daño a todos los enemigos que se encuentran a su ordenador en el campo de batalla', 0, 'DAÑOEXPANSIVO', 'assets/icons/habilidades/DAÑOEXPANSIVO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (33, 'Golpe triple', 'Triplica el daño inflligido al enemigo', 1, 'GOLPETRIPLE', 'assets/icons/habilidades/GOLPETRIPLE.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (34, 'Triunfo', 'La unidad se cura completanmente cuando derrota a un enemigo', 3, 'TRIUNFO', 'assets/icons/habilidades/TRIUNFO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (35, 'Determinación', 'Aumenta la energía del guerrero en 1 cada vez que el enemigo le golpea', 0, 'DETERMINACION', 'assets/icons/habilidades/DETERMINACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (36, 'Liderazgo', 'Por cada punto asignado a esta característica, el héroe podrá aumentar en 2 el número de unidades vinculadas a él', null, 'LIDERAZGO', 'assets/icons/habilidades/LIDERAZGO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (37, 'Superioridad ofensiva', 'Por cada punto asignado se incrementa en 1 el valor de ataque de los guerreros vinculados al héroe', null, 'SUPERIORIDADOFENSIVA', 'assets/icons/habilidades/SUPERIORIDADOFENSIVA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (38, 'Superioridad defensiva', 'Cada nuevo punto aumenta en 1 el nivel de defensa de los 
guerreros vinculados al héroe', null, 'SUPERIORIDADDEFENSIVA', 'assets/icons/habilidades/SUPERIORIDADDEFENSIVA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (39, 'Marcha forzada', 'Por cada punto asignado a esta característica se aumenta un 5% la 
velocidad de desplazamiento de las unidades vinculadas al héroe', null, 'MARCHAFORZADA', 'assets/icons/habilidades/MARCHAFORZADA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (40, 'Resistencia heroica', 'Cada punto asignado supone un aumento de 100 puntos en el valor máximo de salud del héroe', null, 'RESISTENCIAHEROICA', 'assets/icons/habilidades/RESISTENCIAHEROICA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (41, 'Vetetanía', 'Las unidades asignadas al héroe suben 2 niveles, más el número de 
puntos asignados a esta característica especial (hasta un máximo de 12)', null, 'VETERANIA', 'assets/icons/habilidades/VETERANIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (42, 'Maestría', 'Por cada punto asignado a esta característica se incrementa un 2% la 
experiencia que el héroe transfiere a los guerreros que lidera', null, 'MAESTRIA', 'assets/icons/habilidades/MAESTRIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (43, 'Ataque heroico', 'Aumenta el poder de ataque del héroe en 5 puntos por cada punto 
asignado a la característica', null, 'ATAQUEHEROICO', 'assets/icons/habilidades/ATAQUEHEROICO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (44, 'Movimiento evasivo', 'La probabilidad que tienen los guerreros de esquivar un 
ataque enemigo se eleva un 2% por punto asignado a esta característica', null, 'MOVIMIENTOEVASIVO', 'assets/icons/habilidades/MOVIMIENTOEVASIVO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (45, 'Recuperación', 'Cuando se estén alimentando, los guerreros tendrán un 10% de 
probabilidad por cada punto asignado de recibir 5 puntos adicionales de salud', null, 'RECUPERACION', 'assets/icons/habilidades/RECUPERACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (46, 'Exploración', 'Por cada punto asignado a esta característica aumenta progresivamente el campo de visión del héroe', null, 'EXPLORACION', 'assets/icons/habilidades/EXPLORACION.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (47, 'Euforia', 'Al derrotar a un rival, las unidades asignadas al héroe tienen un 10% de 
opciones de sumar 3 puntos de energía por cada punto asignado a esta característica', null, 'EUFORIA', 'assets/icons/habilidades/EUFORIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (48, 'Vigor', 'Aumenta un 10% por punto asignado la probabilidad que tienen los guerreros 
liderados por el héroe de sumar un punto de energía adicional cuando se alimentan', null, 'VIGOR', 'assets/icons/habilidades/VIGOR.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (49, 'Fidelidad', 'Cada 5 segundos el héroe toma 20 puntos de salud por cada punto 
asignado a esta característica a uno de sus guerreros, elegido al azar', null, 'FIDELIDAD', 'assets/icons/habilidades/FIDELIDAD.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (50, 'Sabiduría', 'Cuando uno de sus guerreros muere, el héroe tiene un 5% de 
probabilidades por punto asignado de sumar 1 punto de experiencia', null, 'SABIDURIA', 'assets/icons/habilidades/SABIDURIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (51, 'Llamada a la defensa', 'a Cuando se usa, incrementa durante un segundo el poder 
defensivo de las unidades en 20 puntos, más dos segundos adicionales por cada 
punto asignado a esta característica', null, 'LLAMADAALADEFENSA', 'assets/icons/habilidades/LLAMADAALADEFENSA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (52, 'Gesta', 'Cuando se emplea, permite a los guerreros superar la defensa de los 
enemigos durante un segundo, más tantos segundos adicionales como puntos 
asignados a esta característica', null, 'GESTA', 'assets/icons/habilidades/GESTA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (53, 'Proeza', 'Cuando se usa, durante 5 segundos, las unidades vinculadas al héroe 
aumentan tantos niveles como puntos asignados a esta característica', null, 'PROEZA', 'assets/icons/habilidades/PROEZA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (54, 'Supervivencia', 'Cada 5 segundos los soldados tienen un 10 % de probabilidades por 
punto asignado de recuperar su nivel máximo de salud sin alimentarse', null, 'SUPERVIVENCIA', 'assets/icons/habilidades/SUPERVIVENCIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (55, 'Carisma', 'Al emplearse suma a la energía de los guerreros 1 punto por cada punto 
asignado a esta característica', null, 'CARISMA', 'assets/icons/habilidades/CARISMA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (56, 'Alto el fuego', 'Cuando se usa, las unidades no causarán ni recibirán daño alguno 
durante tantos segundos como puntos asignados a esta característica', null, 'ALTOELFUEGO', 'assets/icons/habilidades/ALTOELFUEGO.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (57, 'Osadía', 'Al emplearla reduce a la mitad la salud y dobla el valor de ataque de las 
unidades vinculadas al héroe. Su efecto dura un segundo, más un segundo adicional 
por punto asignado', null, 'OSADIA', 'assets/icons/habilidades/OSADIA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (58, 'Acometida', 'Cuando se emplea, disminuye en 5 puntos la salud y añade 1 a la 
energía de las unidades por cada punto asignado a esta característica', null, 'ACOMETIDA', 'assets/icons/habilidades/ACOMETIDA.png');
INSERT INTO habilidades (id, nombre, descripcion, energia, alias, imagen) VALUES (59, 'Curación', 'Al emplearla devuelve a los guerreros 10 puntos de salud por cada punto 
asignado a esta característica', null, 'CURACION2', 'assets/icons/habilidades/CURACION2.png');
