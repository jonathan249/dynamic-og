import { ImageResponse } from 'next/og';
import type { ReactNode } from 'react';

export type GenerateOgImageProps = {
  width: number;
  height: number;
  debug: boolean;
  alt: string;
  children: ReactNode;
  emoji:
    | 'blobmoji'
    | 'fluent'
    | 'fluentFlat'
    | 'noto'
    | 'openmoji'
    | 'twemoji'
    | undefined;
  className?: string;
  headers?: Record<string, string>;
};


export const runtime = 'edge';
export const contentType = 'image/png';

export function generateOgImage({
  props,
}: {
  props: GenerateOgImageProps;
}): ImageResponse {
  const { width, height, debug, children, emoji, className, headers } = props;

  return new ImageResponse(<div className={className}>{children}</div>, {
    width,
    height,
    debug,
    emoji,
    headers,
  });
}
