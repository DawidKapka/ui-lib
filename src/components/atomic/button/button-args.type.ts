export interface ButtonArgs {
    label: string
    size: ButtonSize,
    color: ButtonColor;
}

export type ButtonSize = 'mini' | 'small' | 'medium' | 'large';

export type ButtonColor = 'primary' | 'secondary' | 'positive' | 'negative'
