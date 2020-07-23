"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var counter_component_1 = require("../counter/counter.component");
var logon_component_1 = require("./logon.component");
exports.logonroutes = [
    {
        path: 'logon',
        component: logon_component_1.LogonComponent,
    },
    {
        path: 'counter',
        pathMatch: 'full',
        component: counter_component_1.CounterComponent
    }
];
exports.logonrouting = router_1.RouterModule.forRoot(exports.logonroutes);
//# sourceMappingURL=logon.routes.js.map