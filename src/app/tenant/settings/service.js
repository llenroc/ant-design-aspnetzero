import { post, get, request } from '../../../utils'

export async function query(params) {
    return post('/tenantSettings/GetAllSettings', {
        body: JSON.stringify(params),
    })
}
export async function queryTimeZones(params) {
    return post('/timing/GetTimezones', {
        body: JSON.stringify(params),
    })
}
export async function updateAllSettings(params) {
    return post('/tenantSettings/UpdateAllSettings', {
        body: JSON.stringify(params),
    })
}


