import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/createUser.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class PlayersService {

    private players: Player[] = []

    async createPLayer(playerDto: CreatePlayerDto): Promise<void> {
        console.log(`CRIANDO PLAYER: ${playerDto.name}`)
        this.createPlayer(playerDto)
    }

    private createPlayer(playerDto: CreatePlayerDto): void {
        const { name, email, phoneNumber } = playerDto

        const player = {
            _id: uuidv4(),
            name, email, phoneNumber,
            ranking: "A",
            rankingPosition: 1,
            photUrl: ""
        }

        this.players.push(player)
        console.log(this.players)
    }
}
