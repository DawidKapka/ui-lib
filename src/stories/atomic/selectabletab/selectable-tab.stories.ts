import { default as SelectableTab } from '../../../components/atomic/selectabletab/SelectableTab';
import { SelectableTabArgs } from '../../../components/atomic/selectabletab/selectable-tab.types';

export default {
    title: 'Atomic/SelectableTab',
    component: SelectableTab,
    argTypes: {
        selected: { control: {type: 'boolean'}},
        theme: { control: { type: 'radio', options: ['primary', 'secondary']}}
    }
}

const Template = (args: SelectableTabArgs) => ({
    components: { SelectableTab },
    setup() {
        return { args }
    },
    template: '<selectable-tab v-bind="args"></selectable-tab>'
})

export const Primary: any = Template.bind({});
(Primary.args as SelectableTabArgs) = {
    selected: false,
    theme: 'primary'
}

export const Selected: any = Template.bind({});
(Selected.args as SelectableTabArgs) = {
    ...Primary.args,
    selected: true
}

export const Secondary: any = Template.bind({});
(Secondary.args as SelectableTabArgs) = {
    ...Primary.args,
    theme: 'secondary'
}
