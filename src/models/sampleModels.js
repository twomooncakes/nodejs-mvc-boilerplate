const mysql = require('mysql2/promise');

const dbConfig = require('../dbConfig');

async function dbAction(sql, dbData = []) {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [dbResult] = await conn.execute(sql, dbData);
        await conn.end();
        return dbResult;
    } catch (error) {
        console.error('Books Model error ', error.message);
        return false;
    }
}

const getDBdata = async () => {
    const sql = `
        SELECT * FROM books
    `;
    return await dbAction(sql);
};


module.exports = {
    getDBdata,
};