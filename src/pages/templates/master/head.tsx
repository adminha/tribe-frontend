import { Helmet } from 'react-helmet';

const Head = (props) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <body className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed min-vh-100" />
        </Helmet>
    );
}

export default Head;