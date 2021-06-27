import { Body, Controller, Delete, Param, Post, Query } from '@nestjs/common';
import { CreatePlayerDto } from './dto/createUser.dto';
import { PlayersService } from './players.service';
import { PlayersValidationParamsPipe } from './pipes/player-params.pipe';

@Controller('/api/v1/player')
export class PlayersController {

    constructor(private readonly playerService: PlayersService) { }

    @Post()

    async createPlayer(@Body() playerDto: CreatePlayerDto) {
        const { email } = playerDto

        this.playerService.createPLayer(playerDto)
        return `jogador: ${email}`
    }

    @Delete()
    async deletePlayer(@Query('email', PlayersValidationParamsPipe) email: string): Promise<void> {
        this.playerService.deletePLayer(email)
    }
}
