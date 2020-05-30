import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { PageManagerStoreContext } from '../../App';
import Navigation from '../navigation';
import { Main, PageWrapper } from './styles';

const Page: FC = observer(() => {
  const { pageManagerStore } = useContext(PageManagerStoreContext);
  if (!pageManagerStore) {
    return null;
  }

  const { pages, setPageActive } = pageManagerStore;

  return (
    <Main>
      <Navigation pages={pages} handleOnClick={setPageActive} />
      <React.Fragment>
        {pages?.map(({ active, background, element, name }) => (
          <React.Fragment key={name}>
            <PageWrapper
              ref={element}
              bgImage={background}
              className={active ? 'active' : 'inactive'}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    </Main>
  );
});

export default Page;
