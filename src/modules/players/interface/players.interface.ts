import { PaginationDTO } from "src/common/dto/pagination.dto";
import { CreatePlayerDto } from "../dto/create-player.dto";
import { UpdatePlayerDto } from "../dto/update-player.dto"; 
import { Players } from "../entities/player.entity";
import { FindById } from "src/common/dto/find-by-id.dto"; 

export interface CrudPlayers {
    createPlayer(createPlayer: CreatePlayerDto): Promise<Players>;
    
    findAll(pagination: PaginationDTO): Promise<{
        total: number;
        page: number;
        limit: number;
        players: Players[];
    }>;

    findOne(idObject: FindById): Promise<Players>;

    update(idObject: FindById, updatePlayer: UpdatePlayerDto): Promise<Players>;

    remove(idObject: FindById): Promise<{ message: string }>;

    findByEmail(email: string): Promise<Players>;
    
    matchPlayerToRandomTournament(playerId: string): Promise<{
        message: string;
        tournamentName: string;
        playerNickname: string;
    }>;
}
