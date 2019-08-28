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
  async function handleSignIn() {
    window.location.href = `https://todoist.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=task:add,data:read_write,data:delete&state=secretstring`;
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
      <div className={sm.Header_RightGroup}>
        <Button iconPre="user" variant="standard" onClick={handleSignIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
