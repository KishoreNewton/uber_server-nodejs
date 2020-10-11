export const typeDefs = ["type Query {\n  place: Place\n  ride: Ride\n  user: User\n  verification: Verification\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAddress: String!\n  dropUpLat: Float!\n  dropUpLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  firstName: String!\n  lastName: String!\n  facebookId: String\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedEmail: Boolean!\n  verifiedPhoneNumber: Boolean!\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float!\n  latLat: Float!\n  lastOrientation: Float\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  place: Place | null;
  ride: Ride | null;
  user: User | null;
  verification: Verification | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAddress: string;
  dropUpLat: number;
  dropUpLng: number;
  price: number;
  distance: string;
  duration: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  email: string | null;
  firstName: string;
  lastName: string;
  facebookId: string | null;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedEmail: boolean;
  verifiedPhoneNumber: boolean;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number;
  latLat: number;
  lastOrientation: number | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
