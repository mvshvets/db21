import './PlacesForm.scss'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { LoaderContext } from '../../../../core/context'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { PageContent, ContentTitle, ButtonsToolbar } from '../../../../shared/components'
import { block } from './PlacesForm.consts'

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

                    <Link
                        to={ROUTE_NAMES.PLACES}
                        className="like-button"
                    >
                        <Button>Отмена</Button>
                    </Link>
                </ButtonsToolbar>
            </ContentTitle>

            <Form
                id="placesFrom"
                form={form}
                onFinish={handleFinish}
                initialValues={initialValuesForEdit}
            >
                <Row>
                    <Col>
                        <Form.Item
                            name="name"
                            label="Название услуги"
                            labelAlign="left"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>

                    <Col>
                        <Form.Item
                            name="to"
                            label="Место подачи документов"
                            labelAlign="left"
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="comment"
                            label="Комментарии"
                            labelAlign="left"
                        >
                            <Input.TextArea autoSize={{ minRows: 7, maxRows: 15 }}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </PageContent>
    )
})