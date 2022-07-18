import React from 'react';
// @ts-ignore Ignore until we release v10
import {
  DisplayText,
  Heading,
  Subheading,
  Caption,
  TextStyle,
} from '@shopify/polaris';

export function App() {
  const size = 'small';

  return (
    <>
      <DisplayText size="extraLarge">Display text</DisplayText>
      <DisplayText size="large">Display text</DisplayText>
      <DisplayText size="medium">Display text</DisplayText>
      <DisplayText size="small">Display text</DisplayText>
      <DisplayText size={size}>Display text</DisplayText>
      <Heading element="h1">Heading</Heading>
      <Heading>Heading</Heading>
      <Subheading element="h2">Subheading</Subheading>
      <Subheading>Subheading</Subheading>
      <Caption>Caption</Caption>
      <TextStyle variation="strong">Strong</TextStyle>
      <TextStyle variation="positive">Positive</TextStyle>
      <TextStyle variation="negative">Negative</TextStyle>
      <TextStyle variation="warning">Warning</TextStyle>
      <TextStyle variation="code">Code</TextStyle>
    </>
  );
}
