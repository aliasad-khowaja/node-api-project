import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import HomeRoute from './routes/homeRoute';
import EmployeeRoute from './routes/employeeRoute';

class App {

    public app: express.Application;
    private homeRoute: HomeRoute = new HomeRoute(); 
    private employeeRoute: EmployeeRoute = new EmployeeRoute();

    private mongodbUrl: string = "mongodb://localhost/companyDb";

    constructor() {
        this.app = express();
        this.config();
        this.connectMongodb();
        this.registerRoutes();
    }

    private config(): void {
        // support application/json type post data
        this.app.use( bodyParser.json() );

        // support appliction/x-www-form-urlencoded post data
        this.app.use( bodyParser.urlencoded( {extended: false} ) );
    } 

    private connectMongodb() : void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect( this.mongodbUrl );
    }

    private registerRoutes(): void {
        this.homeRoute.routes( this.app );
        this.employeeRoute.routes( this.app );
    }

    

}

export default new App().app;
