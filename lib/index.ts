export type Maybe<T> = (defaultThing: T) => T;

export function just<T>(thing: T): Maybe<T> {
  return (defaultThing: T) => thing;
}

export function nothing<T>(): Maybe<T> {
  return (defaultThing: T) => defaultThing;
}
