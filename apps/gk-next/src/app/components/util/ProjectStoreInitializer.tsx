'use client'

import { useRef } from 'react'

import { useProjects } from 'stores/project'
import type { Project } from 'types/project'

type ProjectStoreInitializerProps = {
    projects?: Project[]
    project?: Project
}

export default function ProjectStoreInitializer(props: ProjectStoreInitializerProps) {
    const { projects = [], project = null } = props

    const initialized = useRef(false)

    if (!initialized.current) {
        useProjects.setState({ projects, project })
        initialized.current = true
    }

    return null
}
