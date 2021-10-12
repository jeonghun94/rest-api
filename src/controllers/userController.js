import sql from "mssql";
//import pool from "../pool";
import { QUERY } from "../query";

const config = {
    server: "localhost",
    user: "sa",
    password: "key0123",
    database: "PCMS",
    options: {
        encrypt: false,
    }
};

const pool = new sql.ConnectionPool(config);

pool.connect();
pool.on('error', err => {
    // ... error handler
    console.log(err, "에러입니당!!!!!!!");

});

export const home = (req, res) => {

    return res.render("home");
}

export const userCreate = async (req, res) => {
    console.log(req.body);
    res.json(await excuteQuery(QUERY.userCreate(req.body)));
};

export const userList = async (req, res) => {
    res.json(await excuteQuery(QUERY.userList));
}

export const userDetail = async (req, res) => {
    const { shopCode } = req.params;
    res.json(await excuteQuery(QUERY.userDetail(shopCode)));
}

const excuteQuery = async query => {
    try {
        const request = pool.request();
        const { recordset } = await request.query(query);
        return recordset;
    } catch (err) {
        console.error('SQL error', err);
    }
};