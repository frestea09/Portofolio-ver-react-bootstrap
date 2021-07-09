import React from 'react'

export const Article = (props) => {
    return (
        <React.Fragment>
            <h1>{props.data.heading}</h1>
        </React.Fragment>
    )
}
