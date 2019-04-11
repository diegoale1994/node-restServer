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

//GOOGLE CLIENT
process.env.CLIENT_ID = process.env.CLIENT_ID || '1035614112624-a0ppv7h0pacdfkdq1qp9p4a9d1plmsir.apps.googleusercontent.com';