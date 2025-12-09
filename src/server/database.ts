import type { ServerLoginCredentials } from "~/server/types";
import type { ClientLoginCredentials } from "~/shared/types";

interface User {
    email: string;
    id: string;
}

export type UserForSession = User;

const _USER_CACHE: User[] = [];

// TODO: Implement fetching user from cache or database
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getUser = async ({ email, id }: Partial<Pick<User, "email" | "id">>): Promise<User> => {
    return null as unknown as User;
};

// TODO: Implement converting user to session-safe object
const getUserForSession = async (_email: string): Promise<UserForSession> => {
    return null as unknown as UserForSession;
};

// TODO: Implement sign up functionality
const signUp = async (_credentials: ClientLoginCredentials): Promise<void> => {
    return undefined;
};

// TODO: Implement login functionality
const logIn = async (_credentials: ServerLoginCredentials): Promise<User> => {
    return null as unknown as User;
};

export default {
    getUser,
    getUserForSession,
    logIn,
    signUp,
};
