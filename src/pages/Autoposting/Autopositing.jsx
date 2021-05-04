import React from 'react';
import { Main as MainLayout } from '../../layouts/Main';
import { Heading } from '../../components/common/Heading';
import initialsState from './state';

export const Autoposting = ({ sideNavItems = initialsState.sideNavItems }) => (
  <MainLayout sideNavItems={sideNavItems}>
    <>
      <Heading type="h1">Автопостинг</Heading>
    </>
  </MainLayout>
);
