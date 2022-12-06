export enum TextType {
  Title = 'TITLE',
  Subtitle = 'SUBTITLE',
  Body = 'BODY',
  Cta = 'CTA',
  InputError = 'INPUT_ERROR',
  Caption = 'CAPTION',
  Caption2 = 'CAPTION_2',
  BodySmall = 'BODY_SMALL',
  Caption3 = 'CAPTION_3',
}

interface TypographyFields {
  fontSize: number;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  // extra params like fontFamily, lineHeight & letterSpacing can also be added
}

type Typography = Record<TextType, TypographyFields> & {
  [key: string]: TypographyFields;
};

export const TYPOGRAPHY: Readonly<Typography> = {
  TITLE: {
    fontSize: 24,
    fontWeight: '600',
  },
  SUBTITLE: {
    fontSize: 18,
    fontWeight: '400',
  },
  CAPTION: {
    fontSize: 20,
    fontWeight: '700',
  },
  BODY: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  BODY_SMALL: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  CTA: {
    fontSize: 16,
    fontWeight: '600',
  },
  INPUT_ERROR: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  CAPTION_2: {
    fontSize: 16,
    fontWeight: '700',
  },
  CAPTION_3: {
    fontSize: 14,
    fontWeight: '700',
  },
};
