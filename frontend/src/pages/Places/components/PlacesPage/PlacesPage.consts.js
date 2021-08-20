import { renderServicesActions } from './PlacesPage.utils'

export const PLACES_TABLE_COLUMNS = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '',
        width: 100,
        render: renderServicesActions,
        align: 'right',
    }
]