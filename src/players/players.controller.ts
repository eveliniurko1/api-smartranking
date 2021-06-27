import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/createUser.dto';
import { PlayersService } from './players.service';

@Controller('/api/v1/player')
export class PlayersController {

    constructor(private readonly playerService: PlayersService) { }

    @Post()

    async createPlayer(@Body() playerDto: CreatePlayerDto) {
        const { email } = playerDto

        this.playerService.createPLayer(playerDto)
        return `jogador: ${email}`
    }
}
