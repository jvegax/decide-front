export type Props = {
    votacion: Votacion;
}

export type Votacion = {
    id: number;
    name: string;
    desc: string;
    question: {
        desc: string;

        options: {
            number: number;
            option: string;
        }[];
    }
}