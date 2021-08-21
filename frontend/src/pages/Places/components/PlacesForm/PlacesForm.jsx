import './PlacesForm.scss'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Input, Modal, Row, Select, Upload } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { LoaderContext } from '../../../../core/context'
import { ROUTE_NAMES } from '../../../../routing/routeNames.const'
import { PageContent, ContentTitle, ButtonsToolbar } from '../../../../shared/components'
import { block, LEGEND_TYPES } from './PlacesForm.consts'
import { LegendsService, MunicipalitiesService } from '../../../../core/api'
import { UploadOutlined } from '@ant-design/icons'

const { Option, OptGroup } = Select

export const PlacesForm = React.memo(initialState => {
    const { setLoaderState } = useContext(LoaderContext)
    const [form] = Form.useForm()
    const { id } = useParams()

    /** Начальные значения для формы создания легенды*/
    const [initialValuesForEdit, setInitialValuesForEdit] = useState(initialState)
    const [municipalitiesData, setMunicipalitiesData] = useState()

    /**
     * Отправка формы на сервер
     * @param values значения формы
     */
    const handleFinish = useCallback(
        async (values) => {
            try {
                setLoaderState(true)

                await LegendsService.setLegend(values)

                Modal.success({
                    title: "Легенда успешно добавлена"
                })

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
     * Обработчик загрузки файла аудиогида
     */
    const handleUploadAttachment = useCallback(async ({ file, onSuccess, onError }) => {
        try {
            setLoaderState(true)

            const upload = await LegendsService.uploadAudioFile({
                file
            })

            onSuccess(upload, file)
        } catch (e) {
            onError(e)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState])

    /** Получаем справочник муниципалитетов */
    useEffect(() => {
        const fetchMunicipalities = async () => {
            try {
                setMunicipalitiesData(await MunicipalitiesService.getMunicipalities())
            } catch (e) {
                console.log(e)
            }
        }
        fetchMunicipalities()
    }, [])

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
                            name="name"
                            label="Название легенды"
                        >
                            <Input/>
                        </Form.Item>

                        <Row gutter={20}>
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
                            </Col>

                            <Col xs={12}>
                                <Form.Item
                                    name="audio_guide_id"
                                    label="Файл для аудиогида"
                                >
                                    <Upload customRequest={handleUploadAttachment}
                                            showUploadList={false}>
                                        <Button icon={<UploadOutlined/>}>Прикрепить</Button>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            name="description"
                            label="Описание"
                        >
                            <Input.TextArea
                                autoSize={{ minRows: 9, maxRows: 9 }}/>
                        </Form.Item>
                    </Col>

                    <Col xs={12}>
                        <Form.Item
                            name="municipality_id"
                            label="Муниципальное образование"
                        >
                            <Select
                                options={municipalitiesData?.map(el => ({
                                    value: el.id,
                                    key: el.id,
                                    label: el.name
                                }))}
                                showSearch
                            />
                        </Form.Item>

                        <Form.Item
                            name="informant"
                            label="Сведения об информантах"
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
                </Row>
            </Form>
        </PageContent>
    )
})