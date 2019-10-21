import React from 'react';
import BurnerUICore, { Page, BurnerUIComponents } from '@burner-wallet/ui-core';

// import burnerComponents from './components';
// import Header from './components/Header';
// import Loading from './components/Loading';
// import Scanner from './components/Scanner';
import Template from './Template';

// import AdvancedPage from './pages/AdvancedPage';
// import ConfirmPage from './pages/ConfirmPage';
import HomePage from './pages/HomePage';
// import NewPKPage from './pages/NewPKPage';
// import ReceiptPage from './pages/ReceiptPage';
// import ReceivePage from './pages/ReceivePage';
// import SendPage from './pages/SendPage';


export default class ClassicUI extends BurnerUICore {
  getPages(): Page[] {
    return [
      { path: '/', component: HomePage },
      // { path: '/pk', component: NewPKPage },
      // { path: '/receive', component: ReceivePage },
      // { path: '/send', component: SendPage },
      // { path: '/confirm', component: ConfirmPage },
      // { path: '/receipt/:asset/:txHash', component: ReceiptPage },
      // { path: '/advanced', component: AdvancedPage },
    ];
  }

  burnerComponents() {
    // return burnerComponents;
    return {} as BurnerUIComponents;
  }

  content() {
    return (
      <Template theme={this.props.theme}>
        {/*<Loading />
        <Scanner />
        <Header title={this.props.title} />*/}
        {this.router()}
      </Template>
    );
  }
}
