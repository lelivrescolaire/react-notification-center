import React from 'react'

const NotificationHeader = props => (
  <div className="rn-header">
    <h4>{props.children}</h4>
  </div>
)

NotificationHeader.displayName = 'NotificationHeader'

export default NotificationHeader
