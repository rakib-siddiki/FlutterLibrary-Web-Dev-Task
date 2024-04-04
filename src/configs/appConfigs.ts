import { Nunito_Sans } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'FlutterLibrary Web Dev Task';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - FlutterLibrary`;
export const SITE_DESCRIPTION_DEFAULT =
    'FlutterLibrary Web Dev Task Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '800', '900'],
    variable: '--font-Nunito-sans'
});
