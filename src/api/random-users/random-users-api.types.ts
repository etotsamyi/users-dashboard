import { EUserGender } from "./random-users-api.enums";

export type TDob = {
    age?: number;
    date?: string;
}

export type TName = {
    title?: string;
    first?: string;
    last?: string;
}

export type TLocation = {
    city?: string;
    state?: string;
    country?: string;
};

export type TUser = {
    gender?: EUserGender;
    dob?: TDob;
    name?: TName;
    location?: TLocation;
    email?: string;
    login?: {
        uuid?: string;
    };
    phone?: string;
    picture?: {
        thumbnail?: string;
    };
};

export type TRandomUsersResponse = {
    results?: TUser[];
};
