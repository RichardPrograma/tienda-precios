const productos = [

  {"id":1,"nombre":"Coca-Cola vidrio chica","precio":21,"categoria":"Refrescos","alias":["coca","coca cola","vidrio","chica","refresco","refrescos"]},

  {"id":2,"nombre":"Coca-Cola plástico chica","precio":13,"categoria":"Refrescos","alias":["coca","coca cola","plastico","plástico","chica","refresco","refrescos"]},

  {"id":3,"nombre":"Refresco de sabores chico","precio":13,"categoria":"Refrescos","alias":["sabores","refresco","refrescos","chico","sprite","mundet","sidral mundet","manzana","manzanita","fanta","fresca","delaware","delaware punch","uva"]},

  {"id":4,"nombre":"Coca-Cola lata","precio":29,"categoria":"Refrescos","alias":["coca","coca cola","lata","refresco","refrescos"]},

  {"id":5,"nombre":"Electrolit","precio":28,"categoria":"Bebidas","alias":["electrolit","suero","hidratante","bebida","bebidas"]},

  {"id":6,"nombre":"Coca-Cola taparrosca","precio":25,"categoria":"Refrescos","alias":["coca","coca cola","taparrosca","tapa rosca","refresco","refrescos"]},

  {"id":7,"nombre":"Refresco de sabores 600 ml","precio":23,"categoria":"Refrescos","alias":["sabores","600","600 ml","refresco","refrescos","sprite","mundet","sidral mundet","manzana","manzanita","fanta","fresca","delaware","delaware punch","uva"]},

  {"id":8,"nombre":"Coca-Cola 3 L","precio":null,"categoria":"Refrescos","alias":["coca","coca cola","3l","3 litros","refresco","refrescos"]},

  {"id":9,"nombre":"Coca-Cola 2.5 L","precio":null,"categoria":"Refrescos","alias":["coca","coca cola","2.5l","2 5 litros","refresco","refrescos"]},

  {"id":10,"nombre":"Coca-Cola 1.25 L","precio":33,"categoria":"Refrescos","alias":["coca","coca cola","1.25l","1 25 litros","refresco","refrescos"]},

  {"id":11,"nombre":"Gatorade","precio":28,"categoria":"Bebidas","alias":["gatorade","hidratante","deportiva","bebida","bebidas"]},

  {"id":12,"nombre":"Powerade","precio":28,"categoria":"Bebidas","alias":["power","powerade","hidratante","deportiva","bebida","bebidas"]},

  {"id":13,"nombre":"Del Valle durazno","precio":null,"categoria":"Jugos","alias":["valle","del valle","durazno","jugo","jugos"]},

  {"id":14,"nombre":"Jugo en caja","precio":13,"categoria":"Jugos","alias":["jugo","jugos","caja","juguito"]},

  {"id":15,"nombre":"Boing caja","precio":20,"categoria":"Jugos","alias":["boing","jugo","jugos","caja"]},

  {"id":16,"nombre":"Lechita","precio":15,"categoria":"Lácteos","alias":["lechita","leche","lacteo","lacteos"]},

  {"id":17,"nombre":"Arizona","precio":23,"categoria":"Bebidas","alias":["arizona","te","bebida","bebidas"]},

  {"id":18,"nombre":"Viña","precio":30,"categoria":"Bebidas","alias":["viña","vina","bebida","bebidas"]},

  {"id":19,"nombre":"BioDrink","precio":null,"categoria":"Bebidas","alias":["biodrink","bio drink","bebida","bebidas"]},

  {"id":20,"nombre":"New Mix","precio":30,"categoria":"Bebidas","alias":["new mix","newmix","bebida","bebidas"]},

  {"id":21,"nombre":"Caballitos","precio":30,"categoria":"Refrescos","alias":["caballitos","caballito","cabrito","refresco","refrescos"]},

  {"id":22,"nombre":"Monster","precio":43,"categoria":"Energéticas","alias":["monster","energia","energizante","energetica","energeticas","bebida"]},

  {"id":23,"nombre":"Volt","precio":24,"categoria":"Energéticas","alias":["volt","energia","energizante","energetica","energeticas","bebida"]},

  {"id":24,"nombre":"Amper","precio":24,"categoria":"Energéticas","alias":["amper","energia","energizante","energetica","energeticas","bebida"]},

  {"id":25,"nombre":"Pepsi 600 ml","precio":22,"categoria":"Refrescos","alias":["pepsi","600","refresco","refrescos"]},

  {"id":26,"nombre":"Coca-Cola 600 ml","precio":22,"categoria":"Refrescos","alias":["coca","coca cola","600","refresco","refrescos"]},

  {"id":27,"nombre":"Aga de Manzana","precio":22,"categoria":"Refrescos","alias":["manzana","manzanita","aga","refresco","refrescos"]},

  {"id":28,"nombre":"Caribe","precio":30,"categoria":"Bebidas","alias":["caribe","bebida","bebidas"]},

  {"id":29,"nombre":"Del Valle vidrio","precio":22,"categoria":"Jugos","alias":["valle","del valle","vidrio","jugo","jugos"]},

  {"id":30,"nombre":"Red Cola 600 ml","precio":21,"categoria":"Refrescos","alias":["red cola","redcola","600","refresco","refrescos"]},

  {"id":31,"nombre":"Topo Chico vidrio","precio":22,"categoria":"Refrescos","alias":["topo","topo chico","vidrio","agua mineral","refresco","refrescos"]},

  {"id":32,"nombre":"Topo Chico plástico","precio":28,"categoria":"Refrescos","alias":["topo","topo chico","plastico","plástico","agua mineral","refresco","refrescos"]},

  {"id":33,"nombre":"7UP","precio":22,"categoria":"Refrescos","alias":["7up","7 up","seven up","refresco","refrescos"]},

  {"id":34,"nombre":"Zubba","precio":22,"categoria":"Refrescos","alias":["zubba","zuba","uva","refresco","refrescos"]},

  {"id":35,"nombre":"Vive 100","precio":15,"categoria":"Energéticas","alias":["vive 100","vive100","energia","energizante","energetica","energeticas","bebida"]},

  {"id":36,"nombre":"Squirt","precio":22,"categoria":"Refrescos","alias":["squirt","refresco","refrescos"]},

  {"id":37,"nombre":"Fuze Tea","precio":22,"categoria":"Bebidas","alias":["fuzetea","fuze tea","te","bebida","bebidas"]},

  {"id":38,"nombre":"Peñafiel","precio":24,"categoria":"Refrescos","alias":["peñafiel","penafiel","agua mineral","refresco","refrescos"]},

  {"id":39,"nombre":"Peñafiel Twist","precio":24,"categoria":"Refrescos","alias":["peñafiel","penafiel","twist","refresco","refrescos"]},

  {"id":40,"nombre":"Pepsi 3 L","precio":null,"categoria":"Refrescos","alias":["pepsi","3l","3 litros","refresco","refrescos"]},

  {"id":41,"nombre":"Pepsi 2.5 L","precio":null,"categoria":"Refrescos","alias":["pepsi","2.5l","2 5 litros","refresco","refrescos"]},

  {"id":42,"nombre":"Refresco de sabores 1.5 L","precio":27,"categoria":"Refrescos","alias":["sabores","1.5l","1 5 litros","refresco","refrescos","sprite","mundet","sidral mundet","manzana","manzanita","fanta","fresca","delaware","delaware punch","uva"]},

  {"id":43,"nombre":"Papel","precio":14,"categoria":"Higiene y otros","alias":["papel","higiene","otros"]},

  {"id":44,"nombre":"Toalla nocturna","precio":6,"categoria":"Higiene y otros","alias":["toalla","nocturna","femenina","higiene"]},

  {"id":45,"nombre":"Toalla invisible","precio":5,"categoria":"Higiene y otros","alias":["toalla","invisible","femenina","higiene"]},

  {"id":46,"nombre":"Protector","precio":3,"categoria":"Higiene y otros","alias":["protector","femenino","higiene"]},

  {"id":47,"nombre":"Bolsa de dulces","precio":17,"categoria":"Dulces","alias":["bolsa","dulces","dulce"]},

  {"id":48,"nombre":"Encendedor BIC","precio":25,"categoria":"Encendedores y rastrillos","alias":["encendedor","encendedores","bic","fuego"]},

  {"id":49,"nombre":"Encendedor chico","precio":14,"categoria":"Encendedores y rastrillos","alias":["encendedor","encendedores","chico","fuego"]},

  {"id":50,"nombre":"Rastrillo económico","precio":16,"categoria":"Encendedores y rastrillos","alias":["rastrillo","rastrillos","economico","económico","afeitar"]},

  {"id":51,"nombre":"Rastrillo Gillette","precio":25,"categoria":"Encendedores y rastrillos","alias":["rastrillo","rastrillos","gillette","afeitar"]},

  {"id":52,"nombre":"Rastrillo BIC","precio":22,"categoria":"Encendedores y rastrillos","alias":["rastrillo","rastrillos","bic","afeitar"]},

  {"id":53,"nombre":"Marlboro","precio":8,"categoria":"Cigarros","alias":["marlboro","cigarro","cigarros","tabaco"]},

  {"id":54,"nombre":"Pall Mall","precio":6,"categoria":"Cigarros","alias":["pall mall","pallmall","cigarro","cigarros"]},

  {"id":55,"nombre":"Pall Mall sabor","precio":7,"categoria":"Cigarros","alias":["pall mall","pallmall","sabor","cigarro","cigarros"]},

  {"id":56,"nombre":"Cigarro económico","precio":4,"categoria":"Cigarros","alias":["economico","económico","cigarro","cigarros"]},

  {"id":57,"nombre":"Shots","precio":5,"categoria":"Cigarros","alias":["shots","cigarro","cigarros"]},

  {"id":58,"nombre":"Lucky","precio":5,"categoria":"Cigarros","alias":["lucky","cigarro","cigarros"]},

  {"id":59,"nombre":"Danone","precio":null,"categoria":"Lácteos","alias":["danone","yogurt","lacteo","lacteos"]},

  {"id":60,"nombre":"DanUp chico","precio":null,"categoria":"Lácteos","alias":["danup","dan up","chico","yogurt","lacteo","lacteos"]},

  {"id":61,"nombre":"DanUp grande","precio":null,"categoria":"Lácteos","alias":["danup","dan up","grande","yogurt","lacteo","lacteos"]},

  {"id":62,"nombre":"BeneGastro","precio":null,"categoria":"Lácteos","alias":["benegastro","bene gastro","yogurt","lacteo","lacteos"]},

  {"id":63,"nombre":"Activia","precio":null,"categoria":"Lácteos","alias":["activia","yogurt","lacteo","lacteos"]},

  {"id":64,"nombre":"Oikos Pro","precio":null,"categoria":"Lácteos","alias":["oikos","oikos pro","yogurt","lacteo","lacteos"]},

  {"id":65,"nombre":"Nescafé Black","precio":null,"categoria":"Bebidas","alias":["nescafe","cafe","café","black","bebida","bebidas"]},

  {"id":66,"nombre":"Café Olé","precio":null,"categoria":"Bebidas","alias":["cafe ole","café olé","cafe","café","bebida","bebidas"]},

  {"id":67,"nombre":"Danone Mix","precio":null,"categoria":"Lácteos","alias":["danone","mix","yogurt","lacteo","lacteos"]},

  {"id":68,"nombre":"Yogurt griego fresa","precio":null,"categoria":"Lácteos","alias":["griego","fresa","yogurt","lacteo","lacteos","friego fresa"]},

  {"id":69,"nombre":"Danonino Lunch","precio":null,"categoria":"Lácteos","alias":["danonino","lunch","yogurt","lacteo","lacteos"]},

  {"id":70,"nombre":"Dany bebible","precio":null,"categoria":"Lácteos","alias":["dany","bebible","yogurt","lacteo","lacteos"]},

  {"id":71,"nombre":"Alpura","precio":null,"categoria":"Lácteos","alias":["alpura","leche","lacteo","lacteos"]},

  {"id":72,"nombre":"Alpura deslactosada","precio":null,"categoria":"Lácteos","alias":["alpura","deslactosada","leche","lacteo","lacteos"]},

  {"id":73,"nombre":"Santa Clara","precio":null,"categoria":"Lácteos","alias":["santa clara","leche","lacteo","lacteos"]},

  {"id":74,"nombre":"Nutri","precio":null,"categoria":"Lácteos","alias":["nutri","leche","lacteo","lacteos"]},

  {"id":75,"nombre":"Kinder Délice","precio":null,"categoria":"Dulces","alias":["kinder","delice","délice","dulce","dulces","pastelito"]},

  {"id":76,"nombre":"Kinder Chocolate barra chica","precio":8,"categoria":"Dulces","alias":["kinder","chocolate","barra","chica","dulce","dulces"]},

  {"id":77,"nombre":"Kinder Maxi","precio":13,"categoria":"Dulces","alias":["kinder","maxi","chocolate","barra","dulce","dulces"]},

  {"id":78,"nombre":"Kinder Bueno","precio":24,"categoria":"Dulces","alias":["kinder","bueno","chocolate","dulce","dulces"]},

  {"id":79,"nombre":"Huevo Kinder","precio":26,"categoria":"Dulces","alias":["kinder","huevo","sorpresa","dulce","dulces","chocolate"]},

  {"id":80,"nombre":"Sabritas","precio":23,"categoria":"Botanas","alias":["sabritas","papas","papitas","botana","botanas","fritura"]},

  {"id":81,"nombre":"Doritos","precio":23,"categoria":"Botanas","alias":["doritos","papas","papitas","botana","botanas","fritura"]},

  {"id":82,"nombre":"Ruffles","precio":23,"categoria":"Botanas","alias":["ruffles","papas","papitas","botana","botanas","fritura"]},

  {"id":83,"nombre":"Cheetos","precio":19,"categoria":"Botanas","alias":["cheetos","papas","papitas","botana","botanas","fritura"]},

  {"id":84,"nombre":"Tostitos","precio":20,"categoria":"Botanas","alias":["tostitos","papas","papitas","botana","botanas","fritura"]},

  {"id":85,"nombre":"Chicharrón","precio":20,"categoria":"Botanas","alias":["chicharron","chicharrón","botana","botanas","fritura"]},

  {"id":86,"nombre":"Fritos","precio":19,"categoria":"Botanas","alias":["fritos","papas","papitas","botana","botanas","fritura"]},

  {"id":87,"nombre":"Rancheritos","precio":19,"categoria":"Botanas","alias":["rancheritos","papas","papitas","botana","botanas","fritura"]},

  {"id":88,"nombre":"Churrumais","precio":19,"categoria":"Botanas","alias":["churrumais","papas","papitas","botana","botanas","fritura"]},

  {"id":89,"nombre":"Crujitos","precio":19,"categoria":"Botanas","alias":["crujitos","papas","papitas","botana","botanas","fritura"]},

  {"id":90,"nombre":"Bolzaza","precio":29,"categoria":"Botanas","alias":["bolzaza","bolsa","botana","botanas","papas","papitas"]},

  {"id":91,"nombre":"Papas grandes","precio":47,"categoria":"Botanas","alias":["papas","papitas","grandes","papas grandes","sabritas grandes","doritos grandes","ruffles grandes","botana","botanas","fritura"]},

  {"id":92,"nombre":"Sabritones","precio":null,"categoria":"Botanas","alias":["sabritones","papas","papitas","botana","botanas","fritura"]},

  {"id":93,"nombre":"Paquetaxo","precio":27,"categoria":"Botanas","alias":["paquetaxo","papas","papitas","botana","botanas","fritura"]},

  {"id":94,"nombre":"Cacahuates chicos","precio":15,"categoria":"Botanas","alias":["cacahuates","cacahuate","chicos","botana","botanas"]},

  {"id":95,"nombre":"Cacahuates grandes","precio":20,"categoria":"Botanas","alias":["cacahuates","cacahuate","grandes","botana","botanas"]},

  {"id":96,"nombre":"Cacahuates sabores","precio":18,"categoria":"Botanas","alias":["cacahuates","cacahuate","sabores","botana","botanas"]},

  {"id":97,"nombre":"Maruchan sin cocer","precio":22,"categoria":"Comida","alias":["maruchan","sopa","ramen","instantanea","instantánea","sin cocer","comida"]},

  {"id":98,"nombre":"Maruchan cocida","precio":32,"categoria":"Comida","alias":["maruchan","sopa","ramen","instantanea","instantánea","cocida","hecha","comida"]},

  {"id":99,"nombre":"Huevo (pieza)","precio":6,"categoria":"Comida","alias":["huevo","pieza","comida"]},

  {"id":100,"nombre":"Valentina","precio":2,"categoria":"Comida","alias":["valentina","salsa","picante","comida"]},

  {"id":101,"nombre":"Limón","precio":5,"categoria":"Comida","alias":["limon","limón","comida"]},

  {"id":102,"nombre":"Maggi","precio":2,"categoria":"Comida","alias":["maggi","salsa","sazonador","comida"]},

  {"id":103,"nombre":"Agua Arbolito chica","precio":20,"categoria":"Aguas","alias":["arbolito","agua","aguas","chica"]},

  {"id":104,"nombre":"Agua Arbolito grande","precio":35,"categoria":"Aguas","alias":["arbolito","agua","aguas","grande"]},

  {"id":105,"nombre":"E-pura 1 L","precio":18,"categoria":"Aguas","alias":["epura","e pura","agua","aguas","1l","1 litro"]},

  {"id":106,"nombre":"E-pura 1.5 L","precio":23,"categoria":"Aguas","alias":["epura","e pura","agua","aguas","1.5l","1 5 litros"]},

  {"id":107,"nombre":"Bonafont 1 L","precio":18,"categoria":"Aguas","alias":["bonafont","agua","aguas","1l","1 litro"]},

  {"id":108,"nombre":"Bonafont 1.5 L","precio":23,"categoria":"Aguas","alias":["bonafont","agua","aguas","1.5l","1 5 litros"]},

  {"id":109,"nombre":"Skarch mini","precio":10,"categoria":"Aguas","alias":["skarch","agua","aguas","mini"]},

  {"id":110,"nombre":"Skarch chica","precio":14,"categoria":"Aguas","alias":["skarch","agua","aguas","chica"]},

  {"id":111,"nombre":"Skarch 1 L","precio":18,"categoria":"Aguas","alias":["skarch","agua","aguas","1l","1 litro"]},

  {"id":112,"nombre":"Skarch 1.5 L","precio":23,"categoria":"Aguas","alias":["skarch","agua","aguas","1.5l","1 5 litros"]},

  {"id":113,"nombre":"Yakult","precio":11,"categoria":"Lácteos","alias":["yakult","lacteo","lacteos","bebida"]},

  {"id":114,"nombre":"Michelada chica","precio":50,"categoria":"Cervezas","alias":["michelada","micheladas","miche","chica","cerveza","cervezas","cheve"]},

  {"id":115,"nombre":"Michelada grande","precio":90,"categoria":"Cervezas","alias":["michelada","micheladas","miche","grande","cerveza","cervezas","cheve"]},

  {"id":116,"nombre":"Victoria latón","precio":33,"categoria":"Cervezas","alias":["victoria","laton","latón","cerveza","cervezas","cheve"]},

  {"id":117,"nombre":"Modelo latón","precio":33,"categoria":"Cervezas","alias":["modelo","laton","latón","cerveza","cervezas","cheve"]},

  {"id":118,"nombre":"Corona latón","precio":33,"categoria":"Cervezas","alias":["corona","laton","latón","cerveza","cervezas","cheve"]},

  {"id":119,"nombre":"Estrella","precio":33,"categoria":"Cervezas","alias":["estrella","cerveza","cervezas","cheve"]},

  {"id":120,"nombre":"Modelo chica","precio":27,"categoria":"Cervezas","alias":["modelo","chica","cerveza","cervezas","cheve"]},

  {"id":121,"nombre":"Tecate","precio":33,"categoria":"Cervezas","alias":["tecate","cerveza","cervezas","cheve"]},

  {"id":122,"nombre":"Corona Light","precio":27,"categoria":"Cervezas","alias":["corona","light","cerveza","cervezas","cheve"]},

  {"id":123,"nombre":"Corona Cero","precio":27,"categoria":"Cervezas","alias":["corona","cero","sin alcohol","cerveza","cervezas","cheve"]},

  {"id":124,"nombre":"Michelob Ultra","precio":27,"categoria":"Cervezas","alias":["ultra","michelob","cerveza","cervezas","cheve"]},

  {"id":125,"nombre":"Sol Clamato","precio":33,"categoria":"Cervezas","alias":["sol","clamato","cerveza","cervezas","cheve"]},

  {"id":126,"nombre":"Heineken Cero","precio":27,"categoria":"Cervezas","alias":["heineken","cero","sin alcohol","cerveza","cervezas","cheve"]},

  {"id":127,"nombre":"Heineken latón","precio":33,"categoria":"Cervezas","alias":["heineken","laton","latón","cerveza","cervezas","cheve"]},

  {"id":128,"nombre":"Modelo Negra","precio":27,"categoria":"Cervezas","alias":["modelo","negra","modelo negra","cerveza","cervezas","cheve"]},

  {"id":129,"nombre":"Victoria vidrio","precio":27,"categoria":"Cervezas","alias":["victoria","vidrio","cerveza","cervezas","cheve"]},

  {"id":130,"nombre":"Corona vidrio","precio":27,"categoria":"Cervezas","alias":["corona","vidrio","cerveza","cervezas","cheve"]},

  {"id":131,"nombre":"Estrella vidrio","precio":27,"categoria":"Cervezas","alias":["estrella","vidrio","cerveza","cervezas","cheve"]},

  {"id":132,"nombre":"Mega","precio":47,"categoria":"Cervezas","alias":["mega","caguama","caguamas","cerveza","cervezas","cheve"]},

  {"id":133,"nombre":"Familiar","precio":57,"categoria":"Cervezas","alias":["familiar","caguama","caguamas","cerveza","cervezas","cheve"]},

  {"id":134,"nombre":"Barrilito","precio":20,"categoria":"Cervezas","alias":["barrilito","cerveza","cervezas","cheve"]},

  {"id":135,"nombre":"Chicle Orbit 4 pastillas","precio":4,"categoria":"Chicles","alias":["orbit","chicle","chicles","4 pastillas","dulce","dulces"]},

  {"id":136,"nombre":"Chicle Trident 4 pastillas","precio":4,"categoria":"Chicles","alias":["trident","chicle","chicles","4 pastillas","dulce","dulces"]},

  {"id":137,"nombre":"Paquete de chicle americano","precio":13,"categoria":"Chicles","alias":["americano","chicle","chicles","paquete","dulce","dulces"]},

  {"id":138,"nombre":"Trident tipo americano","precio":13,"categoria":"Chicles","alias":["trident","americano","chicle","chicles","dulce","dulces"]},

  {"id":139,"nombre":"Trident de cartera","precio":23,"categoria":"Chicles","alias":["trident","cartera","chicle","chicles","dulce","dulces"]},

  {"id":140,"nombre":"Orbit de cartera","precio":23,"categoria":"Chicles","alias":["orbit","cartera","chicle","chicles","dulce","dulces"]},

  {"id":141,"nombre":"Snickers","precio":22,"categoria":"Dulces","alias":["snickers","sniker","chocolate","barra","dulce","dulces"]},

  {"id":142,"nombre":"M&M's","precio":22,"categoria":"Dulces","alias":["m&m","m&ms","mms","mnms","m y m","mym","chocolate","dulce","dulces"]},

  {"id":143,"nombre":"Milky Way","precio":22,"categoria":"Dulces","alias":["milky way","milkyway","chocolate","barra","dulce","dulces"]},

  {"id":144,"nombre":"Carlos V","precio":10,"categoria":"Dulces","alias":["carlos v","carlos quinto","chocolate","dulce","dulces"]},

  {"id":145,"nombre":"Carlos V doble","precio":17,"categoria":"Dulces","alias":["carlos v","carlos quinto","doble","chocolate","dulce","dulces"]},

  {"id":146,"nombre":"Paleta de la Rosa","precio":4,"categoria":"Dulces","alias":["paleta","paletas","de la rosa","dulce","dulces"]},

  {"id":147,"nombre":"Squinkles","precio":13,"categoria":"Dulces","alias":["squinkles","skuincles","dulce","dulces","gomita"]},

  {"id":148,"nombre":"Importe $5","precio":5,"categoria":"Importes","alias":["importe","importes","importe 5","5 pesos"]},

  {"id":149,"nombre":"Importe $8","precio":8,"categoria":"Importes","alias":["importe","importes","importe 8","8 pesos"]},

  {"id":150,"nombre":"Importe $10","precio":10,"categoria":"Importes","alias":["importe","importes","importe 10","10 pesos"]}

];