import React from 'react';
import { SocialNetworks } from '../../../components/SocialNetworks';
import { Heading } from '../../../components/common/Heading';
import { Main as MainLayout } from '../../../layouts/Main';
import initialsState from '../state';
import { SocialNetworksPages } from '../../../components/SocialNetworksPages';

export const Socials = ({ sideNavItems = initialsState.sideNavItems }) => (
  <MainLayout sideNavItems={sideNavItems}>
    <>
      <Heading type="h1">Добавьте соцсеть</Heading>
      <SocialNetworks />
      <SocialNetworksPages />
    </>
  </MainLayout>
);
