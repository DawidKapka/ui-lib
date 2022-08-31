// Button.stories.js

import Button from './Button.vue';
import {ButtonArgs} from "@/stories/atomic/button/button-args.type";

export default {
    title: 'Atomic/Button',
    component: Button,
};

const Template = (args: ButtonArgs) => ({
    components: { Button },
    setup() {
        return { args };
    },
    template: '<Button v-bind="args" />',
});

export const Primary: any = Template.bind({});
(Primary.args as ButtonArgs) = {
    label: 'Button',
    size: 'medium',
};
