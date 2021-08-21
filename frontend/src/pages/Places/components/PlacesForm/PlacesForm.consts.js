import { cn } from '../../../../core/config'

export const block = cn('places-form')

export const LEGEND_TYPES = [{
    key: 'folklore',
    label: 'Уникальные образцы устного народного творчества, место бытования',
    children: [{
        value: 'LEGEND',
        label: 'Легенда',
        key: 'LEGEND'
    }, {
        value: 'STORY',
        label: 'Предание',
        key: 'STORY'
    }, {
        value: 'TALE',
        label: 'Сказка',
        key: 'TALE'
    }, {
        value: 'BYLICHKI',
        label: 'Быличка',
        key: 'BYLICHKI'
    }, {
        value: 'FOLKLORE_OTHER',
        label: 'Другое',
        key: 'FOLKLORE_OTHER'
    }]
}, {
    key: 'objects',
    label: 'Уникальные природные объекты, место нахождения',
    children: [{
        value: 'LAKE',
        label: 'Озеро',
        key: 'LAKE'
    }, {
        value: 'SOURCE',
        label: 'Источник',
        key: 'SOURCE'
    }, {
        value: 'STONE',
        label: 'Камень',
        key: 'STONE'
    }, {
        value: 'OBJECT_OTHER',
        label: 'Другое',
        key: 'OBJECT_OTHER'
    }]
}]
