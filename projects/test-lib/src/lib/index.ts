import { NgModule } from "@angular/core";

import * as services from "./service/index";
export * from "./service/index";

@NgModule({
    imports: [
        services.ServiceModule,
    ],
    exports: [
        services.ServiceModule,
    ]
})
export class TestLibraryModule {}