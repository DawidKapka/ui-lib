import { default as Clock } from '../../../components/random/clock/Clock';

export default {
    title: 'Random/Clock',
    component: Clock,
}

const Template = (args: any) => ({
    components: { Clock },
    setup() {
        return { args }
    },
    template: '<Clock v-bind="args">'
})

export const Primary: any = Template.bind({});
Primary.args = {

}
