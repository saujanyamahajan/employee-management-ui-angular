import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //Dependency Injection (DI)-Allows Angular to inject other services into it
})
export class EmployeeService {
    private apiUrl = 'http://localhost:5244/swagger/index.html';
    constructor(private http: HttpClient) {} //class property called http - injected HttpClient instance to it
  // GET: api/employee 
    getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  // GET: api/employee/{id}
  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  // POST: api/employee
  add(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }
  // PUT: api/employee/{id}
  update(id: number, employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, employee);
  }
// DELETE: api/employee/{id}
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
