import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTasksDto } from './dto/create-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';
import { Task } from './task.entity';
import { DeleteResult, Like, Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { Auth } from 'src/auth/auth.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) { }

    getAllTasks = async (filterQuery: FilterTasksDto, user: Auth): Promise<Task[]> => {

        const { status, search } = filterQuery;

        return await this.taskRepository.find({
            where: [
                { userId: user.id, status, title: status && Like(`%${search}%`) },
                { userId: user.id, status, description: status && Like(`%${search}%`) }
            ]
        })
    }

    getTaskById = async (id: number, user: Auth): Promise<Task> => {

        const found = await this.taskRepository.findOne({  where: { id, userId: user.id } })
        if (!found) throw new NotFoundException(`Not founsd with this ${id}`);
        return found
    }

    deleteTask = async (id: number, user: Auth): Promise<DeleteResult> => {

        const isDeleted = await this.taskRepository.delete({ id, userId: user.id })
        if (isDeleted.affected === 0)
            throw new NotFoundException(`Not found with this ${id}`)
        return isDeleted;
    }

    updateTask = async (id: number, status: TaskStatus, user: Auth) => {
        const task = await this.getTaskById(id, user);
        task.status = status;
        await task.save()
        return task;
    }

    createTasks = async (createTasksDto: CreateTasksDto, user: Auth) => {

        let transformedTasks = [];
        for (let i = 0; i < createTasksDto.tasks.length; i++) {
            const { title, description } = createTasksDto.tasks[i];
            const task = new Task();
            task.title = title;
            task.description = description;
            task.user = user
            transformedTasks.push(task);
        }
        
        await this.taskRepository.insert(transformedTasks)
    }
}
