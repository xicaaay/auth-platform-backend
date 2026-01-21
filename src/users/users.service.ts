import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getUsers(){
        return [{id: 1, name: 'poto 1'}, {id: 2, name: 'poto 2'}];
    }



    getOtro(){
        const a = 5, b = 105;
        let resultado = a + b;
        return resultado;
    }
}
