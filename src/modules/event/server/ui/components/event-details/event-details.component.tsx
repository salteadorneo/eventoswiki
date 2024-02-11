import { MarkdownContent } from '@ui/components/common/markdown-content.component'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/components/common/tabs.component'
import { cn } from '@ui/utils/shadcn/utils'
import type { FC } from 'react'
import styles from './event-details.module.css'

interface Props {
  content: string
}
export const EventDetails: FC<Props> = props => {
  const { content } = props
  return (
    <Tabs defaultValue="information">
      <div className="w-full overflow-auto">
        <TabsList>
          <TabsTrigger value="information">General</TabsTrigger>
          <TabsTrigger value="location">Localización</TabsTrigger>
          <TabsTrigger value="agenda">Agenda</TabsTrigger>
          <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent className={cn(styles['tab-content'])} value="information">
        <MarkdownContent content={content} />
      </TabsContent>
      <TabsContent value="location"></TabsContent>
    </Tabs>
  )
}
