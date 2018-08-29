import React from 'react';
import { MarsLogo } from '@core/lib-react/views';
import './Header.scss';

const Header = () => (
  <div styleName="header-wrapper">
    <MarsLogo />
    <h1>
Hello from Mars
    </h1>
  </div>
);

export default Header;
