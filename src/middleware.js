import pool from "./pool";

export const poolMiddleware = (req, res, next) => {
    try {
        pool.connect('connect', err => {
            console.log(err.code);
            res.redirect("https://www.naver.com");
        });
    } catch (error) {
        
    }

    next();
};
