import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RolesModel } from '../models';
import { Store } from '@ngrx/store';
import * as RolesAction from '../store/actions/roles.action';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) rlForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: RolesModel;
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store
      .select('roleList')
      .subscribe(stateData => {
        if(stateData.editedRolesIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedRoles;
          this.rlForm.setValue({
            name: this.editedItem.name,
            status: this.editedItem.status
          })
        }
      });
  }

  onSubmit(form: NgForm) {
    let { name, status } = form.value;
    status = status ? true : false;
    const newRole = new RolesModel(name, status, new Date().toLocaleString());
    
    if (this.editMode) {
      this.store.dispatch(new RolesAction.UpdatedRoles(newRole));
    } else {
      this.store.dispatch(new RolesAction.AddRoles(newRole));
    }
    this.editMode = false;
    form.reset();
  }

  onReset() {
    this.rlForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
