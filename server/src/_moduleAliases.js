import { addAliases } from 'module-alias';

addAliases({
    "@src": __dirname + "/",
    "@interfaces": __dirname + "//interfaces",
    "@routers": __dirname + "//routers",
    "@controllers": __dirname + "//controllers",
    "@db": __dirname + "//db",
    "@crypto": __dirname + "//crypto",
    "@utils": __dirname + "//utils",
    "@utilsDev": __dirname + "//utilsDev",
    "@servises": __dirname + "//servises",
    "@middleWares": __dirname + "//middleWares",
    "@static": __dirname + "//static"
});
