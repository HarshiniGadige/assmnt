import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { EnroleesComponent } from './enrollees/enrollees.component';;
import { EditEnrollerComponent } from './edit-enroller/edit-enroller.component'
// import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        // RouterModule,
        routing,
    ],
    declarations: [
        AppComponent,
        EnroleesComponent,
        EditEnrollerComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }