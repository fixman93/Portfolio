export const PROJECT_SELECTED = 'PROJECT_SELECTED'
export function selectProject(project) {
    return {
      type: PROJECT_SELECTED,
      payload: project
    }
}
