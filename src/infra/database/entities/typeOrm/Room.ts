import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Room from '@domain/models/Room';

import FirstWallEntity from '@infra/database/entities/typeOrm/FirstWall';
import SecondWallEntity from '@infra/database/entities/typeOrm/SecondWall';
import ThirdWallEntity from '@infra/database/entities/typeOrm/ThirdWall';
import FourthWallEntity from '@infra/database/entities/typeOrm/FourthWall';

@Entity('Rooms')
export default class RoomEntity extends Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  alias_id: string;

  @Column({ type: 'varchar' })
  room_name: string;

  @Column({ type: 'varchar' })
  owner_name: string;

  @OneToOne(() => FirstWallEntity, (first_wall: FirstWallEntity) => first_wall.room, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  first_wall: FirstWallEntity;

  @OneToOne(() => SecondWallEntity, (second_wall: SecondWallEntity) => second_wall.room, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  second_wall: SecondWallEntity;

  @OneToOne(() => ThirdWallEntity, (third_wall: ThirdWallEntity) => third_wall.room, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  third_wall: ThirdWallEntity;

  @OneToOne(() => FourthWallEntity, (fourth_wall: FourthWallEntity) => fourth_wall.room, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  fourth_wall: FourthWallEntity;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
