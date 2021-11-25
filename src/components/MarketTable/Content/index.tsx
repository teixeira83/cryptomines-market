import React from 'react';

import { Button } from '../../Button';

import { Container, WorkerContainer, WorkerImg } from './style';

import Worker from '../../../assets/1.png';

export const Content: React.FC = () => {
  return (
    <Container>
      <WorkerContainer>
        <WorkerImg src={Worker} alt="worker-cryptominers" />

        <Button value="0.0141$ETERNAL" />
      </WorkerContainer>
    </Container>
  );
};
