import Image from 'next/image'
// @ts-ignore
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

export const renderOptions = {
    renderNode: {
        [BLOCKS.DOCUMENT]: (node: any, children: any) => {
            return <div className="text-xl leading-8 text-gray-700">{children}</div>
        },
        [BLOCKS.HEADING_1]: (node: any, children: any) => {
            return (
                <h1 className="text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
                    {children}
                </h1>
            )
        },
        [BLOCKS.HEADING_2]: (node: any, children: any) => {
            return (
                <h2 className="text-2xl font-bold text-gray-900 font-heading sm:text-3xl">
                    {children}
                </h2>
            )
        },
        [BLOCKS.HEADING_3]: (node: any, children: any) => {
            return (
                <h3 className="text-xl font-bold text-gray-900 font-heading sm:text-2xl">
                    {children}
                </h3>
            )
        },
        [BLOCKS.HEADING_4]: (node: any, children: any) => {
            return (
                <h4 className="text-lg font-bold text-gray-900 font-heading sm:text-xl">
                    {children}
                </h4>
            )
        },
        [BLOCKS.HEADING_5]: (node: any, children: any) => {
            return (
                <h5 className="text-lg font-bold text-gray-900 font-heading sm:text-xl">
                    {children}
                </h5>
            )
        },
        [BLOCKS.HEADING_6]: (node: any, children: any) => {
            return (
                <h6 className="text-lg font-bold text-gray-900 font-heading sm:text-xl">
                    {children}
                </h6>
            )
        },
        [BLOCKS.UL_LIST]: (node: any, children: any) => {
            return (
                <ul style={{ listStyle: 'disc' }} className="pl-5">
                    {children}
                </ul>
            )
        },
        [BLOCKS.OL_LIST]: (node: any, children: any) => {
            return (
                <ul style={{ listStyle: 'decimal' }} className="pl-5">
                    {children}
                </ul>
            )
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            return (
                <Image
                    src={`https://${node.data.target.fields.file.url}`}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.title}
                />
            )
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return (
                <a
                    href={node.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline text-brand-primary"
                >
                    {children}
                </a>
            )
        },
    },
    renderText: (text) => {
        if (!text) return <br />
        return text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
    },
}
