import React from 'react';
import {storiesOf} from '@storybook/react';

import CsvCreator from '../src';

const headers = [{
  id: 'first',
  display: '果物'
}, {
  id: 'second',
  display: '動物'
}];

const rows = [{
  first: 'りんご',
  second: '猫'
}, {
  first: 'みかん',
  second: '犬'
}];

storiesOf('CsvCreator', module)
  .add('custom filename', () => {
    return (
      <CsvCreator
        filename='my_cool_csv'
        headers={headers}
        rows={rows}
        text='Download Stuff'
      />
    );
  })
  .add('disable downloading', () => {
    return (
      <CsvCreator
        disabled
        headers={headers}
        rows={rows}
        text='Download Stuff'
      />
    );
  })
  .add('remove the header', () => {
    return (
      <CsvCreator
        headers={headers}
        noHeader
        rows={rows}
        text='Download Stuff'
      />
    );
  })
  .add('with children', () => {
    return (
      <CsvCreator
        headers={headers}
        rows={rows}
      >
        <p>Download CSV</p>
      </CsvCreator>
    );
  })
  .add('with text', () => {
    return (
      <CsvCreator
        headers={headers}
        rows={rows}
        text='Download Stuff'
      />
    );
  });
