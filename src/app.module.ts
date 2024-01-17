import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import env from './infrastructure/config/env';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [env],
        }),
        ApplicationModule,
        InfrastructureModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
