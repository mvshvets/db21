import React, { useState } from 'react'
import { Marker } from 'react-leaflet'
import { Drawer } from 'antd'

export const MarkerWithDrawer = () => {
    const [visible, setVisible] = useState(false)

    const handleVisibleDrawer = () => {
        setVisible(visible => !visible)
    }

    return (
        <>
            <Marker position={[51.505, -0.09]} eventHandlers={{ click: handleVisibleDrawer }}/>

            <Drawer
                title="Описание достопримечательности"
                placement="left"
                closable={false}
                onClose={handleVisibleDrawer}
                visible={visible}
            >
                <div>
                    Тут какое-то описание
                </div>
            </Drawer>
        </>
    )
}