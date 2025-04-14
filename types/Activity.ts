export type Activities = {
    [key: string]: {
        name: string;
        location: string;
        activity: string;
        image: string;
        members: { pseudo: string; age: number }[];
    };
};