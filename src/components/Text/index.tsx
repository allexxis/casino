import useTranslations from 'next-translate/useTranslation';
import { FC } from 'react';

export type TextTypes =
   | 'h1'
   | 'h2'
   | 'h3'
   | 'p'
   | 'subtitle'
   | 'p-opaque'
   | 'p-bold';
export interface TextProps {
   className?: string;
   text?: string;
   intl?: string;
   intlSelector?: string;
   type?: TextTypes;
}
/**
 * @param text - string
 * @param intl - string
 * @param intlSelector - string
 * @returns - string
 * @description - This component is used to display text  @text is used  also as a fallback.
 * @example
 * <Text text="Hello World" />
 * <Text intl="page.pos" intlSelector="PosLayout" />
 *
 **/
const Text: FC<TextProps> = ({
   text,
   intl,
   intlSelector,
   type = 'p',
   className,
}) => {
   const { t } = useTranslations('common');
   let intlText = '';
   if (intl) {
      intlText = t(intl);
   }
   if (intl && intlText.includes(intl) && text) {
      intlText = text;
   } else if (!intl && text) {
      intlText = text;
   }

   switch (type) {
      case 'h1':
         return (
            <h1
               className={
                  className +
                  ' text-text-title font-bold text-2xl leading-normal'
               }
            >
               {intlText}
            </h1>
         );
      case 'h2':
         return (
            <h2 className={className + ' text-text-title font-bold text-xl'}>
               {intlText}
            </h2>
         );
      case 'h3':
         return <h3 className={className}>{intlText}</h3>;
      case 'subtitle':
         return <h4 className={className}>{intlText}</h4>;
      case 'p':
         return (
            <p
               className={
                  className + ' text-sm leading-3 font-normal text-text-title'
               }
            >
               {intlText}
            </p>
         );
      case 'p-opaque':
         return (
            <p
               className={
                  className + ' text-sm leading-3 font-normal text-text-opacity'
               }
            >
               {intlText}
            </p>
         );
      case 'p-bold':
         return (
            <p
               className={
                  className + ' text-sm leading-3 font-bold text-text-title'
               }
            >
               {intlText}
            </p>
         );

      default:
         return (
            <p
               className={
                  className + ' text-sm leading-3 font-normal text-text-opacity'
               }
            >
               {intlText}
            </p>
         );
   }
};

export default Text;
