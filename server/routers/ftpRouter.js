const { Router } = require("express");
const ftpServices = require("./../services/ftpService");
const ṕaginate = require("jw-paginate");

const router = new Router();

router.get("/ftp", async(req, res) => {
    const directories = await ftpServices.list();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const pager = ṕaginate(directories.length, page, pageSize);
    const pageOfItems = directories.slice(pager.startIndex, pager.endIndex + 1);

    //console.log(JSON.stringify({ pager, pageOfItems }))
    res.json({ pager, pageOfItems });
});

module.exports = router;