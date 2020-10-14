import { Routes, RouterModule } from '@angular/router';

import { EnroleesComponent } from "@app/enrollees/enrollees.component";
import { EditEnrollerComponent } from './edit-enroller/edit-enroller.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'enrollees', pathMatch: 'full' },
    { path: 'enrollees', component: EnroleesComponent },
    { path: 'enrollees/:id', component: EditEnrollerComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);