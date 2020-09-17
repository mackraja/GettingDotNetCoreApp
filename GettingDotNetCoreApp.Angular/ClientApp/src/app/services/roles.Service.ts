import { Subject } from 'rxjs'
import { RolesModel } from '../models';
import { Injectable } from "@angular/core";

@Injectable()
export default class RolesService {
  roleListChanged = new Subject<RolesModel[]>();
  startedEditing = new Subject<number>();
  roleList: RolesModel[] = [];

  constructor() {
    const createdAt = new Date().toLocaleString();
    this.roleList.push(
      new RolesModel('Admin', true, createdAt),
      new RolesModel('Super Admin', true, createdAt)
    );
   }

  getRoleList() {
    return this.roleList.slice();
  }

  getRole(index: number) {
    return this.roleList[index];
  }

  addRole(role: RolesModel) {
    this.roleList.push(role);
    console.log('addRole -------> ', this.roleList);
    this.roleListChanged.next(this.roleList.slice());
  }

  updateRole(index: number, newRole: RolesModel) {
    this.roleList[index] = newRole;
    console.log('updateRole -------> ', this.roleList);
    this.roleListChanged.next(this.roleList.slice());
  }

  deleteRole(index: number) {
    this.roleList.splice(index, 1);
    console.log('deleteRole -------> ', this.roleList);
    this.roleListChanged.next(this.roleList.slice());
  }
}
