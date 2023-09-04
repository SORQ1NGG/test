interface PostsInterface {
    title: string,
    description: string,
    preview: string,
    createdAt: string,
    image: string,
    id: number,
}

export interface IPropsInterface {
    posts: PostsInterface[],
}
