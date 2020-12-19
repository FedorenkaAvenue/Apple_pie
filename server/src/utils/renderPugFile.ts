import pug from 'pug';

export default function(pugFile: string, variables?: object): string {
    return pug.compileFile(`./src/static/markupTemplates/${pugFile}.pug`)(variables);
}
