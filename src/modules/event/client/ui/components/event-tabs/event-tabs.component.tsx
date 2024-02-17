import { EventTab } from '@event/server/ui/types/event-tabs'
import { Tabs, TabsList, TabsTrigger } from '@ui/components/common/tabs/tabs.component'
import { navigate } from 'astro/virtual-modules/transitions-router.js'
import type { FC } from 'react'

interface Props {
  tab?: EventTab
}
export const EventTabs: FC<Props> = props => {
  return (
    <Tabs
      defaultValue={EventTab.Information}
      value={props.tab}
      onValueChange={tab => {
        navigate(window.location.pathname + `?tab=${tab}`)
      }}
    >
      <TabsList className="mb-4 w-full justify-start overflow-auto">
        <TabsTrigger value={EventTab.Information}>General</TabsTrigger>
        <TabsTrigger value={EventTab.Location}>Dónde</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
