import { BaseRequests } from "../common/baseRequests";
import { ImagesEndpoints } from "./imagesEndpoints";
import { Step } from "../common/decorators";

export class ImagesController {
    private readonly endpoint: ImagesEndpoints = new ImagesEndpoints();
    private readonly request: BaseRequests = new BaseRequests();

    @Step('Get picture by ID')
    async getById(id: any): Promise<any> {
        const apiResponse = await this.request.get(this.endpoint.get(id));
        return await apiResponse.json();
    }
}