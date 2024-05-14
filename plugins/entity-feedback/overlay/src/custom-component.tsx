import React from 'react';
import {InfoCard} from '@backstage/core-components';
import { LikeDislikeButtons } from '@backstage/plugin-entity-feedback';

export const CustomLikeDislikeCard = () => (
    <InfoCard title="Rate this entity">
       <LikeDislikeButtons/>
    </InfoCard>
  );