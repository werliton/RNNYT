import { createSelector } from 'reselect'
import { reshapeNewsData } from '../util/dataTransformations'

const newsSelector = state => state.news

const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
)

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
)