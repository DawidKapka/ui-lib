import {ButtonSize} from "@/stories/atomic/button/button-args.type";

export const mapToSize = (size: ButtonSize) => {
    switch (size) {
        case 'mini':
            return '48px';
        case 'small':
            return '96px';
        case 'medium':
            return '128px';
        case 'large':
            return '256px';
        default:
            return '96px';
    }
}
