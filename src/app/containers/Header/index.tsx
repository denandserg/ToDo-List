import cn from 'classnames';
import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {
  isSign?: boolean;
}

const Header = enhance<Props, Props>(_Header);

export default Header;

function _Header(props: Props) {
  return (
    <div className={cn(sm.Header)}>
      <div className={sm.Header_LeftGroup}>
        <Button clean linkTo={RoutePaths._()}>
          <div className={sm.Header_LeftGroupLogo}>
            <Logo />
          </div>
        </Button>
      </div>
      {/* {isSign && ( */}
      {/*  <div className={cn(tf.pageHeader, sm.Header_RightGroupTitle)}> */}
      {/*    Hi, {userName && userName.displayName} */}
      {/*  </div> */}
      {/* )} */}
      <div className={sm.Header_RightGroup}>
        <Button iconPre="user" variant="standard">
          Sign In
        </Button>
      </div>
    </div>
  );
}
