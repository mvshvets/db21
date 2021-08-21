import './Header.scss'

import React from 'react'
import { block } from './Header.consts'
import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing/routeNames.const'
import { Menu} from 'antd'
import { Layout } from 'antd'
import Logo from '../../img/A1.svg'

/** Шапка сайта */
export const Header = React.memo(() => {
    return (
        <Layout.Header className={block()}>
            <NavLink to={ROUTE_NAMES.MAIN} className={block('logo')}>
                <img src={Logo} alt="Logo"/>
            </NavLink>

            <Menu mode="horizontal">
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