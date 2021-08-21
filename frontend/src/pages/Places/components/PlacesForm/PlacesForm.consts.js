import { cn } from '../../../../core/config'

export const block = cn('places-form')

export const LEGEND_TYPES = [{
    key: 'folklore',
    label: 'Уникальные образцы устного народного творчества, место бытования',
    children: [{
        value: 'legend',
        label: 'Легенда',
        key: 'legend'
    }, {
        value: 'story',
        label: 'Предание',
        key: 'story'
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
        label: 'Другое',
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

export const CITIES = [{
    value: '1',
    label: 'Боровичи',
    key: '1'
},{
    value: '2',
    label: 'Валдай',
    key: '2'
},{
    value: '3',
    label: 'Великий Новгород',
    key: '3'
},{
    value: '4',
    label: 'Малая Вишера',
    key: '4'
},{
    value: '5',
    label: 'Окуловка',
    key: '5'
},{
    value: '6',
    label: 'Пестово',
    key: '6'
},{
    value: '7',
    label: 'Сольцы',
    key: '7'
},{
    value: '8',
    label: 'Старая Русса',
    key: '8'
},{
    value: '9',
    label: 'Холм',
    key: '9'
},{
    value: '10',
    label: 'Чудово',
    key: '10'
},{
    value: '11',
    label: 'Демянск',
    key: '11'
},{
    value: '12',
    label: 'Крестцы',
    key: '12'
},{
    value: '13',
    label: 'Кулотино',
    key: '13'
},{
    value: '14',
    label: 'Любытино',
    key: '14'
},{
    value: '15',
    label: 'Неболчи',
    key: '15'
},{
    value: '16',
    label: 'Панковка',
    key: '16'
},{
    value: '17',
    label: 'Парфино',
    key: '17'
},{
    value: '18',
    label: 'Пролетарий',
    key: '18'
},{
    value: '19',
    label: 'Угловка',
    key: '19'
},{
    value: '20',
    label: 'Хвойная',
    key: '20'
},{
    value: '21',
    label: 'Шимск',
    key: '21'
},]