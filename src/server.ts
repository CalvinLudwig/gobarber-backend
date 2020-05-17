import 'reflect-metadata';
import express from 'express';
import chalk from 'chalk';
import routes from './routes';

import './database';
import uploadConfig from './config/upload';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
    let msg = '                                                                  \n';
    msg += '                    SERVER STARTED AT PORT 3333                   \n';
    msg += '                                                                  \n';

    console.log(chalk.bgGreen.white.bold(msg));
});
