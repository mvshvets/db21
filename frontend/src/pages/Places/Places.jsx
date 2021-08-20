import React from 'react'
import { NotFoundPage } from '../NotFound'
import { ROUTE_NAMES } from '../../routing/routeNames.const'
import { PlacesPage, PlacesForm } from './components'
import { Route, Switch } from 'react-router-dom'

export const Places = React.memo(() => {
    return (
        <Switch>
            {/* Таблица услуг: создание услуги */}
            <Route path={ROUTE_NAMES.PLACES_CREATE}>
                <PlacesForm />
            </Route>

            {/* Таблица услуг: редактирование услуги */}
            <Route path={`${ROUTE_NAMES.PLACES_EDIT}/:id`}>
                <PlacesForm />
            </Route>

            {/* Таблица услуг */}
            <Route path={ROUTE_NAMES.PLACES}>
                <PlacesPage />
            </Route>

            {/* Ловушка неизвестных роутов */}
            <Route component={NotFoundPage} />
        </Switch>
    )
})