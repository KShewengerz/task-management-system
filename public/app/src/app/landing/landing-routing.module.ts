import { RouterModule, Routes } from "@angular/router";

import { LandingComponent } from "./landing.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { UserListResolver } from "../shared/user/user-resolver.service";


const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", component: LoginComponent },
      {
        path: "signup",
        component: SignupComponent,
        resolve: { users: UserListResolver }
      }
    ]
  }
];

export const LandingRouting = RouterModule.forChild(routes);
