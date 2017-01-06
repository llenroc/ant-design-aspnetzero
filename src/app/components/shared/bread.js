import React, { PropTypes } from 'react'
import { Breadcrumb, Icon } from 'antd'
import styles from './main.less'
import { config } from '../../../utils'

const pathSet = []
// const getPathSet = function (menuArray, parentPath) {
//   parentPath = parentPath || '/'
//   menuArray.map(item => {
//     pathSet[(parentPath + item.key).replace(/\//g, '-').hyphenToHump()] = {
//       path: parentPath + item.key,
//       name: item.name,
//       icon: item.icon || '',
//     }
//     if (!!item.child) {
//       getPathSet(item.child, parentPath + item.key + '/')
//     }
//   })
// }
// getPathSet(menu)

function Bread({ location, menu }) {
  let pathNames = []
  location.pathname.substr(1).split('/').map((item, key) => {
    if (key > 0) {
      pathNames.push((pathNames[key - 1] + '-' + item))
    } else {
      pathNames.push(('-' + item))
    }
  })
  //console.log(pathNames);
  // const breads = pathNames.map((item, key) => {
  //   return (
  //     <Breadcrumb.Item key={key} {...pathNames.length - 1 == key ? '' : { href: '#' + pathSet[item].path }}>
  //       {pathSet[item] && pathSet[item].icon
  //         ? <Icon type={pathSet[item].icon} />
  //         : ''}
  //       <span>{pathSet[item] ? pathSet[item].name : ''}</span>
  //     </Breadcrumb.Item>
  //   )
  // })

  return (
    <div className={styles.bread}>
      <Breadcrumb>
        <Breadcrumb.Item href="#/"><Icon type="home" />
          <span>主页</span>
        </Breadcrumb.Item>

      </Breadcrumb>
    </div>
  )
}

Bread.propTypes = {
  location: PropTypes.object,
  menu: PropTypes.object,
}

export default Bread
