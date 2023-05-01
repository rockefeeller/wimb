import { Box } from "@mui/material"
import { Component } from "react"

export default class LineItem extends Component {
    render() {
        return (
            <>
            <Box>
                <p>{this.props.data}</p>
            </Box>
            </>
        )
    }
}