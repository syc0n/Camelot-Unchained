/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import { StyleSheet, css, StyleDeclaration } from 'aphrodite';
import ItemIcon from './ItemIcon';

export interface EmptyItemStyle extends StyleDeclaration {
  EmptyItem: React.CSSProperties;
}

export const defaultEmptyItemStyle: EmptyItemStyle = {
  EmptyItem: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
};

export const EmptyItem = (props: {styles?: Partial<EmptyItemStyle>}) => {
  const ss = StyleSheet.create(defaultEmptyItemStyle);
  const custom = StyleSheet.create(props.styles || {});
  return (
    <div className={css(ss.EmptyItem, custom.EmptyItem)} >
      {/* REQUIRED EMPTY SPACE HERE -- OTHERWISE FORMATTING GETS FUCKED*/}
      <ItemIcon url={' '} />
    </div>
  );
};

export default EmptyItem;
