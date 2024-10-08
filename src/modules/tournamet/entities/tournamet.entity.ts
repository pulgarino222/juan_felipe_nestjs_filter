import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Players } from '../../players/entities/player.entity';
import { TournamentPlayerScore } from 'src/modules/scor/entities/scor.entity';
  
  @Entity()
  export class Tournament {
    @PrimaryGeneratedColumn('uuid')
    id: string; 
  
    @Column()
    name: string; 
  
    @Column({ type: 'text', nullable: true })
    description: string; 
  
    @Column()
    startDate: Date; 
  
    @Column()
    endDate: Date; 
  
    @Column({ type: 'decimal', nullable: true })
    prizePool: number; 
  
    @Column({ default: true })
    isActive: boolean; 
  
    @CreateDateColumn()
    createdAt: Date; 
  
    @UpdateDateColumn()
    updatedAt: Date; 
  
    @ManyToMany(() => Players, players => players.tournaments)
    @JoinTable()
    players: Players[]; 

    @OneToMany(() => TournamentPlayerScore, score => score.tournament)
  scores: TournamentPlayerScore[];
  }
  
