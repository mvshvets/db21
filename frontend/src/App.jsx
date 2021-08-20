import React from 'react'
import { Header } from './shared/components'
import { Routing } from './routing'
import { Layout } from 'antd'

export const App = () => {
    return (
        <Layout>
            <Header/>

            <Routing/>
        </Layout>
    )
}
