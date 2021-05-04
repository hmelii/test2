import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Main.module.scss';
import { Header } from '../blocks/Header';
import { Content } from '../blocks/Content/Context';
import { Side } from '../blocks/Side';
import { ModalRoot } from '../../components/modals';
import { Loader } from '../../components/common/Loader';
import { Notification } from '../../components/common/Notification';

export const Main = ({ children, sideNavItems = null }) => (
  <>
    <Header className={styles.Header} />
    <Container fluid className={styles.Wrapper}>
      <Row noGutters>
        <Col md={{ order: 2 }} as={Content} className={styles.Content}>
          {children}
        </Col>
        {sideNavItems && (
          <Col
            md={{ span: 'auto', order: 1 }}
            as={Side}
            className={styles.Side}
            sideNavItems={sideNavItems}
          />
        )}
      </Row>
    </Container>
    <ModalRoot />
    <Loader />
    <Notification />
  </>
);
