import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";


export class TaskStatusValidation implements PipeTransform {

    readonly TaskStatus = [ TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN ]

    transform(value: any) {
        if(!this.isValidStatus(value)){
            throw new BadRequestException(`${value} is invalid status`)
        }
        return value
    }

    private isValidStatus = (value: any) => {
        const idx = this.TaskStatus.indexOf(value);
        return idx !== -1; 
    }
}