import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navigation from "./Components/Commons/Navigation/Navigation";
import Footer from "./Components/Commons/Footer/footer";
import Faq from "./Components/Pages/faq";
import LegaleMention from "./Components/Pages/legaleMention";
import PolitiqueConf from "./Components/Pages/politiqueConf";
import PageNotFound from "./Components/Pages/pageNotFound/pageNotFound.component";
import LandingPage from "./Components/Pages/landingpage";
import DownloadMadilist from "./Components/Pages/downloadMadilist/downloadMadilist";


function App() {
  return (
  
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/legalemention" component={LegaleMention}/>
          <Route path="/politique-conf" component={PolitiqueConf}/>
          <Route path="/landingpage" component={LandingPage}/>
          <Route path="/downloadmadilist" component={DownloadMadilist}/>
          {/* <Route path="/product/:id" render={ () => <Redirect  push="/play.google.com/store/apps/details?id=com.madilistmobileapp" /> }/>
          <Route path="/shop/:id" render={ () => <Redirect path="https://play.google.com/store/apps/details?id=com.madilistmobileapp" />}/> */}
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
  );
}
export default App;
