import React from 'react';
import { Heading } from '../../../components/common/Heading';
import { Main as MainLayout } from '../../../layouts/Main';
import initialsState from '../state';

export const PostFeed = ({ sideNavItems = initialsState.sideNavItems }) => (
  <MainLayout sideNavItems={sideNavItems}>
    <>
      <Heading type="h1">Лента постов</Heading>
    </>
  </MainLayout>
);
