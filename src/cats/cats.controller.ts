import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
    @Get(':id')
    findOne(@Param() params): string {
        return `This action returns a cat #${params.id}`;
    }

    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        console.log(CreateCatDto);

        return 'This action adds a new cat';
    }
}
