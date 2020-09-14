import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('RaceCtrl Data')
    .setDescription('The RaceCtrl Data API description')
    .setVersion('1.0')
    .addTag('racectrl')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDurations: true,
    },
    customSiteTitle: 'API Docs. RaceCtrl Data',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
