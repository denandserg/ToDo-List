import axios from 'axios';
import cn from 'classnames';
import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import SelectProjectField from '../../components/SelectProjectField';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {
  isSign?: boolean;
}

const Header = enhance<Props, Props>(_Header);

export default Header;

function _Header(props: Props) {
  function handleSignIn() {
    axios
      .get(
        `https://todoist.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=task:add,data:read_write,data:delete&state=secretstring`,
        {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*'
          }
        }
      )
      .then(data => console.log(data));
  }

  return (
    <div className={cn(sm.Header)}>
      <div className={sm.Header_LeftGroup}>
        <Button clean linkTo={RoutePaths._()}>
          <div className={sm.Header_LeftGroupLogo}>
            <Logo />
          </div>
        </Button>
      </div>
      <div className={sm.Header_CenterGroup}>
        <SelectProjectField />
      </div>
      {/* {isSign && ( */}
      {/*  <div className={cn(tf.pageHeader, sm.Header_RightGroupTitle)}> */}
      {/*    Hi, {userName && userName.displayName} */}
      {/*  </div> */}
      {/* )} */}
      <div className={sm.Header_RightGroup}>
        <Button iconPre="user" variant="standard" onClick={handleSignIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
