export const QUERY = {
    userCreate: body => {
        "INSERT INTO ps130 " +
            "              ([systemno], " +
            "               [parkno], " +
            "               [shopcode], " +
            "               [shopname], " +
            "               [dong], " +
            "               [ho], " +
            "               [chiefname], " +
            "               [identifyno], " +
            "               [telno], " +
            "               [hpno], " +
            "               [id], " +
            "               [pwd], " +
            "               [tkstock], " +
            "               [recordsts], " +
            "               [inspgm], " +
            "               [insid], " +
            "               [insdate], " +
            "               [updpgm], " +
            "               [updid], " +
            "               [upddate], " +
            "               [nightdcuse], " +
            "               [mainpage], " +
            "               [authlevel], " +
            "               [minutes], " +
            "               [approvalsts]) " +
            "   VALUES      ('0001', " +
            "                '01', " +
            "                (SELECT TOP 1 RIGHT(( '0000' " +
            "                                      + CONVERT(VARCHAR, CONVERT(INT, shopcode) + " +
            "                                      CONVERT(INT, " +
            "                                      '1')) ), 4) AS " +
            "                              shopcode " +
            "                 FROM   ps130 " +
            "                 ORDER  BY shopcode DESC), " +
            "                '" + body.shopName + "', " +
            "                '', " +
            "                '', " +
            "                '', " +
            "                '', " +
            "                '" + body.shopTel + "', " +
            "                '', " +
            "                '" + body.id + "', " +
            "                '" + body.pw + "', " +
            "                '', " +
            "                'Y', " +
            "                'WEB', " +
            "                'hun', " +
            "                (SELECT CONVERT (CHAR(19), Getdate(), 120)), " +
            "                'WEB', " +
            "                'hun', " +
            "                (SELECT CONVERT (CHAR(19), Getdate(), 120)), " +
            "                '', " +
            "                '', " +
            "                 1, " +
            "                 0, " +
            "                'Y' ) "
    },
    userList: "SELECT * FROM ps130 ",
    userDetail: shopCode => `SELECT * FROM   ps130 WHERE  shopcode = ${shopCode}`
};