import { type ActionCreator, createAction } from '@reduxjs/toolkit';

export type ActionsOf<T extends { [k in keyof T]: ActionCreator<any> }> = {
  [K in keyof T]: ReturnType<T[K]>;
};

export type AllActionsOf<T extends { [k in keyof T]: ActionCreator<any> }> = ActionsOf<T>[keyof T];

/**
 * Special case of `createAction` where the payload is boolean.
 */
export function createBooleanAction<T extends string>(action: T) {
  return createAction<boolean, T>(action);
}

/**
 * Make use of TypeScript 3.6's first-order types to allow inference of the
 * action type type parameter.
 */
export function createTypedAction<TPayload>() {
  return <Type extends string>(action: Type) => createAction<TPayload, Type>(action);
}
