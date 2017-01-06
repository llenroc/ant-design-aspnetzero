import { fetch } from '../../../utils'
import qs from 'qs'

export async function query() {
  return fetch.post('/role/GetRoles', {
  });
}

export async function getRoleForEdit(params) {
  return fetch.post('/role/GetRoleForEdit', {
    body: JSON.stringify(params),
  })
}

export async function createOrUpdateRole(params) {
  return fetch.post('/role/CreateOrUpdateRole', {
    body: JSON.stringify(params),
  })
}

export async function remove(params) {
  return fetch.post('/role/DeleteRole', {
    body: JSON.stringify(params),
  })
}

