import './ContentTitle.scss'

import React from 'react'
import { block } from './ContentTitle.consts'

export const ContentTitle = React.memo(({ children, className, title }) => (
        <div className={block(null, [className])}>
            <h1>{title}</h1>

            {children}
        </div>
    )
)
