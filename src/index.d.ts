import { verify } from 'jsonwebtoken';
import type {Checker} from './validate'
export function validator(keyPath: string): Checker;
