export type News = {
    id: number;
    title: string;
    image_url: string;
    summary: string;
}

export type NewsWithPagination = {
    count: number;
    next: string | null;
    previous: string | null;
    results: News[];
}
