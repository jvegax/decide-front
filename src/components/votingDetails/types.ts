export type Props = {
    votacion?: Votacion;
}

export type Votacion = {
    id?: string;
    name?: string;
    desc?: string;
    question?: {
        desc?: string;

        options?: {
            number?: number;
            option?: string;
        }[];
    }
}