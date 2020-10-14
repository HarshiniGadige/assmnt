import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Enrollee } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnrolleeService {
    constructor(private http: HttpClient) { }

    getEnrollees() {
        return this.http.get<Enrollee[]>(`${environment.apiUrl}/enrollees`);
    }

    getById(id: string): Observable<Enrollee> {
        return this.http.get<Enrollee>(`${environment.apiUrl}/enrollees/${id}`);
    }

    update(enrollee: Enrollee) {
        return this.http.put(`${environment.apiUrl}/enrollees/${enrollee.id}`, enrollee);
    }
}