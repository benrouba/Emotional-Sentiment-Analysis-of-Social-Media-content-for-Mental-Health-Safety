import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { NumberSuffixPipe } from './_helpers/number-suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberSuffixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// curl --request GET \
//   --url 'https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=2244994945&count=200&include_rts=1&tweet_mode=extended' \
//   --header 'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAIiTZgEAAAAATWMNXKNGKxBn3hKime7W1PkD90Y%3DT60IREJ9lz6Wm6dSnz8ZtkHYE48ENcHm8yzdYzxCj4Qs6WsxdW'
