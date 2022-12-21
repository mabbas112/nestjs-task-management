import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto, taskDto } from './dto/create-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';
import { TaskStatusValidation } from './pipes/TaskStatusValidation';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Auth } from 'src/auth/auth.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks (
        @Query() filterQuery : FilterTasksDto,
        @GetUser() user: Auth
    ): Promise<Task[]>{
        return this.taskService.getAllTasks(filterQuery, user);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number, @GetUser() user: Auth): Promise<Task> {
        return this.taskService.getTaskById(id, user);
    }

    @Post()
    createTasks (@Body(ValidationPipe) createTasksDto: CreateTasksDto, @GetUser() user: Auth ) {
        return this.taskService.createTasks(createTasksDto, user)
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number, @GetUser() user: Auth) {
        return this.taskService.deleteTask(id, user);
    }

    @Patch('/:id')
    updatedTask (
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TaskStatusValidation) status : TaskStatus,
        @GetUser() user : Auth
    ){
        return this.taskService.updateTask(id, status, user);
    }
}
