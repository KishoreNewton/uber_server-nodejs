import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' })
  status: string;

  @Column({ type: 'text' })
  pickUpAddress: string;

  @Column({ type: 'double precision' })
  pickUpLat: number;

  @Column({ type: 'double precision' })
  pickUpLng: number;

  @Column({ type: 'text' })
  dropOffAddress: string;

  @Column({ type: 'double precision' })
  dropUpLat: number;

  @Column({ type: 'double precision' })
  dropUpLng: number;

  @Column({ type: 'double precision' })
  price: number;

  @Column({ type: 'text' })
  distance: string;

  @Column({ type: 'text' })
  duration: string;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updateAt: string;
}
