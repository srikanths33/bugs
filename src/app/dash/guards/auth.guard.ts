import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateComponent } from 'src/app/post/create/create.component';
import { EditComponent } from 'src/app/post/edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanDeactivate<CreateComponent |EditComponent> {
  canDeactivate(component: CreateComponent | EditComponent): boolean {
    // Check if the component has the `canDeactivate` method
    if (component.canDeactivate) {
      return component.canDeactivate();
    }
    return true; // Allow navigation if no `canDeactivate` method exists
  }
  }
  

