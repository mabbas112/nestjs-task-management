import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class taskDto {
    @IsString()
    @IsNotEmpty()
    title : string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

}

export class CreateTasksDto {
    @Type(() => taskDto)
    @ValidateNested({ each: true })
    tasks: taskDto[];
}