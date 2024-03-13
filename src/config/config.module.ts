import { DynamicModule, Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { ConfigService } from "src/config/config.service";

@Module({})
export class ConfigModule {
    static register(options: Record<string, any>): DynamicModule {
        return {
            module: ConfigModule,
            imports:[
                AuthModule
            ],
            providers: [{
                provide: 'CONFIG_OPTIONS',
                useValue: options,
            },
            ConfigService
        ],
            exports: [ConfigService],
        };
    }
}