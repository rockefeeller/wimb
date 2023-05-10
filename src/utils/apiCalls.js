import axios from "axios"

export const login = async () => {
    const {data: response} = await axios.get(
        process.env.EMT_BASE_URL ?? `https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/`,
        {
            headers: {
                email: process.env.USER_EMAIL ?? 'alejandro.gallardo.cuentas@gmail.com',
                password: process.env.USER_PASS ?? 'Ro123456.'
            }
        })
    return await response.data[0]
}

export const getTimeArrival = async (stopNumber, accessToken) => {
    const {data: response} = await axios.post(
        process.env.EMT_BASE_URL ?? `https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/${stopNumber}/arrives/`,
        {
            cultureInfo: 'ES',
            Text_StopRequired_YN: 'Y',
            Text_EstimationsRequired_YN: 'Y',
            Text_IncidencesRequired_YN: 'N',
            DateTime_Referenced_Incidencies_YYYYMMDD: '????????'
        },
        {
            headers: {
               accessToken,
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
            },
        })
    return response.data
}

export const getStopInfo = async (stopNumber, accessToken) => {
    const {data: response} = await axios.post(
        process.env.EMT_BASE_URL ?? `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stopNumber}/detail/`,
        {
            headers: {
               accessToken,
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
            },
        })
    return response.data
}