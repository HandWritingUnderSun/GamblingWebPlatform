"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var logon_component_1 = require("./logon/logon.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: logon_component_1.LogonComponent
    },
    {
        path: 'nav-menu',
        component: nav_menu_component_1.NavMenuComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map