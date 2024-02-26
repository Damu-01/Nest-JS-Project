import { Module } from "@nestjs/common";
import { PassportLocalStrategy } from "./passpost.local.strategy";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Module({

    imports: [UserModule,
        JwtModule.register({

            secret: 'Key',
            signOptions: { expiresIn: '60s' }

        })],
    controllers: [],
    providers: [PassportLocalStrategy , AuthService],
    exports : [AuthService]

})

export class AuthModule { }