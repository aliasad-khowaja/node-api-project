import {Request, Response} from 'express';

class HomeController {

    public home(req: Request, res: Response) {
        res.send({message: 'Welcome Home'});
    }

}

export default HomeController;