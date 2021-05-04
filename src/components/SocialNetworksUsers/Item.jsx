import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OutsideClickHandler from 'react-outside-click-handler';

import { StatusAva } from '../StatusAva';
import styles from './SocialNetworksUsers.module.scss';
import { Button } from '../common/Form';
import { Icon } from '../common/Icon';
import { usePublisher } from '../../hooks/usePublisher';
import STATUSES from '../../config/status';

export const Item = ({ account: { id, title, status, logo } }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const { delPublisherPage, refreshPublisherPage } = usePublisher();

  const handleOutsideClick = () => {
    setMenuActive(false);
  };

  const handleToggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handleDelAccout = () => {
    delPublisherPage({ id });
  };

  const handleRefreshAccount = () => {
    refreshPublisherPage({ id });
  };

  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <StatusAva ava={logo} name={title} status={status} />
        </Col>
        <Col>
          <div className={styles.SocialNetworksUsersItemName}>{title}</div>
          <div className={styles.SocialNetworksUsersItemStatus}>{STATUSES[status].title}</div>
        </Col>
        <Col md="auto">
          {status !== STATUSES.enabled.id && (
            <Button styling="simple">
              <Icon name="refresh" onClick={handleRefreshAccount} />
            </Button>
          )}
        </Col>
        <Col md="auto">
          <Button styling="simple" onClick={handleToggleMenu}>
            <Icon name="menu" />
          </Button>
          {isMenuActive && (
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
              <Button
                className={styles.SocialNetworksPagesDeleteButton}
                styling="shadowed"
                onClick={handleDelAccout}
              >
                Удалить
              </Button>
            </OutsideClickHandler>
          )}
        </Col>
      </Row>
    </Container>
  );
};
