import './ButtonsToolbar.scss'

import React from 'react'
import { block } from './ButtonsToolbar.consts'

/** Панель инструментов, группировка для кнопок */
export const ButtonsToolbar = React.memo(
    ({ children, align = 'flex-end', className, noMargin }) => {
        return (
            <div
                className={block({ 'no-margin': noMargin }, [className])}
                style={{ justifyContent: align }}
            >
                {children}
            </div>
        )
    }
)
