import { HttpRequestBaseModel } from "@soushians/shared";
import { SourceModel } from "./source.model";
export declare namespace GetSourcesApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        constructor(initValue?: GetSourcesApiModel.Request);
        getRequestBody(): {};
    }
    class Response {
        Result: SourceModel[];
        constructor();
    }
}
