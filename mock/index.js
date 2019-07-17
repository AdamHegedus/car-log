import cors from 'cors';
import app from './core/app';

const port = 9999;
app.use(cors());

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
