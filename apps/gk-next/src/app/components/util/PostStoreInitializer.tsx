'use client'

import { useRef } from 'react'

import { usePosts } from 'stores/post'
import type { Post } from 'types/post'

type PostStoreInitializerProps = {
    posts?: Post[]
    post?: Post
}

export default function PostStoreInitializer(props: PostStoreInitializerProps) {
    const { posts = [], post = null } = props

    const initialized = useRef(false)

    if (!initialized.current) {
        usePosts.setState({ posts, post })
        initialized.current = true
    }

    return null
}
