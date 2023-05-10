import { create } from 'zustand'

import type { Project } from 'types/project'

type useProjectsProps = {
    projects: Project[]
    project: Project
}

export const useProjects = create<useProjectsProps>(() => ({
    projects: [],
    project: null,
}))
