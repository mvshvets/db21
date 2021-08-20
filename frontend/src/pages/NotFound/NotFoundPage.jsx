import React from 'react'
import { Link } from 'react-router-dom'
import { PageContent } from '../../shared/components'
import { ROUTE_NAMES } from '../../routing/routeNames.const'

export const NotFoundPage = React.memo(() => {
    return (
        <PageContent>
            <h1>По Вашему запросу ничего не найдено</h1>

            <h3>
                Вы можете перейти на <Link to={ROUTE_NAMES.MAIN}>Главную</Link>
            </h3>
        </PageContent>
    )
})
