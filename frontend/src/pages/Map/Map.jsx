import './Map.scss'

import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerWithDrawer } from './components'

export const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerWithDrawer/>
        </MapContainer>
    )
}