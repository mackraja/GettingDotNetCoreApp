import { Action } from '@ngrx/store';
import { RolesModel } from 'src/app/models';

export const ADD_ROLES = 'ADD_ROLES';
export const UPDATE_ROLES = 'UPDATE_ROLES';
export const DELETE_ROLES = 'DELETE_ROLES';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddRoles implements Action {
    readonly type = ADD_ROLES;

    constructor(public payload: RolesModel) { }
}

export class UpdatedRoles implements Action {
    readonly type = UPDATE_ROLES;

    constructor(public payload: RolesModel) { }
}

export class DeleteRoles implements Action {
    readonly type = DELETE_ROLES;

    constructor(public payload: number) { }
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
  
    constructor(public payload: number) {}
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

export type actions = 
    | AddRoles
    | UpdatedRoles
    | DeleteRoles
    | StartEdit
    | StopEdit;
    