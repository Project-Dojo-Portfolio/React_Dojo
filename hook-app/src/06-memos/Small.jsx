import { memo } from "react"
import Proptypes from "prop-types";

export const Small = memo(({value}) => {
    return (
        <small>{value}</small>
    )
})

Small.displayName = 'Small'
Small.propTypes = {
    value: Proptypes.number.isRequired
}