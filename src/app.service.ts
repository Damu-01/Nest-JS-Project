import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const str = 'Hello NestFactoy!';
    return str;
  }
}
