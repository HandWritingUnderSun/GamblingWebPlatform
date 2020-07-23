"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var logon_component_1 = require("./logon/logon.component");
var home_component_1 = require("./home/home.component");
var signin_component_1 = require("./signin/signin.component");
var about_component_1 = require("./about/about.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'logon',
        component: logon_component_1.LogonComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'signin',
        component: signin_component_1.SigninComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map