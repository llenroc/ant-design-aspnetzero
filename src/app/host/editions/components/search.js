import React, { PropTypes } from 'react'
import { Form, Input, Button, Select } from 'antd'

const search = ({
  onAdd
}) => {
  return (
    <div style={{display: 'flex', marginBottom: '20px'}}>
      <div style={{flex: '1'}}></div>
      <Button type="ghost" style={{width: '100px'}} onClick={ onAdd }>添加</Button>
    </div>
  )
}

search.propTypes = {
  onAdd: PropTypes.func,
}

export default Form.create()(search)
