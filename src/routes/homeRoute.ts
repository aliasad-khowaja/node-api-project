import {Request, Response, Application} from 'express';
import HomeController from './../controllers/homeController';

class HomeRoute {

    private homeController: HomeController = new HomeController();

    public routes(app : Application): void {
        app.route('/').get( this.homeController.home );
    }

}

export default HomeRoute