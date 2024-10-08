import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Tournament } from '../../tournamet/entities/tournamet.entity';
  import { Players } from '../../players/entities/player.entity';
  
  @Entity()
  export class TournamentPlayerScore {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Tournament, tournament => tournament.scores)
    @JoinColumn({ name: 'tournamentId' })
    tournament: Tournament;
  
    @ManyToOne(() => Players, player => player.scores)
    @JoinColumn({ name: 'playerId' })
    player: Players;
  
    @Column({ type: 'decimal', default: 0 })
    score: number;
  
    @Column({ type: 'text', nullable: true })
    notes: string; 
    @Column({ default: new Date() })
    createdAt: Date;
  }
  
