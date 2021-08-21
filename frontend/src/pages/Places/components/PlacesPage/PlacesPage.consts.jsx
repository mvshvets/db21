import { renderServicesActions } from './PlacesPage.utils'
import React from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const LEGENDS_TYPES = {
    LEGEND: 'Легенда',
    STORY: 'Предание',
    TALE: 'Сказка',
    BYLICHKI: 'Быличка',
    FOLKLORE_OTHER: 'Другой вид устного творчества',
    LAKE: 'Озеро',
    SOURCE: 'Источник',
    STONE: 'Камень',
    OBJECT_OTHER: 'Другой уникальный природный объект'
}

export const PLACES_TABLE_COLUMNS = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },{
        title: 'Тип',
        dataIndex: 'type',
        key: 'type',
        render: type => LEGENDS_TYPES[type]
    },{
        title: 'Муниципалитет',
        dataIndex: 'municipality',
        key: 'municipality',
    },{
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
    },{
        title: 'Подтверждающие документы',
        dataIndex: 'documents',
        key: 'documents',
    },{
        title: 'Сведения об информантах',
        dataIndex: 'informant',
        key: 'informant',
    },{
        title: 'Аудиогид',
        dataIndex: 'audio_guide_id',
        width: 100,
        align: "center",
        key: 'audio_guide_id',
        render: id => id ? <CheckOutlined style={{color: 'green'}}/> : <CloseOutlined style={{color: 'red'}}/>,
    }, {
        title: '',
        width: 100,
        render: renderServicesActions,
        align: 'right',
    }
]