import { create } from 'zustand'

type useModalVideoProps = {
    modalOpen: boolean
    toggle: () => void
    videoId: string
    setVideoId: (videoId: string) => void
    channel: 'youtube' | 'vimeo'
    setChannel: (channel: 'youtube' | 'vimeo') => void
}

export const useModalVideo = create<useModalVideoProps>((set) => ({
    modalOpen: false,
    toggle: () => set((state) => ({ modalOpen: !state.modalOpen })),
    videoId: '',
    setVideoId: (videoId) => set(() => ({ videoId })),
    channel: 'youtube',
    setChannel: (channel) => set(() => ({ channel })),
}))
