// ======
// Puerto
// ======

process.env.PORT = process.env.PORT || 3000;


//=====
//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//vencimiento
process.env.CADUCIDAD_TOKEN = '1h';

//seed
process.env.SEED = process.env.SEED || 'hangar18';


//database
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
//urlDB = 'mongodb+srv://diegoale1994:hangar18@cluster0-cc6wt.mongodb.net/cafe';
process.env.URLDB = urlDB;