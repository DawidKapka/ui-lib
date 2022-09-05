import { default as Card } from '../../../components/modular/card/Card';
import {CardArgs} from "@/components/modular/card/card.types";

export default {
    title: 'Modular/Card',
    component: Card,
};

const Template = (args: CardArgs) => ({
    components: { Card },
    setup() {
        return { args }
    },
    template: '<Card v-bind="args">'
});

export const Primary: any = Template.bind({});
(Primary.args as CardArgs) = {
    title: 'Card Title',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    imgUrl: 'static/media/src/assets/template-image.jpg'
}
