import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import FirstWall from '@domain/models/FirstWall';
import RoomEntity from '@infra/database/entities/typeOrm/Room';

@Entity('first-walls')
export default class FirstWallEntity extends FirstWall {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'float8' })
  height: number;

  @Column({ type: 'float8' })
  width: number;

  @Column({ type: 'int' })
  door_quantity: number;

  @Column({ type: 'int' })
  window_quantity: number;

  @OneToOne(() => RoomEntity, (room: RoomEntity) => room.first_wall)
  room: RoomEntity;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
