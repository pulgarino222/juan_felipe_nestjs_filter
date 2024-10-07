import { login } from '../dto/login-auth.dto';
import { Players } from '../../modules/players/entities/player.entity'; // Asegúrate de que la ruta sea correcta
import { CreatePlayerDto } from '../../modules/players/dto/create-player.dto'; // Asegúrate de que la ruta sea correcta

export interface AuthInterface {
    signIn(data: login): Promise<{ alldata: Players; accessToken: string }>;
    register(data: CreatePlayerDto): Promise<Players>; // Cambiado a Players
}
