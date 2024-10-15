import { Router } from "express";

const timeRouter = Router();

timeRouter.get("/", (req, res) => {
    res.render("time", {
        time: new Date().toLocaleTimeString()
    });
})

export default timeRouter