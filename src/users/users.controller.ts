import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll() {
        return this.usersService.getUsers();
    }


    @Get('holamundov2')
    getOtro() {
        return this.usersService.getOtro();
    }
}

