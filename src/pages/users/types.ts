export interface Geo {
  lat: number,
  lng: number,
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface Company {
  name: string,
  catchPharse: string,
  bs: string
}

export interface RawUser {
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string,
  address: Address,
  company: Company
}

export interface User {
  id: number,
  name: string,
  email: string,
  city: string,
  company: string,
}