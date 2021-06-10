import { NgModule } from "@angular/core";

import * as sample from "./sample/sample.service";
export * from "./sample/sample.service";

@NgModule({
    providers: [
        sample.SampleService,
    ]
})
export class ServiceModule {}
