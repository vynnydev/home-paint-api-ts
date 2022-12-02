import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import FourthWall from '@domain/models/FourthWall';
import RoomEntity from '@infra/database/entities/typeOrm/Room';

@Entity('fourth-walls')
export default class FourthWallEntity extends FourthWall {
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

  @OneToOne(() => RoomEntity)
  @JoinColumn({ name: 'room_id' })
  room: RoomEntity;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
