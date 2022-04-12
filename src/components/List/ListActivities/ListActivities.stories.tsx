import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListActivities as ListActivitiesComponent, ListActivitiesProps } from './ListActivities'

const ListActivitiesStory: ComponentMeta<typeof ListActivitiesComponent> = {
  title: 'Inputs/ListActivities',
  component: ListActivitiesComponent
}
export default ListActivitiesStory

const Template: ComponentStory<typeof ListActivitiesComponent> = (args) => <ListActivitiesComponent {...args} />

export const ListActivities = Template.bind({})
const ListActivitiesArgs: ListActivitiesProps = {
  day: '2022-04-11',
  tasks: [
    {
      title: 'Task 1',
      createdAt: '2020-01-01',
      entityId: Math.random().toString(),
      scheduledFor: '2022-04-11',
      status: 'Pending',
      userID: 'user123'
    }
  ]
}
ListActivities.args = ListActivitiesArgs