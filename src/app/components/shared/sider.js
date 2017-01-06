import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import styles from './main.less'
import { config } from '../../../utils'

const getMenus = function (menuArray) {
  return menuArray.map(item => {
    if (!!item.items && item.items.length > 0) {
      return (
        <Menu.SubMenu key={item.name} title={<span>{item.icon ? <Icon type={item.icon} /> : ''} {item.displayName}</span>}>
          {getMenus(item.items)}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.name}>
          <Link to={item.url}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            {item.displayName}
          </Link>
        </Menu.Item>
      )
    }
  })
}

function Sider({ location, menu }) {
  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        <span>{config.logoText}</span>
      </div>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['Dashboard.Tenant']}>
        {getMenus(menu.items)}
      </Menu>
    </div>
  )
}

Sider.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.object,
}

export default Sider
