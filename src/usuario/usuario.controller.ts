import { Controller, Get, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';

@Controller('usuario')
export class UsuarioController {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepositorio: Repository<UsuarioEntity>
    ) {}

    @Get()
    listAll(){
        return 
    }
}
