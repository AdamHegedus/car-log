import cors from 'cors';
import app from './core/app';

const port = 9999;

app.use(cors());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
