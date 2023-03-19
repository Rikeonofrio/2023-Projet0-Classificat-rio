CREATE TABLE "vendas" (
	"data"	TEXT NOT NULL,
	"id_marca_"	INTEGER NOT NULL,
	"vendas"	INTEGER NOT NULL,
	"valor_do_veiculo"	INTEGER,
	"nome"	TEXT NOT NULL,
	FOREIGN KEY("id_marca_") REFERENCES "marcas"("id_marca")
);

CREATE TABLE "marcas" (
	"id_marca"	INTEGER NOT NULL UNIQUE,
	"marca"	TEXT NOT NULL
);
