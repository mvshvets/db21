import React from 'react'
import { Map, Places } from '../pages'
import { ROUTE_NAMES } from './routeNames.const'
import { Route, Switch } from 'react-router-dom'
import { Content } from 'antd/lib/layout/layout'

export const Routing = React.memo(() => {

    return (
        <Content>
            <Switch>
                {/* Главная страница */}
                <Route path={ROUTE_NAMES.MAIN} exact>
                    <Map/>
                </Route>

                {/* Страница достопримечательностей */}
                <Route path={ROUTE_NAMES.PLACES}>
                    <Places/>
                </Route>
            </Switch>
        </Content>
    )
})
