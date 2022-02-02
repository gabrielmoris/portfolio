const spicedPg = require("spiced-pg");

const database = "portfolio"; //<---this is the database I already have in my PC
const username = "onionpetition";
const password = "onion";

//communication with the database
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:${username}:${password}@localhost:5432/${database}`
);

console.log(`[db] connecting to the database-> thisis${database}database`);

module.exports.getWorks = () => {
    const q = `SELECT * FROM works`;
    return db.query(q);
};

module.exports.voteTech=(technology)=>{
    const q = `UPDATE techs SET points=points + 1 WHERE tech = $1 RETURNING *`;
    const params=[technology];
    return db.query(q,params);
};

module.exports.votesResult=()=>{
    const q = `SELECT * FROM techs`;
    return db.query(q);
};

