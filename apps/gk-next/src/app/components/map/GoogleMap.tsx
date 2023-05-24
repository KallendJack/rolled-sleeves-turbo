export default function GoogleMap() {
    return (
        <div className="relative h-[500px]">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.94899087651!2d-0.1267273238814318!3d51.36723442093388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876077e8e8c2653%3A0x597b17f9a9b042e6!2sGarrett%20Kitchens!5e0!3m2!1sen!2suk!4v1684948055271!5m2!1sen!2suk"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                loading="lazy"
            ></iframe>
        </div>
    )
}
