import { FC, SVGProps } from 'react';

import { IContentLoaderProps } from 'react-content-loader';

export type SVGIcon = FC<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export interface LoadableComponent {
  isLoading?: boolean;
  contentLoaderProps?: IContentLoaderProps;
  rect?: SVGProps<SVGRectElement>;
}
