import './MarkerWithDrawer.scss'

import React, { useState } from 'react'
import { Marker } from 'react-leaflet'
import { Drawer } from 'antd'
import { LEGENDS_TYPES } from '../../../../shared/consts'
import { block } from './MarkerWithDrawer.consts'

/** Маркер с информационным давером */
export const MarkerWithDrawer = ({name, type, description, lat, long, municipality, informant, documents}) => {
    const [visible, setVisible] = useState(false)

    const handleVisibleDrawer = () => {
        setVisible(visible => !visible)
    }

    return (
        <div className={block()}>
            <Marker position={[lat, long]} eventHandlers={{ click: handleVisibleDrawer }}/>

            <Drawer
                title={name}
                placement="left"
                closable={false}
                onClose={handleVisibleDrawer}
                visible={visible}
                className={block('info')}
            >
                <div>
                    <h3>{`Тип: ${LEGENDS_TYPES[type]}`}</h3>
                    <h3>{`Муниципалитет: ${municipality}`}</h3>
                    <br/>
                    <div>Сведения об информантах:</div>
                    <div>{informant}</div>
                    <br/>
                    <div>Подтверждающие документы:</div>
                    <div>{documents}</div>
                    <br/>
                    <br/>

                    <div>Описание:</div>
                    <div>{description}</div>


                </div>
            </Drawer>
        </div>
    )
}