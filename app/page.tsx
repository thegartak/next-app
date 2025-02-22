'use client';

import {Provider, useSelector} from 'react-redux';
import {store} from '@/app/store';
import { Home } from '@/app/ui/home/home';

export default  function HomePage() {


  return (
    
    <>
    <Provider store={store}>
        <Home />
        </Provider>
    </>
  );
}
