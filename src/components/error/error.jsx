import { Alert } from "@mui/material"

const Error = ({
    text
}) => {
    return (
       <>
        <br />
        <Alert severity="error">{text}</Alert>
       </>
    )
}

export default Error