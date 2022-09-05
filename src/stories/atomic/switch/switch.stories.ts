import { default as Switch } from '../../../components/atomic/switch/Switch';
import {SwitchArgs} from "@/components/atomic/switch/switch.types";

export default {
    title: 'Atomic/Switch',
    component: Switch,
    argTypes: {
        theme: { control: { type: 'radio', options: ['default', 'positive-negative']}}
    }
};

const Template = (args: SwitchArgs) => ({
    components: { Switch },
    setup() {
        return { args };
    },
    template: '<Switch v-bind="args">',
})

export const Primary: any = Template.bind({});
(Primary.args as SwitchArgs) = {
    theme: 'default'
};

export const PositiveNegative: any = Template.bind({});
(PositiveNegative.args as SwitchArgs) = {
    ...Primary.args,
    theme: 'positive-negative'
}

