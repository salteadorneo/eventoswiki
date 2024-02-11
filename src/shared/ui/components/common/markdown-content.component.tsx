import type { FC } from 'react'
import './markdown-content.css'

interface Props {
  content: string
}
export const MarkdownContent: FC<Props> = props => {
  const { content } = props
  return <article className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
}
