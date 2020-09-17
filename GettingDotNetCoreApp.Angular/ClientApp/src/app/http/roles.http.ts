import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RolesService } from '../services';

@Injectable({
    providedIn: 'root'
})
export default class RolesHttp {

    constructor(private http: HttpClient, private rlService: RolesService) { }

    fetchRoles() {

    }

    saveRole() {

    }

    updateRole() {

    }

    deleteRole() {
        
    }
}