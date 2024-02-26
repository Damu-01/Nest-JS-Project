import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports : [TypeOrmModule.forFeature([User]) , AuthModule,AuthService],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService , AuthService],
})
export class UserModule {}
