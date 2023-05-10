import { create } from 'zustand'

import type { Post } from 'types/post'

type usePostsProps = {
    posts: Post[]
    post: Post
}

export const usePosts = create<usePostsProps>(() => ({
    posts: [],
    post: null,
}))
