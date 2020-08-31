import React from 'react'
import cn from 'classnames'

const Tag = props => <span className={cn('notification-tag', props.type)}>{props.children}</span>

Tag.displayName = 'NotificationTagComponent'

export default Tag
