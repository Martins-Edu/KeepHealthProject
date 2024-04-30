import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProfileComponent } from './shared/components/sidebar/profile/profile.component';
import { DietComponent } from './shared/components/sidebar/diet/diet.component';
import { DietDetailComponent } from './shared/components/sidebar/diet/diet-detail/diet-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'diet',
        children: [
            { path: '', component: DietComponent},
            { path: ':id', component: DietDetailComponent}
        ]
    }
];
