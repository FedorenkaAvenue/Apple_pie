declare module "*.pug" {
    import { compileTemplate } from 'pug'
    const content: compileTemplate;
    export default content;
}

declare module '*.env' {
    interface IEnvVar {
        [variable: string]: string
    }

    const variable: IEnvVar;

    export default variable;
}

declare module '*.yaml' {
    const data: any;
    export default data;
}
