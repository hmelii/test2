import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { usePublisher } from '../../hooks/usePublisher';
import { Item } from './Item';
import { SocialNetworksFilters } from '../SocialNetworksFilters';

import styles from './SocialNetworksPages.module.scss';

export const SocialNetworksPages = () => {
  const { publisher } = usePublisher();

  return (
    <div className={styles.SocialNetworksPages}>
      <Container fluid className={styles.SocialNetworksPagesBody}>
        <Row noGutters>
          <Col md={2}>
            <SocialNetworksFilters networks={publisher} />
          </Col>
          <Col md={8}>
            {Object.keys(publisher).map((network) => (
              <Item key={network} network={network} accounts={publisher[network]} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
