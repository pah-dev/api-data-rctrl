import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import { SentryInterceptor } from './shared/sentry.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Sentry.init({
    dsn:
      'https://bdaed228f398426086598cc7f718690f@o469906.ingest.sentry.io/5510240',
    integrations: [new Sentry.Integrations.Http({ tracing: true })],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });

  const options = new DocumentBuilder()
    .setTitle('RaceCtrl Data')
    .setDescription('RaceCtrl Data API description')
    .setVersion('1.0')
    .addTag('racectrl')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDurations: true,
    },
    customSiteTitle: 'API Docs. RaceCtrl Data',
  });

  app.useGlobalInterceptors(new SentryInterceptor());
  app.setGlobalPrefix('/api/v1');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
