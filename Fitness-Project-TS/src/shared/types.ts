export enum SelectedPageEnum {
    HOME = 'home',
    BENEFITS = 'benefits',
    OURClasses = 'ourclasses',
    CONTACTUS = 'contactus'
}

export interface IBenefitType {
    icon: JSX.Element,
    title: string,
    description: string
}

export interface IClassType{
    name: string;
    description?: string;
    image: string;
}