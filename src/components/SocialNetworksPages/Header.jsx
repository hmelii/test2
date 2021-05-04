import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './SocialNetworksPages.module.scss';
import { Heading } from '../common/Heading';
import { NetworkIcon } from '../common/NetworkIcon';
import { Button } from '../common/Form';
import { Icon } from '../common/Icon';

import config from '../../api/config';
import { useModal } from '../../hooks/useModal';
import { INSTAGRAM_AUTH } from '../../redux/types';

export const Header = ({ network }) => {
  const { modalShow } = useModal();

  const handleClick = () => {
    modalShow(INSTAGRAM_AUTH, {
      title: 'Подключение Instagram аккаунта',
    });
  };

  return (
    <Container fluid className={styles.SocialNetworksPagesHeader}>
      <Row noGutters>
        <Col>
          <Heading
            type="h3"
            prefix={
              <NetworkIcon
                className={styles.SocialNetworksPagesHeadingIco}
                name={network}
                size="m"
              />
            }
          >
            {config.SOCIALS_NETWORKS[network]}
          </Heading>
        </Col>
        <Col className={styles.SocialNetworksPagesHeaderRight}>
          <Button
            className={styles.SocialNetworksPagesButton}
            prefix={<Icon name="plus" />}
            onClick={handleClick}
          >
            Добавить страницу
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
