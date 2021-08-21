import { cn } from '../../../../core/config'

export const block = cn('places-form')

export const LEGEND_TYPES = [{
    key: 'folklore',
    label: 'Уникальные образцы устного народного творчества, место бытования',
    children: [{
        value: 'legend',
        label: 'Легенда',
        key: 'Легенда'
    }, {
        value: 'story',
        label: 'Предание',
        key: 'Легенда'
    }, {
        value: 'tale',
        label: 'Сказка',
        key: 'tale'
    }, {
        value: 'bylichki',
        label: 'Быличка',
        key: 'bylichki'
    }, {
        value: 'folklore_other',
        label: 'другое',
        key: 'folklore_other'
    }]
}, {
    key: 'object',
    label: 'Уникальные природные объекты, место нахождения',
    children: [{
        value: 'lake',
        label: 'Озеро',
        key: 'lake'
    }, {
        value: 'source',
        label: 'Источник',
        key: 'source'
    }, {
        value: 'stone',
        label: 'Камень',
        key: 'stone'
    }, {
        value: 'object_other',
        label: 'Другое',
        key: 'object_other'
    }]
}]