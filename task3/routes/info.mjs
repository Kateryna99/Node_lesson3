import { Router } from "express";

const infoRouter = Router();

const SITES = ['https://www.google.com', 'https://chatgpt.com/', 'https://www.apple.com/']
const FILMS = ['https://megogo.net/en', 'https://www.netflix.com/se/', 'https://www.imdb.com/title/tt0388629/']

const getInfoContent = (url) => {
   switch (url) {
       case 'sites':
           return SITES;
       case 'films':
           return FILMS;
       default:
           return `My name is Kateryna I am 25 years old`

   }
}

infoRouter.get("/:myLinks", (req, res) => {
    const myLinks = req.params.myLinks;

    res.render("info", {
        content: getInfoContent(myLinks)
    });
})

export default infoRouter;