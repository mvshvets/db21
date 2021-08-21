import React from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

/**
 * Рендер кнопок управления для записи таблицы категорий
 * @param tableRow одна запись таблицы
 */
export const renderServicesActions = (tableRow) => {
    return (
        <div>
            <NavLink to={`${ROUTE_NAMES.PLACES_EDIT}/${tableRow.id}`}>
                <Button
                    type="link"
                    icon={<EditOutlined/>}
                />
            </NavLink>

            <Button type="link" icon={<DeleteOutlined/>}/>
        </div>
    )
}