const districtDict = {
    "San José": [
      "Carmen",
      "Merced",
      "Hospital",
      "Catedral",
      "Zapote",
      "San Francisco de Dos Ríos",
      "Uruca",
      "Mata Redonda",
      "Pavas",
      "Hatillo",
      "San Sebastián",
      "San José",
      "El Carmen",
      "La Merced",
      "Hospital",
      "Catedral",
      "Zapote",
      "San Francisco",
      "Uruca",
      "Mata Redonda",
      "Pavas",
      "Hatillo",
      "San Sebastián"
    ],
    "Escazú": [
      "Escazú Centro",
      "San Antonio",
      "San Rafael",
      "San Miguel",
      "San Rafael Abajo",
      "San Rafael Arriba",
      "San Antonio",
      "Escazú"
    ],
    "Desamparados": [
      "Desamparados Centro",
      "San Miguel",
      "San Juan de Dios",
      "San Rafael Arriba",
      "San Antonio",
      "Frailes",
      "Patarrá",
      "San Cristóbal",
      "Rosario",
      "Damas",
      "San Rafael Abajo",
      "Gravilias",
      "Los Guido",
      "Desamparados"
    ],
    "Puriscal": [
      "Santiago",
      "Mercedes Sur",
      "Barbacoas",
      "Grifo Alto",
      "San Rafael",
      "Candelarita",
      "Desamparaditos",
      "San Antonio",
      "Chires",
      "La Palma",
      "Santiago",
      "Mercedes Sur",
      "Barbacoas",
      "Grifo Alto",
      "San Rafael",
      "Candelarita",
      "Desamparaditos",
      "San Antonio",
      "Chires",
      "La Palma"
    ],
    "Tarrazú": [
      "San Marcos",
      "San Lorenzo",
      "San Carlos"
      // Agrega los demás distritos de Tarrazú
    ],
    "Aserrí": [
      "Aserrí",
      "Tarbaca",
      "Vuelta de Jorco",
      "San Gabriel",
      "Legua",
      "Monterrey",
      "Salitrillos"
      // Agrega los demás distritos de Aserrí
    ],
    "Mora": [
      "Colón",
      "Guayabo",
      "Tabarcia",
      "Piedras Negras",
      "Picagres",
      "Jaris",
      "Quitirrisí"
      // Agrega los demás distritos de Mora
    ],
    "Goicoechea": [
      "Goicoechea",
      "San Francisco",
      "Calle Blancos",
      "Mata de Plátano",
      "Ipís",
      "Rancho Redondo",
      "Purral"
      // Agrega los demás distritos de Goicoechea
    ],
    "Santa Ana": [
      "Santa Ana",
      "Salitral",
      "Pozos",
      "Uruca",
      "Piedades",
      "Brasil"
      // Agrega los demás distritos de Santa Ana
    ],
    "Alajuelita": [
      "Alajuelita",
      "San Josecito",
      "San Antonio",
      "Concepción",
      "San Felipe"
      // Agrega los demás distritos de Alajuelita
    ],
    "Vázquez de Coronado": [
      "San Isidro",
      "San Rafael",
      "Dulce Nombre de Jesús",
      "Patalillo",
      "Cascajal"
      // Agrega los demás distritos de Vázquez de Coronado
    ],
    "Acosta": [
      "San Ignacio",
      "Guaitil",
      "Palmichal",
      "Cangrejal",
      "Sabanillas"
      // Agrega los demás distritos de Acosta
    ],
    "Tibás": [
      "San Juan",
      "Cinco Esquinas",
      "Anselmo Llorente",
      "León XIII",
      "Colima"
      // Agrega los demás distritos de Tibás
    ],
    "Moravia": [
      "San Vicente",
      "San Jerónimo",
      "La Trinidad"
      // Agrega los demás distritos de Moravia
    ],
    "Montes de Oca": [
      "San Pedro",
      "Sabanilla",
      "Mercedes",
      "San Rafael"
      // Agrega los demás distritos de Montes de Oca
    ],
    "Turrubares": [
      "San Pablo",
      "San Pedro",
      "San Juan de Mata",
      "San Luis",
      "Carara"
      // Agrega los demás distritos de Turrubares
    ],
    "Dota": [
      "Santa María",
      "Jardín",
      "Copey"
      // Agrega los demás distritos de Dota
    ],
    "Curridabat": [
      "Curridabat",
      "Granadilla",
      "Sánchez",
      "Tirrases"
      // Agrega los demás distritos de Curridabat
    ],
    "Pérez Zeledón": [
      "San Isidro de El General",
      "El General",
      "Daniel Flores",
      "Rivas",
      "San Pedro",
      "Platanares",
      "Pejibaye",
      "Cajón",
      "Barú",
      "Río Nuevo",
      "Páramo",
      "La Amistad"
      // Agrega los demás distritos de Pérez Zeledón
    ],
    "León Cortés Castro": [
      "San Pablo",
      "San Andrés",
      "Llano Bonito",
      "San Isidro",
      "Santa Cruz",
      "San Antonio"
      // Agrega los demás distritos de León Cortés Castro
    ],
    "Alajuela": [
      "Alajuela",
      "San José",
      "Carrizal",
      "San Antonio",
      "Guácima",
      "San Isidro",
      "Sabanilla",
      "San Rafael",
      "Río Segundo",
      "Desamparados",
      "Turrúcares",
      "Tambor",
      "La Garita",
      "Sarapiquí"
      // Agrega los demás distritos de Alajuela
    ],
    "San Ramón": [
      "San Ramón",
      "Santiago",
      "San Juan",
      "Piedades Norte",
      "Piedades Sur",
      "San Rafael",
      "San Isidro",
      "Ángeles",
      "Alfaro",
      "Volio",
      "Concepción",
      "Zapotal",
      "Peñas Blancas",
      "San Lorenzo"
      // Agrega los demás distritos de San Ramón
    ],
    "Grecia": [
      "Grecia",
      "San Isidro",
      "San José",
      "San Roque",
      "Tacares",
      "Río Cuarto",
      "Puente de Piedra",
      "Bolívar"
      // Agrega los demás distritos de Grecia
    ],
    "San Mateo": [
      "San Mateo",
      "Desmonte",
      "Jesús María",
      "Labrador"
      // Agrega los demás distritos de San Mateo
    ],
    "Atenas": [
      "Atenas",
      "Jesús",
      "Mercedes",
      "San Isidro",
      "Concepción",
      "San José",
      "Santa Eulalia",
      "Escobal"
      // Agrega los demás distritos de Atenas
    ],
    "Naranjo": [
      "Naranjo",
      "San Miguel",
      "San José",
      "Cirrí Sur",
      "San Jerónimo",
      "San Juan",
      "El Rosario",
      "Palmitos"
      // Agrega los demás distritos de Naranjo
    ],
    "Palmares": [
      "Palmares",
      "Zaragoza",
      "Buenos Aires",
      "Santiago",
      "Candelaria",
      "Esquipulas",
      "La Granja"
      // Agrega los demás distritos de Palmares
    ],
    "Poás": [
      "San Pedro",
      "San Juan",
      "San Rafael",
      "Carrillos",
      "Sabana Redonda"
      // Agrega los demás distritos de Poás
    ],
    "Orotina": [
      "Orotina",
      "Mastate",
      "Hacienda Vieja",
      "Coyolar",
      "La Ceiba"
      // Agrega los demás distritos de Orotina
    ],
    "San Carlos": [
      "Quesada",
      "Florencia",
      "Buenavista",
      "Aguas Zarcas",
      "Venecia",
      "Pital",
      "La Fortuna",
      "La Tigra",
      "La Palmera",
      "Venado",
      "Cutris",
      "Monterrey",
      "Pocosol"
      // Agrega los demás distritos de San Carlos
    ],
    "Zarcero": [
      "Zarcero",
      "Laguna",
      "Tapesco",
      "Guadalupe",
      "Palmira",
      "Zapote",
      "Brisas"
      // Agrega los demás distritos de Zarcero
    ],
    "Valverde Vega": [
      "Sarchí Norte",
      "Sarchí Sur",
      "Toro Amarillo",
      "San Pedro",
      "Rodríguez"
      // Agrega los demás distritos de Valverde Vega
    ],
    "Upala": [
      "Upala",
      "Aguas Claras",
      "San José (Pizote)",
      "Bijagua",
      "Delicias",
      "Dos Ríos",
      "Yolillal"
      // Agrega los demás distritos de Upala
    ],
    "Los Chiles": [
      "Los Chiles",
      "Caño Negro",
      "El Amparo",
      "San Jorge"
      // Agrega los demás distritos de Los Chiles
    ],
    "Guatuso": [
      "San Rafael",
      "Buenavista",
      "Cote",
      "Katira"
      // Agrega los demás distritos de Guatuso
    ],
    "Río Cuarto": [
      "Santa Rita",
      "Río Cuarto",
      "Santa Isabel",
      "Concepción"
      // Agrega los demás distritos de Río Cuarto
    ],
    "Heredia": [
      "Heredia",
      "Mercedes",
      "San Francisco",
      "Ulloa",
      "Vara Blanca",
      "Santa Bárbara",
      "San Rafael",
      "San Isidro",
      "Belén",
      "Flores",
      "San Joaquín"
    ],
    "Barva": [
      "Barva",
      "San Pedro",
      "San Pablo",
      "San Roque",
      "Santa Lucía",
      "San José de la Montaña"
    ],
    "Santo Domingo": [
      "Santo Domingo",
      "San Vicente",
      "San Miguel",
      "Paracito",
      "Santo Tomás",
      "Santa Rosa",
      "Tures"
    ],
    "Santa Bárbara": [
      "Santa Bárbara",
      "San Pedro",
      "San Juan",
      "Jesús",
      "Santo Domingo",
      "Purabá",
      "Rincón de Sabanilla"
    ],
    "San Rafael": [
      "San Rafael",
      "San Josecito",
      "Santiago",
      "Los Ángeles",
      "Concepción"
    ],
    "San Isidro": [
      "San Isidro",
      "San José",
      "Concepción",
      "San Francisco"
    ],
    "Belén": [
      "San Antonio",
      "La Ribera",
      "La Asunción"
    ],
    "Flores": [
      "San Joaquín",
      "Barrantes",
      "Llorente"
    ],
    "San Pablo": [
      "San Pablo",
      "Rincón de Sabanilla"
    ],
    "Sarapiquí": [
      "Puerto Viejo",
      "La Virgen",
      "Horquetas",
      "Llanuras del Gaspar",
      "Cureña"
    ],
    "Cartago": [
      "Oriental",
      "Occidental",
      "Carmen",
      "San Nicolás",
      "Agua Caliente",
      "Guadalupe",
      "Corralillo",
      "Tierra Blanca",
      "Dulce Nombre",
      "Llano Grande",
      "Quebradilla"
    ],
    "Paraíso": [
      "Paraíso",
      "Santiago",
      "Orosi",
      "Cachí",
      "Llanos de Santa Lucía"
    ],
    "La Unión": [
      "Tres Ríos",
      "San Diego",
      "San Juan",
      "San Rafael",
      "Concepción",
      "Dulce Nombre",
      "San Ramón",
      "Río Azul"
    ],
    "Jiménez": [
      "Juan Viñas",
      "Tucurrique",
      "Pejibaye"
    ],
    "Turrialba": [
      "Turrialba",
      "La Suiza",
      "Peralta",
      "Santa Cruz",
      "Santa Teresita",
      "Pavones",
      "Tuis",
      "Tayutic",
      "Santa Rosa",
      "Tres Equis",
      "La Isabel",
      "Chirripó"
    ],
    "Alvarado": [
      "Pacayas",
      "Cervantes",
      "Capellades"
    ],
    "Oreamuno": [
      "San Rafael",
      "Cot",
      "Potrero Cerrado",
      "Cipreses",
      "Santa Rosa"
    ],
    "El Guarco": [
      "El Tejar",
      "San Isidro",
      "Tobosi",
      "Patio de Agua"
    ],
    "Liberia": [
      "Liberia",
      "Cañas Dulces",
      "Mayorga",
      "Nacascolo",
      "Curubandé"
    ],
    "Nicoya": [
      "Nicoya",
      "Mansión",
      "San Antonio",
      "Quebrada Honda",
      "Sámara",
      "Nosara",
      "Belén de Nosarita"
    ],
    "Santa Cruz": [
      "Santa Cruz",
      "Bolsón",
      "Veintisiete de Abril",
      "Tempate",
      "Cartagena",
      "Cuajiniquil",
      "Diriá",
      "Cabo Velas",
      "Tamarindo"
    ],
    "Bagaces": [
      "Bagaces",
      "La Fortuna",
      "Mogote",
      "Río Naranjo"
    ],
    "Carrillo": [
      "Filadelfia",
      "Palmira",
      "Sardinal",
      "Belén"
    ],
    "Cañas": [
      "Cañas",
      "Palmira",
      "San Miguel",
      "Bebedero",
      "Porozal"
    ],
    "Abangares": [
      "Las Juntas",
      "Sierra",
      "San Juan",
      "Colorado"
    ],
    "Tilarán": [
      "Tilarán",
      "Quebrada Grande",
      "Tronadora",
      "Santa Rosa",
      "Líbano",
      "Tierras Morenas",
      "Arenal"
    ],
    "Nandayure": [
      "Carmona",
      "Santa Rita",
      "Zapotal",
      "San Pablo",
      "Porvenir",
      "Bejuco"
    ],
    "La Cruz": [
      "La Cruz",
      "Santa Cecilia",
      "La Garita",
      "Santa Elena"
    ],
    "Hojancha": [
      "Hojancha",
      "Monte Romo",
      "Puerto Carrillo",
      "Huacas",
      "Matambú"
    ],
    "Limón": [
      "Limón",
      "Valle La Estrella",
      "Río Blanco",
      "Matama"
    ],
    "Pococí": [
      "Guápiles",
      "Jiménez",
      "Rita",
      "Roxana",
      "Cariari",
      "Colorado",
      "La Colonia",
      "Dos Aguas",
      "Las Delicias",
      "Barrantes",
      "La Rita"
    ],
    "Siquirres": [
      "Siquirres",
      "Pacuarito",
      "Florida",
      "Germania",
      "Cairo",
      "Alegría"
    ],
    "Talamanca": [
      "Bratsi",
      "Sixaola",
      "Cahuita",
      "Telire"
    ],
    "Matina": [
      "Matina",
      "Batán",
      "Carrandí",
      "Guácimo"
    ],
    "Guácimo": [
      "Guácimo",
      "Mercedes",
      "Pocora",
      "Río Jiménez",
      "Duacarí"
    ],
    "Pococí": [
      "Guápiles",
      "Jiménez",
      "Rita",
      "Roxana",
      "Cariari",
      "Colorado",
      "La Colonia",
      "Dos Aguas",
      "Las Delicias",
      "Barrantes",
      "La Rita"
    ],
    "Talamanca": [
      "Bratsi",
      "Sixaola",
      "Cahuita",
      "Telire"
    ],
    "Puntarenas": [
      "Puntarenas",
      "Pitahaya",
      "Chomes",
      "Lepanto",
      "Paquera",
      "Manzanillo",
      "Guacimal",
      "Barranca",
      "Monteverde",
      "Isla del Coco"
    ],
    "Esparza": [
      "Espíritu Santo",
      "San Juan Grande",
      "Macacona",
      "San Rafael",
      "San Jerónimo",
      "Caldera"
    ],
    "Buenos Aires": [
      "Buenos Aires",
      "Volcán",
      "Potrero Grande",
      "Boruca",
      "Pilas",
      "Colinas",
      "Chánguena",
      "Biolley",
      "Brunka"
    ],
    "Montes de Oro": [
      "Miramar",
      "La Unión",
      "San Isidro"
    ],
    "Osa": [
      "Cortés",
      "Palmar",
      "Sierpe",
      "Bahía Ballena",
      "Piedras Blancas",
      "Bahía Drake"
    ],
    "Aguirre": [
      "Quepos",
      "Savegre",
      "Naranjito"
    ],
    "Golfito": [
      "Golfito",
      "Puerto Jiménez",
      "Guaycará",
      "Pavón"
    ],
    "Coto Brus": [
      "San Vito",
      "Sabalito",
      "Aguabuena",
      "Limoncito",
      "Pittier"
    ],
    "Parrita": [
      "Parrita"
    ],
    "Corredores": [
      "Corredor",
      "La Cuesta",
      "Canoas",
      "Laurel"
    ],
    "Garabito": [
      "Jacó",
      "Tárcoles"
    ]
  };
  

export { districtDict };