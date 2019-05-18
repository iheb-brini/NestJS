import { Injectable } from '@nestjs/common';
import { Cat } from 'dist/cats/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
    findByAge(age: number): Cat {
        for (const cat of this.cats) {
            console.log(cat.age === age);

            if (cat.age === age) {
                return cat;
            }
        }
        return null;

    }
}
