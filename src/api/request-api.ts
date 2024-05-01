import { ERequestMethod } from "./request-api.enums";

export const requestApi = async <T>(url: string, method: ERequestMethod): Promise<T | undefined> | never => {
    try {
        const response = await fetch(url, { method });

        return response?.json() as T | undefined;
    } catch {
        throw new Error();
    }
};
