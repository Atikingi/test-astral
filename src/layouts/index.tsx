import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getName } from '../store/selectors/auth';

const Layout = () => {
  const username = useSelector(getName);

  return (
    <Page>
      <Header name={username} />
      <Body>
        <Outlet />
      </Body>
      <Footer text={'Created by @Atikingi'} />
    </Page>
  );
};

export default Layout;
