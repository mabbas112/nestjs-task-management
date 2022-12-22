import { Test, TestingModule } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { Like, Repository } from "typeorm"
import { Task } from './task.entity';
import { TasksService } from "./tasks.service"
import { NotFoundException } from '@nestjs/common';
import { FilterTasksDto } from "./dto/filter-tasks.dto";
import { TaskStatus } from "./task-status.enum";

const mockUser: any = { id: 1, username: 'test user' }

describe('TasksService', () => {

    let taskService: TasksService
    let tasksRepositroy: Repository<Task> | any;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TasksService,
                {
                    provide: getRepositoryToken(Task),
                    useValue: {
                        findOne: jest.fn(),
                        insert: jest.fn(),
                        delete: jest.fn(),
                        find: jest.fn(),
                        save: jest.fn(),
                    },
                }
            ]
        }).compile()

        taskService = module.get<TasksService>(TasksService);
        tasksRepositroy = module.get<Repository<Task>>(getRepositoryToken(Task))

    })

    describe('getAllTasks', () => {
        it("should get all tasks from repository", async () => {
            const filters: FilterTasksDto = { status: TaskStatus.IN_PROGRESS, search: 'some search query' }
            jest.spyOn(tasksRepositroy, 'find').mockResolvedValue('ResolvedValue')
            expect(tasksRepositroy.find).not.toHaveBeenCalled()
            const result = await taskService.getAllTasks(filters, mockUser)
            expect(result).toEqual('ResolvedValue')
            expect(tasksRepositroy.find).toHaveBeenCalledWith({
                where: [
                    { userId: mockUser.id, status: filters.status, title: Like(`%${filters.search}%`) },
                    { userId: mockUser.id, status: filters.status, description: Like(`%${filters.search}%`) }
                ]
            })
        })
    })

    describe('getTaskById', () => {

        it("should found a task and return", async () => {
            let result: Task;
            const mockTask = { title: "test task", desc: "test desc" }
            jest.spyOn(tasksRepositroy, 'findOne').mockResolvedValue(mockTask)
            result = await taskService.getTaskById(1, mockUser);
            expect(result).toEqual(mockTask)
        })

        it('should not found a task and return an exception', () => {
            jest.spyOn(tasksRepositroy, 'findOne').mockResolvedValue(null)
            expect(taskService.getTaskById(1, mockUser)).rejects.toThrow(NotFoundException)
        })
    })

    describe('createTask', () => {

        it('should create task', async () => {
            jest.spyOn(tasksRepositroy, 'insert').mockResolvedValue('ResolvedValue')
            const result = await taskService.createTasks({
                tasks: [{
                    title: "text title",
                    description: "text description",
                }]
            }, mockUser);
            expect(result).toEqual('ResolvedValue')
        })
    })

    describe('deleteTask', () => {

        it('should delete a task of given id', async () => {

            jest.spyOn(tasksRepositroy, 'delete').mockResolvedValue('ResolvedValue')
            const result = await taskService.deleteTask(1, mockUser)
            expect(result).toEqual('ResolvedValue')
            expect(tasksRepositroy.delete).toHaveBeenCalledWith({ id: 1, userId: mockUser.id })

        })

        it('should return an exception of id not found', async () => {
            jest.spyOn(tasksRepositroy, 'delete').mockResolvedValue({ affected: 0 })
            expect(taskService.deleteTask(1, mockUser)).rejects.toThrow(NotFoundException)
        })
    })

    describe('updateTask', () => {
        it('should return updated task', async () => {
            const save = jest.fn().mockResolvedValue(true)
           taskService.getTaskById = jest.fn().mockResolvedValue({
            status :TaskStatus.OPEN,
            save
           })
           expect(taskService.getTaskById).not.toHaveBeenCalled()
           expect(save).not.toHaveBeenCalled()
           const result =await taskService.updateTask(1, TaskStatus.DONE, mockUser);
           expect(taskService.getTaskById).toHaveBeenCalled()
           expect(save).toHaveBeenCalled()
           expect(result).toEqual({
            status :TaskStatus.DONE,
            save
           })
        })
    })
})