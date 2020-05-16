import Layout from "../components/Layout";
import styles from "./Blog.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Index = () => (
  <Layout>
    <div>
      <div className={styles.wrapper}>
        <div className={styles.headersection}>
          <h4>Blog</h4>
          <h1>10 Days Italy Road Trip Itinerary</h1>
          <p>August 25, 2019</p>
        </div>
        <div className={styles.headerimage}></div>
        <div className={styles.textsection}>
          <p>
            Follow us on our Italian adventure touring through stunning mountain
            landscapes, unique historic cities and beautiful seaside during this
            10 days road trip.
          </p>
          <p>
            We tried to avoid too long drives and included some beautiful
            stopovers on the way instead. Here is our route on a Google Map:
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Lake Braies</h3>
          <p>
            The starting point of our roadtrip was Nuremberg (southern Germany).
            We took off on a Thursday afternoon to try and avoid all those
            infamous traffic jams on the way down to Italy typical for a summer
            Friday. This worked out just great: we drove down Brenner autobahn
            without any traffic jams all the way to Lake Braies (“Pragser
            Wildsee” in German, “Lago di Braies” in Italian)!
          </p>
          <p>
            We stayed in this lovely small pension which was a good deal for the
            money not far away from Lake Braies. On the next day we had an
            ambitious goal to catch the sunrise at the lake. Even though it was
            tough on long sleepers like us, the rewarding view was worth every
            bit of it!
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_4608-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_4672-insta.jpg")} />
          </div>
        </div>
        <div className={styles.textsection}>
          <p>
            On our arrival at Lake Braies around 5 a.m. it was peaceful and
            quite. The parking was free at this hour and the boat house offering
            great views on the lake (known from hype instagram photos) was not
            opening until 9 a.m. So we found ourselves a nice spot on a hill
            next to an even more punctual photographer and waited patiently for
            the sunrise to break. Even though it was mid of July, the morning
            air in the mountains was quite cool, so I was happy to have my warm
            jacket with me.
          </p>
          <p>
            In the next half an hour we’ve got company of about 10 other
            photographers and around 6 a.m. we were all rewarded with the
            dreamlike sunrise views.
          </p>
          <p>
            After the successful sunrise mission we’ve strengthened ourselves
            with some pastry and extremely good latte macchiato at this small
            gas station.
          </p>
          <h3>Venice</h3>
          <p>
            When I saw that one of the route options from Lake Braies to
            Florence almost crosses through Venice, I knew we cannot leave this
            stop out. Venice stole my heart once and I could come back over and
            over again.
          </p>
          <p>
            The drive was about 3 hours, and giving in our early start in the
            day, we arrived in Venice as early as 10:30 a.m. We drove on to the
            island with our car and left it in a garage (26€ for a day, no
            hourly rate). If you are looking for budget options, you could take
            a look at the parking possibilities on the mainland and drive in to
            Venice with a bus or tram.
          </p>
          <p>
            The way from our parking place to the heart of the city of Venice
            was actually very enjoyable. While the streets and canals of Venice
            are adorable everywhere, in this area it was not all that crowded.
            We had lunch outside of the center as well which was pretty
            affordable and tasty. And then we dived in into tourist crowds on
            Piazza San Marco.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Florence</h3>
          <p>
            After around 5 hours in Venice – which is definitely not enough for
            this awesome city – we headed out to our second overnight stay
            place: Florence (Firenze in Italian).
          </p>
          <p>
            Our beautiful airbnb was on the 6th floor, had a huge balcony with a
            nice view and a chic kitchen, so we could enjoy our self-made meals
            on the balcony! It was a bit loud though, because of the busy
            street. A special extra bonus was an underground parking right under
            the house with an elevator going directly to the apartment door!
            Just what we needed for all our luggage.{" "}
          </p>
          <p>
            To get to the city centre we had to take a train (just 5 minutes
            ride, but check the schedule, as they are not coming all that
            often). It is not allowed to enter the city centrum with a car so we
            just left our car at the apartment.
          </p>
          <p>
            Our highlights in Florence were strolling through the streets of old
            town and admiring Cathedral of Santa Maria del Fiore, lunch at
            Mercato di San Lorenzo, visit to Uffizi gallery, dinner at caffe
            Cibreo and sunset at Piazzale Michelangelo. More details on that
            coming soon in my next blog post.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Chianti & Siena</h3>
          <p>
            On the next day we headed out of Florence around 10 a.m. to drive
            through the beautiful Chianti region down to Siena.
          </p>
          <p>
            We drove through Creve in Chianti where we had a pizza on the main
            square up to Lamole to enjoy some views on the region from above.
            Creve in Chianti was not that special of a town, you could also
            leave it out from your itinerary and spend more time in Siena or
            visit Monteriggioni instead (unfortunately we did not have time for
            this one).
          </p>
          <p>
            From Lamole we headed to Siena. Now this town really exceeded my
            expectations. I have read about the special main square – Piaza del
            Campo – but the photos make a poor job transfering a unique view and
            vibe of this place. You should definitely get there! Every year on
            2nd of July and 16th of of August there is a horse race at the
            square called Palio di Siena.
          </p>
          <p>
            The streets of Siena were fun to explore and not as crowded as in
            Florence. We also got inside of Duomo di Siena and its interior was
            impressive. If we had an extra day on our vacation I would spend the
            night in Siena and go exploring Val d’Orcia on the next day – the
            beautiful “real Tuscany” region south from Siena.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>San Gimignano</h3>
          <p>
            After Siena we headed to our next accomodation near San Gimignano.
            While the villa, the pool and the location were amazing, our room
            was really (really!) small and the bed was not that comfortable (I
            actually got a neck pain on the next day), so if you are planning to
            stay here you might want to go for a bigger (= more expensive) room.
          </p>
          <p>
            In the evening we drove up to San Gimingano and had a beautiful walk
            through the peaceful streets and squares of this charming little
            mountain town. We’ve concluded the evening with a nice dinner at
            Osteria del Carcere.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Volterra</h3>
          <p>
            On the next day it was raining all day long, from the morning till
            the evening (yeah, we also did not know such things happen in Italy
            in July). The temperatures were cooling off quite a bit so we were
            happy to have our emergency raincoats and warmer clothes with us.
          </p>
          <p>
            The next stop on our way down to the isle Elba was the village of
            Volterra. Contrary to popular belief, the scenes from Twilight
            featuring Volteri family were not really filmed in Volterra, but in
            Montepulciano. The most impressive sight in Volterra for me were the
            ancient roman ruins.
          </p>
          <p>
            On the way from Volterra to Piombino, where the ferry for Elba takes
            off, we happened to pass an extremely beautiful and photogenic
            street as well as some awesome sunflower fields. Unfortunately with
            all the rain those were not suitable conditions for a photoshoot,
            but guess what: we got right back there on our way back from Elba to
            make these beautiful photos!{" "}
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Elba</h3>
          <p>
            I’ve actually never heard of Elba Island before this trip, and now
            it’s one of the most beautiful beach vacation destinations I’ve ever
            been to!{" "}
          </p>
          <p>
            You can get to Portoferraio (the main city of Elba) with one hour
            ferry ride from Piombino (haven city on the mainland). There are
            three companies which provide the ferry rides. We bought our tickets
            on site from Blue Navy and paid 114 euro for two people and a
            passenger car for the round trip. We faced no difficulties with our
            ferry ride except the drive in for the car being extremely narrow.
          </p>
          <p>
            From Portoferraio it took us around 1 hour to get to our hotel in
            Patresi, even though the ride was just 30 km. Elba has such a rocky
            landscape, with narrow serpentine roads that you hardly get to drive
            faster than 70 km/h.{" "}
          </p>
          <p>
            Located on the western tip of the island, Patresi was definitely
            worth the drive. We had such an amazing view from our hotel room.
            And the two wildish beaches in Patresi were to die for. We even got
            one of them all to ourselves to watch the sun go down into the sea!
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Pisa</h3>
          <p>
            After spending two beautiful days on Elba, we headed out to our next
            stop. After a ferry ride, a photoshooting in the sunflowers and
            around one and a half hours car ride we arrived at Pisa and got the
            mandatory Pisa Tower photo.
          </p>
          <p>
            This proved to be quite challenging because of all the crowds and
            the fact that you are not allowed to step on the grass in front of
            the tower. You should be wearing comfortable shoes to be able to
            climb the fence (which seems to be permitted) and get a photo
            without all the tourists on it.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Lucca</h3>
          <p>
            After the Pisa experience we drove to our accommodation near Luca.
            It was a big beautiful house with a garden where we got a spacious
            room with a private bathroom, nice furniture as well as tea, cookies
            and a bottle of wine as presents for the guests! The breakfast on
            the next day was amazing and the host was charming. I’d definitely
            stay there again!
          </p>
          <p>
            From the accomodation it was a short drive to Lucca, where we
            enjoyed a nice evening walk through the streets without that much
            tourists. A special highlight was the walk on the city walls that
            have been turned into a big park area surrounding Lucca. Every year,
            usually in July, an important music event is held in Lucca – Lucca
            Summer Festival (LSF). During this festival major bands are playing
            open air concerts on the squares of the historic centre of Lucca.
            The highlights of LSF 2019 included Toto, Elton John, Macklemore,
            Eros Ramazzotti, Scorpions and Sting.
          </p>
          <p>
            If you have more time, you could spend another day in Lucca and
            surroundings, for example go on a hike or bike trip along the
            Aqueduct of Nottolini – an impressive stone structure stretching for
            around 3 km, which used to bring clear mountain water to Lucca back
            in 19th century.{" "}
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Cinque Terre</h3>
          <p>
            Next destination was on my bucket list since years. In fact, I even
            used to have it as a screensaver on my laptop! The beautiful
            Manarola – one of the five villages of the national park Cinque
            Terre (translated from Italian as “five lands”).
          </p>
          <p>
            We visited Chinque Terre by car which proved to be quite a
            challenge. Narrow roads with LOTS of curves taking forever to drive
            down and up, overcrowded parking places, about 1 km away from the
            city center, since driving in with your car is not permitted. All
            that said, you might consider choosing another means of travel to
            Cinque Terre. If you spend the night before your visit to Chinque
            Terre in Spezia (the closest bigger town which is accessible by car
            and offers cheaper hotel options), you could leave your car there
            and get a train or boat ticket instead.{" "}
          </p>
          <p>
            There is also a hiking trek going through all the villages of Cinque
            Terre. As much as we enjoy hiking, that did not seem a tempting idea
            in the burning July sun. So instead we just drove down to
            Riomaggiore, Manarola and Monterosso al Mare.
          </p>
          <p>
            In Riomaggiore we climbed the rocks to reach this beautiful photo
            spot. You have to stand on your feet (and sometimes also hands)
            confidently to get there. You’ll also want to have a big sun hat and
            good sunscreen, because the sun is burning like crazy!
          </p>
          <p>
            In Manarola we got up to the viewpoint so that I could enjoy the
            exact view from my screensaver in real life! That was amazing. There
            is a restaurant around the viewing point which offers this same view
            from its tables. No wonder that there was a line waiting to get in!
            If you’d like to have lunch there (and get some genius pics) you
            might consider coming even before the opening at 12 o’clock or
            planning in the waiting time.
          </p>
          <p>
            The last stop in Cinque Terre was Monterosso al Mare where we wanted
            to jump into the sea for the last time on this trip. Unfortunately,
            almost all the beaches were not free of charge and it was very
            difficult to find a spot to drop our things on the narrow “free
            beach” territory.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Milan</h3>
          <p>
            After refreshing in the sea we jumped back into the car and drove to
            our next accommodation in Milan.
          </p>
          <p>
            The church Santa Maria delle Grazie in Milan is home to Leonardo da
            Vinci’s famous painting “The last supper”. We took the metro ride to
            the church just to find out that the tickets to see the last supper
            are sold out for the next two weeks! So if you’d like to see this
            painting you’d have to book your ticket online in advance.
          </p>
          <p>
            After the failed attempt to see “The last supper” we got to the
            heart of Milan – Piazza del Duomo – to enjoy the beautiful Duomo di
            Milano and Galleria Vittorio Emanuele II.
          </p>
          <p>
            Concluding our Milan visit with a bit of shopping (I guess you can’t
            leave that out when in Milan) and an overpriced lunch in one of the
            streets next to the cathedral, we got back to our apartment to pick
            up our car and drive further to the north.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Lavertezzo</h3>
          <p>
            The next stop on our route was Lavertezzo – a charming little town
            in the italian speaking part of Switzerland. This town is famous for
            its church, amazingly clear and beautiful mountain river Verzasca
            and the nearby 17th century bridge called “Ponte dei Salti” which
            literally means “jumping bridge”. This was an extremely beautiful
            place to be, especially in summer, which should totally land on your
            bucket list or best on your next itinerary!
          </p>
          <p>
            The river water has a refreshing temperature of around 15 degrees,
            so many people just relax on the stones and go into the water
            occasionally for a short refreshment. As we were there, we also
            witnessed a couple of people jumping into the river from the bridge!
            Would you dare?
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Saxer Lücke</h3>
          <p>
            After a much needed rest and a nice breakfast in the garden in this
            affordable airbnb, we got onto the last adventure of our roadtrip –
            Saxer Lücke.
          </p>
          <p>
            It was raining the whole morning, but as we got to the lift the
            weather smiled at us as it stopped raining and even a bit of sun
            came out. Short lift ride followed by around one and a half hours
            easy hike led us to this amazing view.
          </p>
        </div>
        <div className={styles.textsection}>
          <h3>Ciao Italia!</h3>
          <p>
            Since we only had 10 days for this road trip we tried to fill it
            with as much cool stuff as could fit in the timeframe and loved
            every bit of it! We drove over 2500 km and paid over 100 euros toll
            for the roads. Felix learned to drive “the Italian way” (much less
            nicer than the “German way”).
          </p>
          <p>
            My favorite destinations were Elba and Cinque Terre, and those of
            Felix were Lake Braies, Lavertezzo and Saxer Lücke (I think you can
            guess which one of us prefers sea and which one the mountains :))
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
