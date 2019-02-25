import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script src="https://use.typekit.net/bwo5nqc.js" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: 'try{Typekit.load({ async: true });}catch(e){}',
                    }}
                />
            </html>
        );
    }
}
