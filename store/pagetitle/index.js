export const state = () => ({
    pageTitle: 'PAGE TITLE',
})

export const mutations = {
    SET_PAGETITLE(state, pageTitle) {
        state.pageTitle = pageTitle
    },
}
