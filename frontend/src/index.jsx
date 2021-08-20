import 'antd/dist/antd.css'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ConfigProvider } from 'antd'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import ru from 'antd/lib/locale/ru_RU'
import { Compose } from './shared/components'
import { LoaderContextProvider } from './core/context'

ReactDOM.render(
        <ConfigProvider locale={ru}>
            <Compose
                components={[
                    BrowserRouter,
                    LoaderContextProvider
                ]}
            >
                <App/>
            </Compose>
        </ConfigProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
