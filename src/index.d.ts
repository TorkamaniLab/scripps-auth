import { verify } from 'jsonwebtoken';

export function validator(keyPath: string): typeof verify;
