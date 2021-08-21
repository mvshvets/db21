import './Header.scss'

import React from 'react'
import { block } from './Header.consts'
import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing/routeNames.const'
import { Menu } from 'antd'
import { Layout } from 'antd'

/** Шапка сайта */
export const Header = React.memo(() => {
    return (
        <Layout.Header className={block()}>
           <NavLink to={ROUTE_NAMES.MAIN} className={block('logo')}>
               <h1>КС</h1>
           </NavLink>

            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <NavLink to={ROUTE_NAMES.MAIN}>
                        Карта
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="2">
                    <NavLink to={ROUTE_NAMES.PLACES}>
                        Места
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    )
})