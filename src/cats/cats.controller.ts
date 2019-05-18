import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {

    }
    @Get('/age/:age')
    findbyAge(@Param() params) {
        return this.catsService.findByAge(params.age);
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `This action returns a cat #${params.id}`;
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.catsService.findAll();
    }

    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        console.log(CreateCatDto);
        this.catsService.create(CreateCatDto);
    }
}
