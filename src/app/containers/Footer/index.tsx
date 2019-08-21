import cn from 'classnames';
import React from 'react';

import Button from '../../components/Button';
import enhance from './enhance';
import sm from './styles.module.scss';

_Footer.defaultProps = {};
_Footer.displayName = 'Footer';

export type FooterProps = typeof _Footer.defaultProps;

const Footer = enhance(_Footer);

export default Footer;

function _Footer(props: FooterProps) {
  return (
    <div className={cn(sm.Footer)}>
      <div className={cn(sm.Footer_BorderedContent)}>
        <div className={cn(sm.Footer_LeftGroup)}>
          <div className={cn(sm.Footer_Copyright)}>
            © 2019 ToDo. All rights reserved.
          </div>
          <Button className={cn(sm.Footer_TermsConditions)} clean linkTo="/">
            Terms and Conditions
          </Button>
          <Button className={cn(sm.Footer_Policy)} clean linkTo="/">
            Privacy Policy
          </Button>
        </div>
        <div className={cn(sm.Footer_RightGroup)}>
          <Button
            clean
            iconPre="arrow-top-square"
            variant="linklike"
            className={sm.Footer_RightGroupItem}
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    </div>
  );
}
