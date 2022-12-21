import { DataSource, DataSourceOptions } from "typeorm";
import * as config from 'config'

const serverConfig = config.get('db');

export const dataSourceOptions : DataSourceOptions = {
    type: serverConfig.type,
    host: process.env.RDS_HOSTNAME || serverConfig.host,
    port: process.env.RDS_PORT || serverConfig.port,
    username: process.env.RDS_USERNAME || serverConfig.username,
    password: process.env.RDS_PASSWORD || serverConfig.password,
    database: process.env.RDS_DB_NAME || serverConfig.database,
    migrations: ['dist/db/migrations/*.js'],
    // entities: ["dist/**/*.entity.js"],
    // entities: [__dirname + '/../**/*.entity.{js,ts}']
    entities: [__dirname + '/../**/*.entity.js'] 
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;