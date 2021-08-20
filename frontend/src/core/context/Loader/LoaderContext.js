import React from 'react'
import { NotImplementedError } from '../NotImplementedError'

export const LoaderContext = React.createContext({
    loaderState: false,
    setLoaderState: state => {
        throw new NotImplementedError()
    },
})
