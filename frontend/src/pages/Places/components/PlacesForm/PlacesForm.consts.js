import { cn } from '../../../../core/config'

export const block = cn('places-form')

export const LEGEND_TYPES = [{
    value: 'folklore',
    key: 'folklore',
    title: 'Уникальные образцы устного народного творчества, место бытования',
    children: [{
        value: 'legend',
        title: 'Легенда',
        key: 'Легенда'
    }, {
        value: 'story',
        title: 'Предание',
        key: 'Легенда'
    }, {
        value: 'tale',
        title: 'Сказка',
        key: 'tale'
    }, {
        value: 'bylichki',
        title: 'Быличка',
        key: 'bylichki'
    }, {
        value: 'folklore_other',
        title: 'другое',
        key: 'folklore_other'
    }]
}, {
    value: 'object',
    key: 'object',
    title: 'Уникальные природные объекты, место нахождения',
    children: [{
        type: 'lake',
        title: 'Озеро',
        key: 'lake'
    }, {
        type: 'source',
        title: 'Источник',
        key: 'source'
    }, {
        type: 'stone',
        title: 'Камень',
        key: 'stone'
    }, {
        type: 'object_other',
        title: 'Другое',
        key: 'object_other'
    }]
}]