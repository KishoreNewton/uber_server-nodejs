import { rideStatus } from 'src/types/types';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import User from './User';

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({
    type: 'text',
    enum: [
      'ACCEPTED',
      'FINISHED',
      'CANCELLED',
      'REQUESTING',
      'ONROUTE'
    ]
  })
  status: rideStatus;

  @Column({ type: 'text' })
  pickUpAddress: string;

  @Column({ type: 'double precision', default: 0 })
  pickUpLat: number;

  @Column({ type: 'double precision', default: 0 })
  pickUpLng: number;

  @Column({ type: 'text' })
  dropOffAddress: string;

  @Column({ type: 'double precision', default: 0 })
  dropUpLat: number;

  @Column({ type: 'double precision', default: 0 })
  dropUpLng: number;

  @Column({ type: 'double precision', default: 0 })
  price: number;

  @Column({ type: 'text' })
  distance: string;

  @Column({ type: 'text' })
  duration: string;

  @ManyToOne((type) => User, (user) => user.rideAsPassenger)
  passenger: User;

  @ManyToOne((type) => User, (user) => user.rideAsDriver)
  driver: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default Ride;
