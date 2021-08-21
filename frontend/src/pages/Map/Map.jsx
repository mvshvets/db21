import './Map.scss'

import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerWithDrawer } from './components'
import { LegendsService } from '../../core/api'
import { LoaderContext } from '../../core/context'

/** Страница с картой */
export const Map = () => {
    const { setLoaderState } = useContext(LoaderContext)
    const [marketsData, setMarketsData] = useState()

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoaderState(true)
                setMarketsData(await LegendsService.getLegends())
            } catch (e) {
                console.log(e)
            } finally {
                setLoaderState(false)
            }
        }

        fetch()
    }, [setLoaderState])

    return (
        <MapContainer center={[58.2, 32.5]} zoom={8}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marketsData?.map(({ lat, long, ...el }) => lat && long ? (
                <MarkerWithDrawer {...el} key={el.id} lat={lat} long={long}/>
            ) : undefined)}
        </MapContainer>
    )
}