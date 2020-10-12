import bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Chat from './Chat';
import Message from './Message';
import Ride from './Ride';
import Verification from './Verification';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true, nullable: true })
  @IsEmail()
  email: string | null;

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'int' })
  age: number | null;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text' })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: 'text' })
  profilePhoto: string;

  @Column({ type: 'text', nullable: true })
  fbId: string;

  @Column({ type: 'boolean' })
  isDriving: boolean;

  @Column({ type: 'boolean' })
  isRiding: boolean;

  @Column({ type: 'boolean' })
  isTaken: boolean;

  @Column({ type: 'double precision' })
  lastLng: number;

  @Column({ type: 'double precision' })
  lastLat: number;

  @Column({ type: 'double precision' })
  lastOrientation: number;

  @ManyToOne((type) => Chat, (chat) => chat.participants)
  chat: Chat;

  @OneToMany((type) => Message, (message) => message.user)
  messages: Message[];

  @OneToMany(
    (type) => Verification,
    (verification) => verification.user
  )
  verifications: Verification[];

  @OneToMany((type) => Ride, (ride) => ride.passenger)
  rideAsPassenger: Ride[];

  @OneToMany((type) => Ride, (ride) => ride.driver)
  rideAsDriver: Ride[];

  @UpdateDateColumn()
  updatedAt: string;

  @CreateDateColumn()
  createdAt: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }
}

export default User;
