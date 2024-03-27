# Learnig NestJS (Introduction)

**What is _"NestJS"_:** Is a js.JS conventioned framework, but that allows us to do our own modifications, it is the middle ground between microsservices and convetioned frameworks, 'cause it gives us freedom to code of our own way. And it's in Typescript ^^!

**First steps:**
_Install NestJS and his CLI_

- npm i -g @nestjs/cli
- nest new project-name

## How NestJS work

- _NestJS_ work with **DECORATORS**, _decorators_ apply functionalities to classes, functions and variables. They involve, for example, a class and applies functionalities to her.
- And it also work with **MODULES**, basically, they cofigure the classes without change all her and serve to divide the application into serveral parts. For this we can use several structures in Nest.
- **@Module():** it is divided on four parts that work to configure the application.
  > - **_Imports:_** where stay the list of imported modules that export the providers which are required in this module
  > - **_controllers:_**: the set of controllers defined in this module which have to be instantiated
  > - **_providers:_** the providers that will be instantiated by nest injector and that may be shared at least acrosss this module
  > - **_exports:_** the subset of providers that are provided by this module and should be available in others module which import this module.
- NestJS also use the concepts of dependecy inversion and dependency injection.
  > - **_Dependendy inversion:_** basically, in this concept, to use dependencies, we need, for example, intialize them in the contructor function to after use them.
  >
  > ```js
  > import { Controller, Get } from "@nestjs/common";
  > import { UserService } from "./user.service.ts";
  > @Controller('app')
  > class UserController {
  >  constructor(
  >  private userService: UserService
  >  ){}
  >
  >  @Get('get-users')
  >  public getUsers(){
  >       return this.userService.hello();
  >   }
  > }
  > ```
  >
  > - **_Dependency injection_**: in this concept, we don't need send dependency when we initialize a class, Nest injection system automatically know which dependencies send to each controller.
  >
  > ```js
  > import { Module } from "@nestjs/common";
  > import { UserController } from "./user.controller.ts";
  > import { user.service.ts } from "./user.service.ts";
  >
  > @Module({
  >   imports: [],
  >   controllers: [UserController],
  >   providers: [UserService] // here is where occurs the injection
  > })
  > ```

## Routes

The routes utilization in NestJS works, also, with decorators

- **@Get('path')**
- **@Post('path')**
- **@Put('path/:param')**
- **@Patch('path/:param')**
- **@Delete('path/:param')**

They are used in the controllers. the controllers are files that receive http requests. And to define a file as a controller, we need use the **_@Controller('routes_prefix')_** decorator.
The **@Controller()** receive a param that is used to be the prefix for all routes of this controller.

- Controller example:

  > the file must be named as, for example:
  > user.controller.ts

  ```js
  //file: user.controller.ts
  import { Controller, Get } from "@nestjs/common";

  @Controller('app')
  class UserController {
   constructor(){}

   @Get('get-users')
   public getUsers(){
       return "all users was returned ^^";
   }
  }
  ```

#### Route params

NestJS also have a syntax for routes param both params than query params.
The syntax used is with decorators

- **@Param():** for params
- **@Query():** for query params
- Example of use:

  ```js
    import { Controller, Get, Param, Query } from "@nestjs/common";

    @Controller('app')
    class UserController {
        constructor(){}

        @Get('get-users/:userId')
        public getUsers(@Param() params, @Query() queryParams){
            const { userId } = params;
            const { height, age } = queryParams;
            return "all users was returned ^^";
        }
    }
  ```

#### Data Transfer Objects (DTO'S)

Using DTO's with NestJS is very very sample, we also use decorators, for example, to get body informations we use **_@Body()_**.

- Example:

```js
    import { Controller, Get, Body } from "@nestjs/common";

    @Controller('app')
    class UserController {
        constructor(){}

        @Get('get-users')
        public getUsers(@Body() body){
            // with that, we can work with the informations that are send by user
            const { name, email, passowrd } = body;
            return "all users was returned ^^";
        }
    }
```

#### DTO's validation

As a convetioned framework, NestJS gives us the sugestion of use class-validator, with his, we can validate our DTO's easilly with decorators

**First-steps:**
Install the class-validator and class-transformer. We need install the class-transformer

- npm i class-validator class-transformer

With that, we can create a file to validate our DTO

```js
//create-user-dto.ts
import { IsNotEmpty, Length } from "class-validator";

export class Createuser {
    @IsNotEmpty()
    @Length(3, 100)
    public name: string;

    //We also can change the default message of validator
    @IsNotEmpty({
        message: "O ano de nasciemento é obrigatório!"
    })
    @Length(2,4, {
        message: "Some message"
    })
    public born: string;
}
```

```js
//user.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { CreateUser } from "../dtos/create-user.ts";

@Controller('app')
class UserController {
    constructor(){}

    @Post('create-user')
    public getUsers(@Body() body: CreateUser){
        // with that, we can validate body informations
        const { name, born } = body;
        return "all users was returned ^^";
    }
}
```
