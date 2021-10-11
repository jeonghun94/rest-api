import sql from "mssql";

const config = {
    server: "localhost",
    user: "sa",
    password: "key0123",
    database: "PCMS",
    options: {
        encrypt: false,
    }
};

const pool = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log("Connected to MSSQL");
        return pool;
    })
    .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));


export default pool;