import * as React from "react"
import cn from 'classnames'

import s from './CourseEditorItem.module.css';

interface IProps {
  className?: string;
  items: any[]
}

export const CourseEditorItem = ({ className, items = [] }) => {
  return (
    <div className={cn(s.courseEditorItem, className)}></div>
  )
}
