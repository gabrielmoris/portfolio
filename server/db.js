const spicedPg = require("spiced-pg");

const database = "portfolio"; //<---this is the database I already have in my PC
const username = "onionpetition";
const password = "onion";

//communication with the database
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:${username}:${password}@localhost:5432/${database}`
);

console.log(`[db] connecting to the database-> ${database}`);

module.exports.getWorks = () => {
    const q = `SELECT * FROM works`;
    return db.query(q);
};