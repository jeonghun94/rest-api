// import config from "../mssqlConfig";
import sql from "mssql";
import pool from "../pool";


const config = {
    server: "localhost",
    user: "sa",
    password: "key0123",
    database: "PCMS",
    options: {
        encrypt: false,
    }
};

const pool1 = new sql.ConnectionPool(config);
const pool1Connect = pool1.connect();

pool1.on('error', err => {
    // ... error handler
})

export const test = async (req, res) => {
        await pool1Connect; // ensures that the pool has been created
    try {
        const request = pool1.request(); // or: new sql.Request(pool1)
        const {recordset} = await request.query('select top(1) * from ps130')
        console.dir(recordset)
        res.json(recordset);
    } catch (err) {
        console.error('SQL error', err);
    }

}