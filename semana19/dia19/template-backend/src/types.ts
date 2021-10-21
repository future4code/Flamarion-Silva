export enum USLER_ROLES{
  NROMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}

export interface authenticationData{
  id: string,
  role: USLER_ROLES
}

export interface user extends authenticationData {
  email: string
  name: string
  nickname: string
  password:string
}