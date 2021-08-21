import './PlacesForm.scss'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, TreeSelect } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { LoaderContext } from '../../../../core/context'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { PageContent, ContentTitle, ButtonsToolbar } from '../../../../shared/components'
import { block, LEGEND_TYPES } from './PlacesForm.consts'

export const PlacesForm = React.memo(initialState => {
    const { setLoaderState } = useContext(LoaderContext)
    const [form] = Form.useForm()
    const urlParams = useParams()

    /** Начальные значения для формы создания мероприятия в режиме редактирования */
    const [initialValuesForEdit, setInitialValuesForEdit] = useState(initialState)

    /**
     * Отправка формы на сервер
     * @param values значения формы
     */
    const handleFinish = useCallback(
        async (values) => {
            try {
                setLoaderState(true)

                console.log(values)

                if (!initialValuesForEdit) {
                    form.resetFields()
                }
            } catch (err) {
                console.log(err)
            } finally {
                setLoaderState(false)
            }
        },
        [form, initialValuesForEdit, setLoaderState]
    )

    /**
     * Запрос справочника
     */
    const fetchServiceForEdit = useCallback(async () => {
        try {
            setLoaderState(true)

        } catch (err) {
            console.error(err)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState])

    useEffect(() => {
        if (urlParams.id) fetchServiceForEdit()
    }, [urlParams.id, fetchServiceForEdit])

    useEffect(() => {
        if (initialValuesForEdit) form.resetFields()
    }, [initialValuesForEdit, form])

    return (
        <PageContent className={block()}>
            <ContentTitle
                title={
                    urlParams.id
                        ? 'Редактирование легенды'
                        : 'Создание легенды'
                }
                className={block('header')}
            >
                <ButtonsToolbar>
                    <Button
                        htmlType="submit"
                        type="primary"
                        form="placesFrom"
                    >
                        {urlParams.id ? 'Изменить' : 'Создать'}
                    </Button>

                    <Link to={ROUTE_NAMES.PLACES}>
                        <Button>Отмена</Button>
                    </Link>
                </ButtonsToolbar>
            </ContentTitle>

            <Form
                id="placesFrom"
                form={form}
                onFinish={handleFinish}
                initialValues={initialValuesForEdit}
                layout="vertical"
            >
                <Row gutter={20}>
                    <Col xs={12}>
                        <Form.Item
                            name="municipality"
                            label="Муниципальное образование"
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="type"
                            label="Тип легенды"
                        >
                            <TreeSelect
                                showSearch
                                treeData={LEGEND_TYPES}
                                treeCheckable
                            />
                        </Form.Item>


                        <Form.Item
                            name="documents"
                            label="Подтверждающие документы"
                        >
                            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }}/>
                        </Form.Item>


                        <Form.Item
                            name="informant"
                            label="Сведения об информантах "
                        >
                            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }}/>
                        </Form.Item>
                    </Col>

                    <Col xs={12}>
                        <Form.Item
                            name="description"
                            label="Описание"
                        >
                            <Input.TextArea autoSize={{ minRows: 21, maxRows: 21 }}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </PageContent>
    )
})