import { addAliases } from 'module-alias';

addAliases({
    "@src": __dirname + "/",
    "@interfaces": __dirname + "//interfaces",
    "@routers": __dirname + "//routers",
    "@controllers": __dirname + "//controllers",
    "@constants": __dirname + "//constants",
    "@db": __dirname + "//db",
    "@models": __dirname + "//db/postgres/models",
    "@crypto": __dirname + "//crypto",
    "@utils": __dirname + "//utils",
    "@utilsDev": __dirname + "//utilsDev",
    "@servises": __dirname + "//servises",
    "@middleWares": __dirname + "//middleWares",
    "@static": __dirname + "//static",
});
