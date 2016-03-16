// actions.js
'use strict'

export const updateName = ({ dispatch }, contact) => {
  return dispatch('UPDATENAME', contact)
}
