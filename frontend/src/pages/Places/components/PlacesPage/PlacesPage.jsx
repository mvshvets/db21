import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Table, Button, Upload } from 'antd'
import { Link } from 'react-router-dom'
import { PLACES_TABLE_COLUMNS } from './PlacesPage.consts'
import { LoaderContext } from '../../../../core/context'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { ContentTitle, PageContent, ButtonsToolbar } from '../../../../shared/components'
import { UploadOutlined } from '@ant-design/icons'
import { LegendsService } from '../../../../core/api'

/** Таблица легенд */
export const PlacesPage = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const [dictionary, setDictionary] = useState([])

    /**
     * Обработчик загрузки файла
     */
    const handleUploadAttachment = useCallback(async ({ file, onSuccess, onError }) => {
        try {
            setLoaderState(true)

            const upload = await LegendsService.uploadFile({
                file,
            })

            onSuccess(upload, file)
        } catch (e) {
            onError(e)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState])

    useEffect(() => {
        const dictionaryFetch = async () => {
            try {
                setLoaderState(true)

                setDictionary(await LegendsService.getLegends())
            } catch (e) {
                console.log(e)
            } finally {
                setLoaderState(false)
            }
        }

        dictionaryFetch()
    }, [setLoaderState])

    return (
        <PageContent>
            <ContentTitle title="Легенды">
                <ButtonsToolbar>
                    <Link to={ROUTE_NAMES.PLACES_CREATE}>
                        <Button>Добавить</Button>
                    </Link>

                    <Upload customRequest={handleUploadAttachment} showUploadList={false}>
                        <Button icon={<UploadOutlined/>}>Загрузить</Button>
                    </Upload>
                </ButtonsToolbar>
            </ContentTitle>

            <Table
                rowKey="id"
                columns={PLACES_TABLE_COLUMNS}
                dataSource={dictionary}
                pagination={false}
            />
        </PageContent>
    )
})