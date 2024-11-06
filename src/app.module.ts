import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';


@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({ //veya getCongig
      type: 'sqlite',
      database: 'database2.sqlite',
      synchronize: true,
      logging: false,
      entities: [User,Product,Category],
      migrations: [],
      subscribers: [],
    }),
    ProductModule,
    CategoryModule, 
  ], //burayaimport eklendi
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
