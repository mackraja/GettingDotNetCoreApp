import { RolesModel } from 'src/app/models';
import * as RolesAction from '../actions/roles.action';

export interface State {
    roles: RolesModel[];
    editedRoles: RolesModel;
    editedRolesIndex: number;
}

const createdAt = new Date().toLocaleString();
const initialState: State = {
    roles: [new RolesModel('Admin', true, createdAt)],
    editedRoles: null,
    editedRolesIndex: -1
};

export default function rolesReducer(
    state: State = initialState,
    action: RolesAction.actions
) {
    switch (action.type) {
        case RolesAction.ADD_ROLES:
            return {
                ...state,
                roles: [...state.roles, action.payload]
            };
        case RolesAction.UPDATE_ROLES:
            const roles = state.roles[state.editedRolesIndex];
            const updatedRoles = {
                ...roles,
                ...action.payload
            };
            const updatedRolesArr = [...state.roles];
            updatedRolesArr[state.editedRolesIndex] = updatedRoles
            return {
                ...state,
                roles: updatedRolesArr,
                editedRoles: null,
                editedRolesIndex: -1
            };
        case RolesAction.DELETE_ROLES:
            return {
                ...state,
                roles: state.roles.filter((v, i) => {
                    return i !== action.payload
                }),
                editedRoles: null,
                editedRolesIndex: -1
            };
        case RolesAction.START_EDIT:
            return {
                ...state,
                editedRolesIndex: action.payload,
                editedRoles: { ...state.roles[action.payload] }
            };
        case RolesAction.STOP_EDIT:
            return {
                ...state,
                editedRoles: null,
                editedRolesIndex: -1
            };
        default:
            return state;
    }
}