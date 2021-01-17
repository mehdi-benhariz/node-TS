import express ,{Request,Response,NextFunction} from 'express'
import {router} from './routes/todos';
import {json} from "body-parser";

const app = express()
const port = 3000
app.use(json())

app.use('/todos',router);

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
  res.status(500).json({message:err.message})
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))