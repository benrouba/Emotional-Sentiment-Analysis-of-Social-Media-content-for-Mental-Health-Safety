import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    posts: any = []
    trends: any = []
    fellowings: any = []
    fellowers: any
    user: any
    title = 'twitter';
    public barChartOptions = {
        responsive: true,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: true,
                    beginAtZero: true,
                    autoSkip: true,
                    fontColor: "#fff",
                    fontFamily: "'Source Sans Pro', sans-serif",
                    maxTicksLimit: 10
                },
                gridLines: {
                    drawBorder: true,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#fff",
                    fontFamily: "'Source Sans Pro', sans-serif",
                    autoSkip: true,
                    maxTicksLimit: 15
                },
                gridLines: {
                    drawBorder: true,
                    display: false
                }
            }]
        }
    };
    public barChartLegend = false;
    constructor(private http: HttpService) { }
    ngOnInit(): void {
        this.getTwiterPosts()
        this.getTrends()
        this.getProfile()
        this.getFellowings()
        this.getFellowers()
        console.log(this.eucDistance([0.002108, 0.001843, 0.009288, 0.997533, 0.005441], [0.201871, 0.012359, 0.296736, 0.006753, 0.268492,]));

    }
    test() {

    }
    getTwiterPosts() {
        this.http.get_with_oauth_1("https://api.twitter.com/1.1/statuses/home_timeline.json?count=20&tweet_mode=extended", "tweets").subscribe(data => {
      
        data.body.data.forEach((element: any) => {
            let results
            let emotionsArray: any = []
            let endTime = new Date();
            let startTime = new Date(element.created_at);
            let timeDiff = endTime.getTime() - startTime.getTime();
            element.time = this.secondsToHms(timeDiff / 1000)
            this.posts.push(element)
            this.http.post(
                {
                    "features": {
                        "concepts": {

                        },
                        "entities": {

                        },
                        "keywords": {

                        },
                        "categories": {

                        },
                        "emotion": {

                        },
                        "sentiment": {

                        },
                        "semantic_roles": {

                        },
                        "syntax": {
                            "tokens": {
                                "lemma": true,
                                "part_of_speech": true
                            },
                            "sentences": true
                        }
                    },
                    "text": element.full_text
                }

            ).subscribe(result => {
                if (result?.status == 200) {
                    emotionsArray.push(result?.body?.results?.emotion?.document?.emotion?.anger, result?.body?.results?.emotion?.document?.emotion?.disgust, result?.body?.results?.emotion?.document?.emotion?.fear, result?.body?.results?.emotion?.document?.emotion?.joy, result?.body?.results?.emotion?.document?.emotion?.sadness)
                    element.emotions = emotionsArray
                    element.ed = this.eucDistance(element.emotions, [0.002108, 0.001843, 0.009288, 0.997533, 0.005441])
                    console.log(element);
                    if (element.ed < 0.33) {


                        element.isharmfulll = true
                        let data: any = []
                        data.push(result?.body?.results?.emotion?.document?.emotion?.sadness, result?.body?.results?.emotion?.document?.emotion?.joy,
                            result?.body?.results?.emotion?.document?.emotion?.fear,
                            result?.body?.results?.emotion?.document?.emotion?.disgust,
                            result?.body?.results?.emotion?.document?.emotion?.anger)
                        element.dataset = [
                            {
                                data: data,
                                backgroundColor: [
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a'
                                ],
                                hoverBackgroundColor: [
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    '#e44d3a',
                                    'rgba(201, 203, 207, 0.2)'
                                ],
                                unit: 'liter',
                                borderSkipped: false,
                                borderRadius: {

                                    bottomRight: 25,
                                    bottomLeft: 25,
                                },
                                borderColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(255, 159, 64)',
                                    'rgb(255, 205, 86)',
                                    'rgb(75, 192, 192)',
                                    'rgb(54, 162, 235)',
                                    'rgb(153, 102, 255)',
                                    'rgb(201, 203, 207)'
                                ],
                            }
                        ]
                        element.labels = ["sadness", "joy", "fear", "disgust", "anger"]
                    }
                }
            })

        });
        })
    }
    getTrends() {
        this.http.get_with_oauth_1('https://api.twitter.com/1.1/trends/place.json?id=' + environment.place_id, "trend").subscribe(res => {
            if (res?.status === 200) {
                for (let index = 0; index < 10; index++) {
                    this.trends.push(res.body[0].trends[index])

                }
            }
        })
    }
    getFellowings() {
        this.http.get_with_oauth_1("https://api.twitter.com/1.1/friends/list.json", "ids").subscribe(res => {
            console.log(res.body);
            this.fellowings = res.body.users
        })
    }
    getFellowers() {
        this.http.get_with_oauth_1("https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=" + environment.screen_name + "&skip_status=true&include_user_entities=false", "fellowers").subscribe(res => {
            console.log(res.body);
            this.fellowers = res.body.users
        })
    }
    getProfile() {
        this.http.get_with_bearer('https://api.twitter.com/2/users/' + environment.user_id + '?user.fields=public_metrics,created_at,description,profile_image_url').subscribe(res => {
            if (res?.status === 200) {
                this.user = res.body.data
                this.user.profile_image_url = this.user.profile_image_url.replace('_normal', '_400x400')

                console.log(this.user);

            }
        })
    }
    watchAnyways(post: any) {
        post.isharmfulll = false
    }
    eucDistance(a: any, b: any) {
        return a
            .map((x: any, i: any) => Math.abs(x - b[i]) ** 2) // square the difference
            .reduce((sum: any, now: any) => sum + now) // sum
            ** (1 / 2)
    }
    secondsToHms(d: any) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
        return hDisplay + mDisplay + sDisplay;
    }
}
