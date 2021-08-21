import { renderServicesActions } from './PlacesPage.utils'
import React from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { LEGENDS_TYPES } from '../../../../shared/consts'
import { Tooltip, Typography } from 'antd'
import { cn } from '../../../../core/config'

export const block = cn('places-page')

export const PLACES_TABLE_COLUMNS = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type',
        render: type => LEGENDS_TYPES[type],
        width: 150
    }, {
        title: 'Муниципалитет',
        dataIndex: 'municipality',
        key: 'municipality'
    }, {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
        render: description => (
            <Tooltip title={description} overlayClassName={block('tip')}>
                <Typography.Paragraph ellipsis={{ rows: 3 }}>
                    {description}
                </Typography.Paragraph>
            </Tooltip>
        )
    }, {
        title: 'Подтверждающие документы',
        dataIndex: 'documents',
        key: 'documents',
        render: documents => (
            <Tooltip title={documents} overlayClassName={block('tip')}>
                <Typography.Paragraph ellipsis={{ rows: 3 }}>
                    {documents}
                </Typography.Paragraph>
            </Tooltip>
        )
    }, {
        title: 'Сведения об информантах',
        dataIndex: 'informant',
        key: 'informant',
        render: informant => (
            <Tooltip title={informant} overlayClassName={block('tip')}>
                <Typography.Paragraph ellipsis={{ rows: 3 }}>
                    {informant}
                </Typography.Paragraph>
            </Tooltip>
        )
    }, {
        title: 'Аудиогид',
        dataIndex: 'audio_guide_id',
        width: 100,
        align: "center",
        key: 'audio_guide_id',
        render: id => id ? <CheckOutlined style={{ color: 'green' }}/> :
            <CloseOutlined style={{ color: 'red' }}/>
    }, {
        title: '',
        width: 100,
        render: renderServicesActions,
        align: 'right'
    }
]