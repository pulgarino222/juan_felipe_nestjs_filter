import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Players } from '../../players/entities/player.entity';
import { Tournament } from '../../tournamet/entities/tournamet.entity';

@Entity()
export class Score {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int' })
    score: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Players, player => player.scores)
    @JoinColumn({ name: 'playerId' })
    player: Players;

    @ManyToOne(() => Tournament, tournament => tournament.scores)
    @JoinColumn({ name: 'tournamentId' })
    tournament: Tournament;
}
