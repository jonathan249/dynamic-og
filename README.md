# dynamic-og

Dynamically generate images on the edge

Documentation for `generateOgImage` Function The generateOgImage function is a function that accepts an object of type OGFnProps as a parameter and returns an ImageResponse object.

## Usage

```tsx
import { generateOgImage, type GenerateOgImageProps } from 'dynamic-og';

const props: GenerateOgImageProps = {
  width: 1200,
  height: 630,
  debug: false,
  children: <div>Hello World</div>,
  emoji: 'twemoji',
  className: 'custom-class',
};

const imageResponse = generateOgImage({ props });
```

## Parameters

The function accepts an object with the following properties:

- ``props``: An object of type OGFnProps with the following properties:
- ``width``: The width of the image.
- ``height``: The height of the image.
- ``debug``: A boolean value indicating whether debug mode is enabled or not.
- ``children``: React nodes to be rendered as children of the image.
- ``emoji``: The type of emoji to use. Can be one of the following values: 'blobmoji', 'fluent', 'fluentFlat', 'noto', 'openmoji', 'twemoji'.
- ``className``: Style the wrapping container of the image respone

## Return Value
The function returns an ImageResponse object that represents the generated image.
