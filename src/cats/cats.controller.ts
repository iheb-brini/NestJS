import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, UsePipes, ValidationPipe, ParseIntPipe, UseFilters, ConflictException } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
import { JoiValidationPipe } from '../common/validators/joi-validation.pipe';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private readonly catsService: CatsService) {

    }
    @Get('/error')
    //@UseFilters(HttpExceptionFilter)
    async testError() {
        throw new ForbiddenException();
    }

    @Get('/age/:age')
    findbyAge(@Param() params) {
        return this.catsService.findByAge(params.age);
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id): string {
        return `This action returns a cat #${id}`;
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.catsService.findAll();
        //throw new ConflictException();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() CreateCatDto: CreateCatDto) {
        console.log(CreateCatDto);
        this.catsService.create(CreateCatDto);
    }
}
