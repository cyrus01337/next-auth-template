import type { ServerLoginCredentials } from "~/server/types";
import type { ClientLoginCredentials } from "~/shared/types";

export interface User {
    email: string;
}

let cachedRecords: User[];

const _fetchRecords = async () => {
    if (cachedRecords) {
        return cachedRecords;
    }

    // TODO: Fetch records
    cachedRecords = [];

    return cachedRecords;
};

// TODO: Implement login functionality
const logIn = async (_credentials: ServerLoginCredentials): Promise<User> => {
    return null as unknown as User;
};

// TODO: Implement sign up functionality
const signUp = async (_credentials: ClientLoginCredentials): Promise<User> => {
    return null as unknown as User;
};

export default {
    logIn,
    signUp,
};
