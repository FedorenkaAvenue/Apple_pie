import App, { AppInitialProps } from 'next/app';

import '@styles/_reset.sass';
import '@styles/index.sass';

import { withRedux } from '@store/index';
// import { initUserAuth } from '@actions/user';

class ChokoPie extends App<AppInitialProps> {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        const { dispatch } = ctx.store;

        // dispatch(initUserAuth());

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return <Component { ...pageProps } />;
    }
}

export default withRedux(ChokoPie);
