import express, { Express, Request, Response } from 'express'
import { PORT } from './secrets';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hi Hi Hi")
})

app.listen(PORT, () => {
    console.log(`server runnign at port ${PORT} Gamuuuu`)
})