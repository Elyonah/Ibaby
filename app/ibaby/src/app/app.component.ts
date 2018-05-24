import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, Events } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { User } from '../providers/user/user';
import { Storage } from '@ionic/storage';
import SailsSocket from 'sails-socket'


@Component({
    templateUrl: 'app.html',
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Login', color:'secondary', icon:'log-in', component: 'WelcomePage' },
    { title: 'Subscribe', color:'secondary', icon:'add', component: 'WelcomePage' }
  ];

  user: any;

  constructor(public userProvider: User,
              private translate: TranslateService,
              platform: Platform, settings: Settings,
              private config: Config,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private storage:Storage,
              private events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const initializeParams = { url:'http://localhost:1337'};
      let newSailsSocket = SailsSocket.connect(initializeParams);
    });

      this.initTranslate();

      events.subscribe('user:login', user => {
        if (user !== undefined && user !== "") {
            this.user = user._user;
            console.log(this.user)
            this.pages.splice(0,2);
            this.pages.push(
                { title: 'My profile', component: 'ProfilePage' },
                { title: 'Matchs', component: 'MatchPage' },
                { title: 'Babyfoots', component: 'BabyPage' },
                { title: 'Users', component: 'UserPage' },
                { title: 'Teams', component: 'TeamPage' },
            );
        }
    });
      events.subscribe('user:logout', result => {
        console.log("passing user:logout");
        if(result){
            this.user = undefined;
            storage.clear();
            this.pages.splice(0,this.pages.length);
            this.pages = [
                { title: 'Login', color:'secondary', icon:'log-in', component: 'WelcomePage' },
                { title: 'Subscribe', color:'secondary', icon:'add', component: 'WelcomePage' }
            ];
        }
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.events.publish('user:logout', true);
    this.nav.setRoot(FirstRunPage);
  }
}
