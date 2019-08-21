import cn from 'classnames';
import React from 'react';

import sm from './styles.module.scss';

export interface LoaderProps {
  noBgn?: boolean;
}

export default function Loader(props: LoaderProps) {
  const { noBgn = false } = props;

  return (
    <div className={cn(sm.Loader, { [sm.Loader__WithBgn]: !noBgn })}>
      <div className={sm.Loader_Content}>
        <RingLoader />
      </div>
    </div>
  );
}

function RingLoader() {
  return (
    <div className={sm.RingLoader}>
      <span className={sm.RingLoader_Ring1} />
      <span className={sm.RingLoader_Ring2} />
      <span className={sm.RingLoader_Ring3} />
      <span className={sm.RingLoader_Ring4} />
    </div>
  );
}
