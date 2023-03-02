import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return "Get is working!";
    }
}

@Module({ controllers: [AppController] })
class AppModule{}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(4133);
}

bootstrap();