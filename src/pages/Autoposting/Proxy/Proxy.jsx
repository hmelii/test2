import React from 'react';
import { Heading } from '../../../components/common/Heading';
import { Main as MainLayout } from '../../../layouts/Main';
import initialsState from '../state';

export const Proxy = ({ sideNavItems = initialsState.sideNavItems }) => (
  <MainLayout sideNavItems={sideNavItems}>
    <>
      <Heading type="h1">Прокси</Heading>
    </>
  </MainLayout>
);
