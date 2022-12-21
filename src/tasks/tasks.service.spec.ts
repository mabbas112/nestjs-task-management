import { Test, TestingModule } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Task } from './task.entity';
import { TasksService } from "./tasks.service"

const mockUser: any = { id: 1, username: 'test user' }

describe('TasksService', () => {
    let taskService: TasksService
    let tasksRepositroy: Repository<Task> |  any;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TasksService,
                {
                    provide: getRepositoryToken(Task),
                    useValue: {
                        findOne: jest.fn()
                    },
                }
            ]
        }).compile()

        taskService = module.get<TasksService>(TasksService);
        tasksRepositroy = module.get<Repository<Task>>(getRepositoryToken(Task))

    })

    describe('getTaskById', () => {

        it("Task found and return", async () => {
            let result: Task;
            const mockTask = { title: "test task", desc: "test desc" }
            jest.spyOn(tasksRepositroy, 'findOne').mockResolvedValue(mockTask)
            result = await taskService.getTaskById(1, mockUser);
            expect(result).toEqual(mockTask)
        })

        it('Task not found return an exception', () => {
            jest.spyOn(tasksRepositroy, 'findOne').mockResolvedValue(null)
            expect(taskService.getTaskById(1, mockUser)).rejects.toThrow(NotFoundException)
        })
    })
})


















// describe("getAllTasks", () => {
//     it("get all tasks from repository", async () => {
//         const filters: FilterTasksDto = { status: TaskStatus.IN_PROGRESS, search: 'some search query' }
//         let result: Task[];
//         jest.spyOn(taskService, 'getAllTasks').mockImplementation((): any => result)
//         result = await taskService.getAllTasks(filters, mockUser)
//         expect(taskService.getAllTasks).toHaveBeenCalled()
//     })
// })




// import { TasksService } from './tasks.service';
// import { TestingModule, Test } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Task } from './task.entity';
// import { FilterTasksDto } from './dto/filter-tasks.dto';
// import { TaskStatus } from './task-status.enum';

// const mockUser: any = { username: 'test user' }


// class TaskServiceMock {
//     getAllTasks(filter: any, user: any) {
//         return []
//     }

//     getTaskById() {

//     }

//     deleteTask() {

//     }

//     updateTask() {

//     }

//     createTasks() {

//     }
// }

// describe('tasks service', () => {
//     let tasksService: TasksService;
//     let taskRepository: Repository<Task>;
//     beforeEach(
//         async () => {
//             const module: TestingModule = await Test.createTestingModule({
//                 providers: [TasksService,
//                     { provide: TasksService, useClass: TaskServiceMock },
//                     {
//                         provide: getRepositoryToken(Task),
//                         useClass: Repository,
//                         // useValue: {
//                         //     createQueryBuilder: jest.fn(),
//                         //     where: jest.fn(),
//                         //     andWhere: jest.fn(),
//                         //     getMany: jest.fn(),
//                         //     getOne: jest.fn(),
//                         //     delete: jest.fn(),
//                         //     values: jest.fn(),
//                         // }
//                     }],
//             }).compile();

//             tasksService = module.get<TasksService>(TasksService);
//             taskRepository = module.get<Repository<Task>>(getRepositoryToken(Task));
//         }

//     )

//     it('ApiService - should be defined', () => {
//         expect(tasksService).toBeDefined();
//     });

//     it('taskRepository should be defined', () => {
//         expect(taskRepository).toBeDefined()
//     })

//     it('api service getAllTasks', () => {
//         const filters: FilterTasksDto = { status: TaskStatus.IN_PROGRESS, search: 'some search query' }
//         jest.spyOn(tasksService, 'getAllTasks')
//         const result = tasksService.getAllTasks(filters, mockUser)
//         expect(tasksService.getAllTasks).toHaveBeenCalled()
//         expect(result).toEqual([])
//     })

//     // describe('getAllTasks', () => {
//     //     it("get all tasks from repository", async () => {
//     //         const filters: FilterTasksDto = { status: TaskStatus.IN_PROGRESS, search: 'some search query' }
//     //         await tasksService.getAllTasks(filters, mockUser)
//     //         expect(tasksService.getAllTasks).toHaveBeenCalled()
//     //     })
//     // })

// })


// import { Test } from "@nestjs/testing";
// import { Repository } from "typeorm";
// import { FilterTasksDto } from "./dto/filter-tasks.dto";
// import { TaskStatus } from "./task-status.enum";
// import { Task } from './task.entity';
// import { TasksService } from "./tasks.service";
// import { TasksModule }  from './tasks.module';
// import { TasksController } from './tasks.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from '../auth/auth.module';
import { NotFoundException } from '@nestjs/common';


// const mockTaskRepository = () => ({
//     getAllTasks: jest.fn()
// })
// const mockUser: any = { username : 'test user' }

// describe('tasksService', () => {
//     let tasksService: TasksService;
//     let taskRepository : any;
//     beforeEach(async () => {
//         const module = await Test.createTestingModule({
//             imports: [
//                 TypeOrmModule.forFeature([Task]),
//                 AuthModule, TasksModule
//               ],
//               controllers: [ TasksController ],
//             providers: [
//                 TasksService,
//                 { provide: Task, useFactory: mockTaskRepository }
//             ]
//         }).compile();
//         tasksService = await module.get<TasksService>(TasksService)
//         taskRepository = await module.get<Task>(Task)

//         console.log({
//             taskRepository, tasksService
//         })
//     })

//     describe('getAllTasks', ()=>{
//         it("get all tasks from repository", ()=> {
//              expect(tasksService.getAllTasks).toBeCalled()
//             // const filters : FilterTasksDto = { status : TaskStatus.IN_PROGRESS, search : 'some search query' }
//             // tasksService.getAllTasks(filters, mockUser)
//             // expect(tasksService.getAllTasks).toHaveBeenCalled()
//         })
//     })
// })