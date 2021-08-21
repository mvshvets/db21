import './PlacesForm.scss'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { LoaderContext } from '../../../../core/context'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { PageContent, ContentTitle, ButtonsToolbar } from '../../../../shared/components'
import { block, CITIES, LEGEND_TYPES } from './PlacesForm.consts'
import { LegendsService } from '../../../../core/api'

const { Option, OptGroup } = Select

export const PlacesForm = React.memo(initialState => {
    const { setLoaderState } = useContext(LoaderContext)
    const [form] = Form.useForm()
    const { id } = useParams()

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

    useEffect(() => {
        if (id) {
            const fetchLegendForEdit = async () => {
                try {
                    setLoaderState(true)

                    setInitialValuesForEdit(await LegendsService.getLegend({ id }))
                } catch (err) {
                    console.error(err)
                } finally {
                    setLoaderState(false)
                }
            }

            fetchLegendForEdit()
        }
    }, [id, setLoaderState])

    useEffect(() => {
        if (initialValuesForEdit) form.resetFields()
    }, [initialValuesForEdit, form])

    return (
        <PageContent className={block()}>
            <ContentTitle
                title={
                    id
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
                        {id ? 'Изменить' : 'Создать'}
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
                            <Select options={CITIES} showSearch/>
                        </Form.Item>

                        <Form.Item
                            name="informant"
                            label="Сведения об информантах "
                        >
                            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }}/>
                        </Form.Item>

                        <Form.Item
                            name="documents"
                            label="Подтверждающие документы"
                        >
                            <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }}/>
                        </Form.Item>
                    </Col>

                    <Col xs={12}>
                        <Form.Item
                            name="type"
                            label="Тип легенды"
                        >
                            <Select virtual={false}>
                                {LEGEND_TYPES.map(el => (
                                    <OptGroup label={el.label} key={el.key}>
                                        {el.children.map(type => (
                                            <Option value={type.value}
                                                    key={type.key}>
                                                {type.label}
                                            </Option>
                                        ))}
                                    </OptGroup>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="description"
                            label="Описание"
                        >
                            <Input.TextArea
                                autoSize={{ minRows: 13, maxRows: 13 }}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </PageContent>
    )
})