import {Request, Response, Application} from 'express';
import EmployeeController from './../controllers/employeeController';

class EmployeeRoute {

    private employeeController: EmployeeController = new EmployeeController();

    public routes(app: Application): void {

        app.route('/employee').get(this.employeeController.getEmployees)
        app.route('/employee').post(this.employeeController.saveEmployee)
        app.route('/employee/:employeeId').get(this.employeeController.getEmployee);
        app.route('/employee/:employeeId').put(this.employeeController.updateEmployee);
        app.route('/employee/:employeeId').delete(this.employeeController.deleteEmployee);

    }

}

export default EmployeeRoute