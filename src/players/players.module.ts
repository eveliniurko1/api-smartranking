import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';

@Module({
  controllers: [PlayersController],
  providers: []
})
export class PlayersModule { }
