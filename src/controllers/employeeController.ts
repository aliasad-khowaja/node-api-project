import {Request, Response} from 'express';
import * as mongoose from 'mongoose';
import EmployeeSchema from './../models/employeeModel';

const Employee = mongoose.model('employee', EmployeeSchema);

class EmployeeController {

    // get all employees
    public getEmployees(req: Request, res: Response) {
        Employee.find({}, (err, employees) => {
            if( err ) {
                res.send( err );
            } else {
                res.json( employees );
            }
        })
    }

    // get one employee
    public getEmployee(req: Request, res: Response) {
        Employee.findById( req.params.employeeId, (err, employee) => {
            if( err ) {
                res.send( err );
            } else {
                res.json( employee );
            }
        });
    }


    // save employee
    public saveEmployee(req: Request, res: Response) {
        let newEmployee = new Employee(req.body);
        newEmployee.save((err, employee) => {
            if( err ) {
                res.send( err );
            } else {
                res.json( employee );
            }
        });
    }


    // update employee
    public updateEmployee(req: Request, res: Response) {
        Employee.findOneAndUpdate( {_id: req.params.employeeId}, req.body, (err, employee) => {
            if( err ) {
                res.send( err );
            } else {
                res.json( employee );
            }
        });
    }


    // delete employee
    public deleteEmployee(req: Request, res: Response) {
        Employee.remove({_id: req.params.employeeId}, (err) => {
            if( err ) {
                res.send( err );
            } else {
                res.json({message: 'Successfully deleted Employee!'});
            }
        });
    }

}

export default EmployeeController