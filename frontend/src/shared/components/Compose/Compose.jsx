import React from 'react'

export const Compose = React.memo(({ components = [], children }) => {
    return (
        <>
            {components.reduceRight((acc, Comp) => (
                <Comp>{acc}</Comp>
            ), children)}
        </>
    )
})
