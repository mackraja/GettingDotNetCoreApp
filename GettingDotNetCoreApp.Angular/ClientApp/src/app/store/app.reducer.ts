import { ActionReducerMap } from '@ngrx/store';

import * as RolesReducer from '../store/reducers/roles.reducer';

export interface AppState {
  roleList: RolesReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    roleList: RolesReducer.default,
};
