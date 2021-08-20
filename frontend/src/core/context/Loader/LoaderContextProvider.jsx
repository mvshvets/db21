import React, { useState } from 'react'
import { Spin } from 'antd'

import { LoaderContext } from './LoaderContext'

export const LoaderContextProvider = React.memo(({ children }) => {
    const [loaderState, setLoaderState] = useState(false)

    return (
        <LoaderContext.Provider value={{ loaderState, setLoaderState }}>
            <Spin size="large" spinning={loaderState}>
                {children}
            </Spin>
        </LoaderContext.Provider>
    )
})
