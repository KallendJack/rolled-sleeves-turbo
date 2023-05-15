import { create } from 'zustand'

type useModalVideoProps = {
    modalOpen: boolean
    toggle: () => void
    youtubeId: string
    setYoutubeId: (id: string) => void
}

export const useModalVideo = create<useModalVideoProps>((set) => ({
    modalOpen: false,
    toggle: () => set((state) => ({ modalOpen: !state.modalOpen })),
    youtubeId: ``,
    setYoutubeId: (id) => set(() => ({ youtubeId: id })),
}))
