import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import { Link } from 'react-router-dom'
import { PLACES_TABLE_COLUMNS } from './PlacesPage.consts'
import { LoaderContext } from '../../../../core/context'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { ContentTitle, PageContent, ButtonsToolbar } from '../../../../shared/components'

export const PlacesPage = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const [dictionary, setDictionary] = useState([])

    /**
     * Запрос справочника
     */
    const dictionaryFetch = useCallback(async () => {
        try {
            setLoaderState(true)

            console.log('Запрос за таблицей услуг для Алисы')
            setDictionary([])
        } catch (e) {
            console.log(e)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState])

    useEffect(() => {
        dictionaryFetch()
    }, [dictionaryFetch])

    return (
        <PageContent>
            <ContentTitle title="Легенды">
                <ButtonsToolbar>
                    <Link to={ROUTE_NAMES.PLACES_CREATE}>
                        <Button>Добавить</Button>
                    </Link>

                    <Button>Загрузить файл</Button>
                </ButtonsToolbar>
            </ContentTitle>

            <Table
                rowKey="id"
                locale={{ emptyText: "Нет данных" }}
                columns={PLACES_TABLE_COLUMNS}
                dataSource={dictionary}
                pagination={false}
            />
        </PageContent>
    )
})