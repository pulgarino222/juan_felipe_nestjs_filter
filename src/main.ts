import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';




const PORT=process.env.PORT
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('THE BEST APPI OF VIDEO GAMES')
    .setDescription('I implment the best appi of video game you can auth with google and see a pretty welcome page and you can participle in any tournament the way random ')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT,()=>{
    console.log(`server run on port:${PORT} http://localhost:${PORT}  swagger:http://localhost:${PORT}/api`);
    
  });
}
bootstrap();
