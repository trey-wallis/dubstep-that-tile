import React from 'react';

import { observer } from 'mobx-react';

import MenuStore from '../store/MenuStore';

const App = () => {
  return (
    <div className="App vw-100 vh-100 flex justify-center items-center">
      { MenuStore.renderMenu }
    </div>
  );
}

export default observer(App);
