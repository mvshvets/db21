import './PageContent.scss'

import React from 'react'
import { block } from './PageContent.consts'

export const PageContent = React.memo(
    ({ children, className }) => (
        <section className={block(null, [className])}>
            {children}
        </section>
    )
)
