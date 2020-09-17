import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RolesModel } from 'src/app/models';
import * as RolesAction from '../../store/actions/roles.action';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roleList: Observable<{ roles: RolesModel[] }>;
  
  constructor(
    private store: Store<{ roleList: { roles: RolesModel[]} }> ) {
   }

  ngOnInit(): void {
    this.roleList = this.store.select('roleList');
    this.roleList.subscribe(d => console.log('roles --->>> ', d.roles));
  }

  onEditRole(index: number) {
    this.store.dispatch(new RolesAction.StartEdit(index));
  }

  onDeleteRole(index: number) {
    this.store.dispatch(new RolesAction.DeleteRoles(index));
  }

}
