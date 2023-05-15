'use client'

import ReactModalVideo from 'react-modal-video'

import { useModalVideo } from 'stores/modal'

export default function ModalVideo() {
    const { toggle, modalOpen, youtubeId } = useModalVideo()

    return (
        <ReactModalVideo
            channel="youtube"
            isOpen={modalOpen}
            onClose={() => toggle()}
            videoId={youtubeId}
            allowFullScreen
            ratio="16:9"
            animationSpeed={360}
            classNames={{
                modalVideo: 'modal-video',
                modalVideoClose: 'modal-video-close',
                modalVideoBody: 'modal-video-body',
                modalVideoInner: 'modal-video-inner',
                modalVideoIframeWrap: 'modal-video-movie-wrap',
                modalVideoCloseBtn: 'modal-video-close-btn',
                modalVideoEffect: '',
            }}
            aria={{
                openMessage: 'You just opened the modal video',
                dismissBtnMessage: 'Close the modal by clicking here',
            }}
        />
    )
}
