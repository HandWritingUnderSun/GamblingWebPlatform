"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var logon_component_1 = require("./logon/logon.component");
var home_component_1 = require("./home/home.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var ExcelInterview_component_1 = require("./ExcelManager/ExcelInterview/ExcelInterview.component");
var welcome_component_1 = require("./pages/welcome/welcome.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'logon',
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
        path: 'nav-menu',
        component: nav_menu_component_1.NavMenuComponent
    },
    {
        path: 'ExcelManager/ExcelInterview',
        component: ExcelInterview_component_1.ExcelInterviewComponent
    },
    ,
    {
        path: 'pages/welcome',
        component: welcome_component_1.WelcomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map