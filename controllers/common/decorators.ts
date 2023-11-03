import { test } from '@playwright/test';

export function Step(title: string) {
    return function (originalMethod: any, _context: any): any {
        async function replacementMethod(this: any, ...args: any[]): Promise<any> {
            return await test.step(`${title} using "${_context.name}" method`, async (): Promise<any> => {
                return originalMethod.call(this, ...args);
            });
        }
        return replacementMethod;
    };
}