import { TypeWithUndefined } from 'models/common/Types';
import { Reducer as ReactReducer } from 'react';
import { Action as ReduxAction, Reducer as ReduxReducer } from 'redux';

export function createWithDefault<State, Action extends ReduxAction<any>>(
  reducer: ReactReducer<State, Action>,
  initialState: State,
): ReduxReducer<State, Action> {
  return (state: TypeWithUndefined<State>, action: Action) => {
    const realisedState = state ?? initialState;
    return reducer(realisedState, action) ?? realisedState;
  };
}
