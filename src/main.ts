import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();

// if (!process.env.IS_TS_NODE) {
//   require('module-alias/register');
// }

// // import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import * as cookieParser from 'cookie-parser';
// import { AppModule } from './app.module';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.use(cookieParser());
//   await app.listen(3000);

//   // app.useGlobalPipes(
//   //   new ValidationPipe({
//   //     whitelist: true,
//   //     forbidNonWhitelisted: true,
//   //     validateCustomDecorators: true,
//   //   }),
//   // );
// }

// bootstrap();
