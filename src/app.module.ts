import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository
    }
  ]
  /* Providers: podem ser qualquer coisa, exceto por controllers
      - Injeção de dependência: conceito em que é utilizado a externalização da instanciação de dependencia, basicamente, 
      não é necessário enviar a dependencia para classe na importação, pois o sistema, por meio, por exemplo, do provider, vai saber o que
      enviar para cada classe.
       > todos os arquivos providers devem possui o decorator @Injectable 

      - Inversão de dependência: quando temos um arquivo que depende de outro, ao invés de apenas importar o outro arquivo, 
      este que a usará deve inicializá-lo no seu construtor, recebendo-o como parametro para, só assim, utilizar
  */
})

export class AppModule { }
