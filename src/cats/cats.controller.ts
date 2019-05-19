import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
import { JoiValidationPipe } from 'src/common/validators/joi-validation.pipe';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {

    }
    @Get('/error')
    async testError() {
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, 403);
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
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() CreateCatDto: CreateCatDto) {
        console.log(CreateCatDto);
        this.catsService.create(CreateCatDto);
    }
}
