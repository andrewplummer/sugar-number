// Extended type definitions for Sugar v2.0.2
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

interface NumberConstructor {
  random(n1?: number, n2?: number): number;
}

interface Number {
  abbr(precision?: number): string;
  abs(): number;
  acos(): number;
  asin(): number;
  atan(): number;
  bytes(precision?: number, binary?: boolean, units?: string): string;
  ceil(precision?: number): number;
  chr(): string;
  cos(): number;
  exp(): number;
  floor(precision?: number): number;
  format(place?: number): string;
  hex(pad?: number): string;
  isEven(): boolean;
  isInteger(): boolean;
  isMultipleOf(num: number): boolean;
  isOdd(): boolean;
  log(base?: number): number;
  metric(precision?: number, units?: string): string;
  ordinalize(): string;
  pad(place?: number, sign?: boolean, base?: number): string;
  pow(): number;
  round(precision?: number): number;
  sin(): number;
  sqrt(): number;
  tan(): number;
  times<T>(fn: (i: number) => any): T;
  toNumber(): number;
}