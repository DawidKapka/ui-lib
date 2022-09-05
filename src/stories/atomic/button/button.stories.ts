import {default as Button} from "../../../components/atomic/button/Button";
import {ButtonArgs} from "@/components/atomic/button/button-args.type";

export default {
    title: 'Atomic/Button',
    component: Button,
    argTypes: {
        size: { control: { type: 'select', options: ['mini', 'small', 'medium', 'large']}},
        color: { control: { type: 'select', options: ['primary', 'secondary', 'positive', 'negative']}}
    }
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
    color: 'primary'
};

export const Secondary: any = Template.bind({});
(Secondary.args as ButtonArgs) = {
    ...Primary.args,
    color: 'secondary'
};

export const Positive: any = Template.bind({});
(Positive.args as ButtonArgs) = {
    ...Primary.args,
    color: 'positive'
};

export const Negative: any = Template.bind({});
(Negative.args as ButtonArgs) = {
    ...Primary.args,
    color: 'negative'
};

export const Mini: any = Template.bind({});
(Mini.args as ButtonArgs) = {
    ...Primary.args,
    label: 'X',
    size: "mini",
    color: "secondary"
}

export const Large: any = Template.bind({});
(Large.args as ButtonArgs) = {
    ...Primary.args,
    size: "large",
    color: "secondary"
}
