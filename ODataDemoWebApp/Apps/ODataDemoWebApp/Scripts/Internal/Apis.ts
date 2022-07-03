import { AppApiFactory } from "@jasonbenfield/sharedwebapp/Api/AppApiFactory";
import { ModalErrorView } from "@jasonbenfield/sharedwebapp/Views/ModalError";
import { ODataDemoAppApi } from "@lib/Api/ODataDemoAppApi";

export class Apis {
    constructor(private readonly modalError: ModalErrorView) {
    }

    ODataDemo() {
        const apiFactory = new AppApiFactory(this.modalError)
        return apiFactory.api(ODataDemoAppApi);
    }
}