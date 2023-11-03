import { APIRequestContext, APIResponse, request , test } from '@playwright/test';

export class BaseRequests {
    async get(url: string): Promise<APIResponse> {
        return await test.step(`Make GET request to "${url}"`, async () => {
            const apiRequestContext: APIRequestContext = await request.newContext();
            return await apiRequestContext.get(url);
        });
    }

}
