import React from 'react';

import { ConfirmButton } from './style';

interface IButton {
  value: string;
}

export const Button: React.FC<IButton> = ({ value }) => {
  return <ConfirmButton>{value}</ConfirmButton>;
};
