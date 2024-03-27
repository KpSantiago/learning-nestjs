import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller() // o decorator controller receb também uma string que será utilizada com prefixo de rotas
export class AppController {
  constructor(private prisma: RocketMembersRepository) { }

  @Get('hello/:id') // o decorator get recebe um paramêtro que vai ser utilizado para saber o path da api
  // Nest também permite o uso de DTO's (Data Transfer Objects)
  // Para fazer isso basta utilizar o decorator body seguido do nome do parametro dentro da funcao
  // ex: getHello(@Body() body)
  // a mesma coisa funciona para o parametros de url tanto os params quantos os query params
  // ex: getHello(@Param() nome, @Query() nome2ubfty)
  async getHello(@Body() body?: any, @Param() param?: any, @Query() queryParams?: any) {
    this.prisma.create('KKK', 'AAS')
    // O NestJS ele automaticamente sabe o tipo de dado que será retornado, se é uma string, number ou até mesmo JSON
    return { name: "hello ", param, queryParams };
  }
    
}
