import { FC, SVGProps } from 'react';

export type SVGIcon = FC<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;
