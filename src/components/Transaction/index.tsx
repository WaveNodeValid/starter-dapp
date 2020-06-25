import * as React from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { PageState } from 'sharedComponents';

const Transaction = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  let explorerAddr = 'https://explorer.elrond.com/';

  const success = query.get('success');
  const txHash = query.get('txHash');
  const sender = query.get('sender');
  const nonce = query.get('nonce');

  return success === 'true' ? (
    <PageState
      svgComponent={<FontAwesomeIcon icon={faCheck} className="text-danger" />}
      title="Transaction success"
      description={
        <>
          Hash:{' '}
          <a
            href={`${explorerAddr}transactions/${txHash}`}
            {...{
              target: '_blank',
            }}
            className="tx-link"
            title="View in Explorer"
          >
            {txHash}
          </a>
          <br />
          Sender: {sender}
          <br />
          Nonce: {nonce}
        </>
      }
    />
  ) : (
    <PageState
      svgComponent={<FontAwesomeIcon icon={faTimes} className="text-danger" />}
      title="This failed"
      description="Try again."
    />
  );
};

export default Transaction;
