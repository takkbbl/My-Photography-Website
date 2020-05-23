import Layout from "../components/Layout";
import styles from "./Blog.module.scss";
import Head from "next/head" 

const Index = () => (
  <Layout>
    <Head>
          <title>Blog | Felix Melchner Photography</title>
          <meta property="og:url" content="https://www.felixmelchner.de/blog" />
          <meta property="og:title" content="Felix Melchner Photography | Blog" />
          <meta property="og:image" content={require("../public/assets/travel/Screen-Shot-2019-08-25-at-14.05.22.png")} />
        </Head>
    <div>
      <div className={styles.wrapper}>
        <div className={styles.headersection}>
          <h4>Travel Blog</h4>
          <h1>10 Days Italy Road Trip Itinerary</h1>
        </div>
        <div className={styles.profilesection}>
          <div className={styles.profile}>
            <img src={require("../public/assets/viktoria-profil.png")} />
          </div>
          <div className={styles.author}>
            <span>
              Written by{" "}
              <a
                href="https://www.instagram.com/viktoria_08_08/"
                target="_blank"
              >
                Viktoria
              </a>
            </span>
          </div>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.oneimage}>
            <img src={require("../public/assets/travel/IMG_1790.jpg")} />
          </div>
        </div>

        <div className={styles.textsection}>
          <p>August 25, 2019</p>
          <h2>
            Dolomites – Venice – Tuscany – Cinque Terre – Milan – Lavertezzo
          </h2>
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
        <div className={styles.imagesection}>
          <div className={styles.oneimage}>
            <img
              src={require("../public/assets/travel/Screen-Shot-2019-08-25-at-14.05.22.png")}
            />
          </div>
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
            We stayed in this{" "}
            <a
              href="https://www.booking.com/hotel/it/pension-pichler.de.html?aid=304142;label=postbooking_confemail;sid=cbb96cce0123252ac0b69f08b90f91d6;dist=0&keep_landing=1&sb_price_type=total&type=total&"
              target="_blank"
            >
              lovely small pension
            </a>
            {" "}which was a good deal for the money not far away from Lake Braies.
            On the next day we had an ambitious goal to catch the sunrise at the
            lake. Even though it was tough on long sleepers like us, the
            rewarding view was worth every bit of it!
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
            with some pastry and extremely good latte macchiato at this{" "}
            <a
              href="https://www.google.com/maps/place/Distributore+Benzina+Eni/@46.7295547,12.2179645,582m/data=!3m1!1e3!4m13!1m7!3m6!1s0x47782f7e223aede7:0xbd2db4f14d5fc2f5!2sPragser+Wildsee!3b1!8m2!3d46.694333!4d12.0854273!3m4!1s0x47782bee92799101:0x9cf0a3e8e9c36426!8m2!3d46.728866!4d12.218655"
              target="_blank"
            >
              small gas station
            </a>
            .
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
            The way from{" "}
            <a
              href="https://www.google.com/maps/place/Garage+Comunale+AVM+S.p.A./@45.439506,12.3156718,588m/data=!3m1!1e3!4m5!3m4!1s0x0:0xdc263d4162fd37f5!8m2!3d45.4389426!4d12.3172215"
              target="_blank"
            >
              our parking place
            </a>{" "}
            to the heart of the city of Venice was actually very enjoyable.
            While the streets and canals of Venice are adorable everywhere, in
            this area it was not all that crowded. We had lunch outside of the
            center as well which was pretty affordable and tasty. And then we
            dived in into tourist crowds on Piazza San Marco.
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_4880-story.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_4930-story.jpg")} />
          </div>
        </div>
        <div className={styles.textsection}>
          <h3>Florence</h3>
          <p>
            After around 5 hours in Venice – which is definitely not enough for
            this awesome city – we headed out to our second overnight stay
            place: Florence (Firenze in Italian).
          </p>
          <p>
            Our{" "}
            <a
              href="https://www.airbnb.de/rooms/28849831?source_impression_id=p3_1562514207_LRhsTL2m1rIyzium&guests=1&adults=1"
              target="_blank"
            >
              beautiful Airbnb
            </a>{" "}
            was on the 6th floor, had a huge balcony with a nice view and a chic
            kitchen, so we could enjoy our self-made meals on the balcony! It
            was a bit loud though, because of the busy street. A special extra
            bonus was an underground parking right under the house with an
            elevator going directly to the apartment door! Just what we needed
            for all our luggage.
          </p>
          <p>
            To get to the city centre we had to take a train (just 5 minutes
            ride, but check the schedule, as they are not coming all that
            often). It is not allowed to enter the city centrum with a car so we
            just left our car at the apartment.
          </p>
          <p>
            Our highlights in Florence were strolling through the streets of old
            town and admiring Cathedral of Santa Maria del Fiore, lunch at{" "}
            <a
              href="https://www.google.com/maps/place/Mercato+di+San+Lorenzo/@43.7767024,11.2510547,606m/data=!3m1!1e3!4m5!3m4!1s0x132a5402c636fdb3:0x8b723bbfcc8bab4b!8m2!3d43.7766985!4d11.2532434"
              target="_blank"
            >
              Mercato di San Lorenzo
            </a>
            , visit to Uffizi gallery, dinner at{" "}
            <a
              href="https://www.google.com/maps/place/Cibreo/@43.7710263,11.2641513,606m/data=!3m2!1e3!4b1!4m5!3m4!1s0x132a5408d51edd6b:0x71bc917935bf4794!8m2!3d43.7710224!4d11.26634"
              target="_blank"
            >
              caffe Cibreo
            </a>{" "}
            and sunset at Piazzale Michelangelo. More details on that coming
            soon in my next blog post.
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_4940-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_5041-blog.jpg")} />
          </div>
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
            square called{" "}
            <a
              href="https://en.wikipedia.org/wiki/Palio_di_Siena"
              target="_blank"
            >
              Palio di Siena
            </a>
            .
          </p>
          <p>
            The streets of Siena were fun to explore and not as crowded as in
            Florence. We also got inside of{" "}
            <a
              href="https://www.google.com/maps/place/Duomo+di+Siena/@43.3180899,11.3289961,287m/data=!3m1!1e3!4m13!1m7!3m6!1s0x132a2cbf34bf5313:0x5d731212f12343e3!2s53100+Siena,+Province+of+Siena,+Italy!3b1!8m2!3d43.318809!4d11.3307574!3m4!1s0x132a2cbbb4a6a3c3:0x51fd19855c7fde45!8m2!3d43.3177021!4d11.3289072"
              target="_blank"
            >
              Duomo di Siena
            </a>{" "}
            and its interior was impressive. If we had an extra day on our
            vacation I would spend the night in Siena and go exploring Val
            d’Orcia on the next day – the beautiful “real Tuscany” region south
            from Siena.
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_5148-blog.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img
              src={require("../public/assets/travel/20190714_154543-blog.jpg")}
            />
          </div>
        </div>
        <div className={styles.textsection}>
          <h3>San Gimignano</h3>
          <p>
            After Siena we headed to our next{" "}
            <a
              href="https://www.airbnb.de/rooms/26739538?source_impression_id=p3_1562514525_3TxP6gKMEZwl%2Bq81"
              target="_blank"
            >
              accomodation
            </a>{" "}
            near San Gimignano. While the villa, the pool and the location were
            amazing, our room was really (really!) small and the bed was not
            that comfortable (I actually got a neck pain on the next day), so if
            you are planning to stay here you might want to go for a bigger (=
            more expensive) room.
          </p>
          <p>
            In the evening we drove up to San Gimingano and had a beautiful walk
            through the peaceful streets and squares of this charming little
            mountain town. We’ve concluded the evening with a nice dinner at{" "}
            <a
              href="https://www.google.com/maps/place/Osteria+del+Carcere/@43.4675591,11.0423172,609m/data=!3m1!1e3!4m12!1m6!3m5!1s0x132a3c3f1616c5d7:0x1c84c447e9c431f5!2sOsteria+del+Carcere!8m2!3d43.4675552!4d11.0445059!3m4!1s0x132a3c3f1616c5d7:0x1c84c447e9c431f5!8m2!3d43.4675552!4d11.0445059"
              target="_blank"
            >
              Osteria del Carcere
            </a>
            .
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_5322-blog.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_5353-blog.jpg")} />
          </div>
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
            Montepulciano. The most impressive sight in Volterra for me were the{" "}
            <a
              href="https://www.google.com/maps/place/Roman+Theatre/@43.4037296,10.8577591,684m/data=!3m1!1e3!4m5!3m4!1s0x132a1a4390e2916f:0x946ed7df239427!8m2!3d43.4037257!4d10.8599478"
              target="_blank"
            >
              ancient roman ruins
            </a>
            .
          </p>
          <p>
            On the way from Volterra to Piombino, where the ferry for Elba takes
            off, we happened to pass an extremely beautiful and photogenic{" "}
            <a
              href="https://www.google.com/maps/place/43%C2%B020'33.0%22N+10%C2%B034'56.6%22E/@43.3407759,10.581344,355m/data=!3m1!1e3!4m14!1m7!3m6!1s0x132a1a43fe2309d1:0x2ee2843d6461d321!2s56048+Volterra,+Province+of+Pisa,+Italy!3b1!8m2!3d43.399395!4d10.8660333!3m5!1s0x0:0x0!7e2!8m2!3d43.3425119!4d10.5823747"
              target="_blank"
            >
              street
            </a>{" "}
            as well as some awesome sunflower fields. Unfortunately with all the
            rain those were not suitable conditions for a photoshoot, but guess
            what: we got right back there on our way back from Elba to make
            these beautiful photos!{" "}
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_6067-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_6102-blog.jpg")} />
          </div>
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
            From Portoferraio it took us around 1 hour to get to our{" "}
            <a
              href="https://www.booking.com/hotel/it/bel-tramonto-marciana.de.html?aid=304142;label=postbooking_confemail;sid=cbb96cce0123252ac0b69f08b90f91d6;dist=0&keep_landing=1&sb_price_type=total&type=total&"
              target="_blank"
            >
              hotel
            </a>{" "}
            in Patresi, even though the ride was just 30 km. Elba has such a
            rocky landscape, with narrow serpentine roads that you hardly get to
            drive faster than 70 km/h.{" "}
          </p>
          <p>
            Located on the western tip of the island, Patresi was definitely
            worth the drive. We had such an amazing view from our hotel room.
            And the two wildish beaches in Patresi were to die for. We even got
            one of them all to ourselves to watch the sun go down into the sea!
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_5918-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_5734-insta.jpg")} />
          </div>
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
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img
              src={require("../public/assets/travel/20190718_164708-e1566740960806.jpg")}
            />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/20190718_163439.jpg")} />
          </div>
        </div>
        <div className={styles.textsection}>
          <h3>Lucca</h3>
          <p>
            After the Pisa experience we drove to our{" "}
            <a
              href="https://www.booking.com/hotel/it/b-b-il-callare.de.html?aid=304142;label=postbooking_confemail;sid=aa3b12a8f201af65dbea2ce1d3ad5567;dist=0&keep_landing=1&sb_price_type=total&type=total&"
              target="_blank"
            >
              accommodation near Luca
            </a>
            . It was a big beautiful house with a garden where we got a spacious
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
            usually in July, an important music event is held in Lucca –
            <a
              href="https://www.italyscapes.com/events/tuscany/lucca/annual-festivals/lucca-summer-festival-2019/"
              target="_blank"
            >
              Lucca Summer Festival
            </a>{" "}
            (LSF). During this festival major bands are playing open air
            concerts on the squares of the historic centre of Lucca. The
            highlights of LSF 2019 included Toto, Elton John, Macklemore, Eros
            Ramazzotti, Scorpions and Sting.
          </p>
          <p>
            If you have more time, you could spend another day in Lucca and
            surroundings, for example go on a hike or bike trip along the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Aqueduct_of_Nottolini,_Lucca"
              target="_blank"
            >
              Aqueduct of Nottolini
            </a>{" "}
            – an impressive stone structure stretching for around 3 km, which
            used to bring clear mountain water to Lucca back in 19th century.{" "}
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_6266-blog.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_6281-blog.jpg")} />
          </div>
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
            In Riomaggiore we climbed the rocks to reach this{" "}
            <a
              href="https://www.google.com/maps/place/19017+Riomaggiore,+SP,+Italy/@44.0979393,9.7370782,84m/data=!3m1!1e3!4m5!3m4!1s0x12d4fa8971ac8b07:0x119e0fb487f86580!8m2!3d44.0990492!4d9.7374851"
              target="_blank"
            >
              beautiful photo spot
            </a>
            . You have to stand on your feet (and sometimes also hands)
            confidently to get there. You’ll also want to have a big sun hat and
            good sunscreen, because the sun is burning like crazy!
          </p>
          <p>
            In Manarola we got up to the{" "}
            <a
              href="https://www.google.com/maps/place/Manarola+Scenic+Viewpoint/@44.1072528,9.7259455,364m/data=!3m1!1e3!4m13!1m7!3m6!1s0x12d4fa9b3f42ac93:0x2b61928ec00d2b1a!2s19017+Manarola,+SP,+Italy!3b1!8m2!3d44.1115594!4d9.7338937!3m4!1s0x0:0x7e09ead73375cde9!8m2!3d44.107396!4d9.7254867"
              target="_blank"
            >
              viewpoint
            </a>{" "}
            so that I could enjoy the exact view from my screensaver in real
            life! That was amazing. There is a{" "}
            <a
              href="https://www.google.com/maps/place/Nessun+Dorma/@44.1072528,9.7259455,364m/data=!3m1!1e3!4m13!1m7!3m6!1s0x12d4fa9b3f42ac93:0x2b61928ec00d2b1a!2s19017+Manarola,+SP,+Italy!3b1!8m2!3d44.1115594!4d9.7338937!3m4!1s0x12d4fa9d2a0c8e57:0xfcf16b6b8e1b1e28!8m2!3d44.1074629!4d9.7260258"
              target="_blank"
            >
              restaurant
            </a>{" "}
            around the viewing point which offers this same view from its
            tables. No wonder that there was a line waiting to get in! If you’d
            like to have lunch there (and get some genius pics) you might
            consider coming even before the opening at 12 o’clock or planning in
            the waiting time.
          </p>
          <p>
            The last stop in Cinque Terre was Monterosso al Mare where we wanted
            to jump into the sea for the last time on this trip. Unfortunately,
            almost all the beaches were not free of charge and it was very
            difficult to find a spot to drop our things on the narrow “free
            beach” territory.
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_6548-blog.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img
              src={require("../public/assets/travel/20190719_140505-blog.jpg")}
            />
          </div>
        </div>
        <div className={styles.textsection}>
          <h3>Milan</h3>
          <p>
            After refreshing in the sea we jumped back into the car and drove to
            our next accommodation in Milan.
          </p>
          <p>
            The church{" "}
            <a
              href="https://www.google.com/maps/place/Santa+Maria+delle+Grazie/@45.4628329,9.1076924,21126m/data=!3m1!1e3!4m13!1m7!3m6!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!2sMilan,+Metropolitan+City+of+Milan,+Italy!3b1!8m2!3d45.4642035!4d9.189982!3m4!1s0x4786c15a44bf1c83:0xed5bcdc4d3c75a59!8m2!3d45.4659699!4d9.1709232"
              target="_blank"
            >
              Santa Maria delle Grazie
            </a>{" "}
            in Milan is home to Leonardo da Vinci’s famous painting “The last
            supper”. We took the metro ride to the church just to find out that
            the tickets to see the last supper are sold out for the next two
            weeks! So if you’d like to see this painting you’d have to book your
            ticket online in advance.
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
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_6584-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_6687-insta.jpg")} />
          </div>
        </div>
        <div className={styles.textsection}>
          <h3>Lavertezzo</h3>
          <p>
            The next stop on our route was Lavertezzo – a charming little town
            in the italian speaking part of Switzerland. This town is famous for
            its church, amazingly clear and beautiful mountain river Verzasca
            and the nearby{" "}
            <a
              href="https://www.google.com/maps/place/Ponte+dei+Salti/@46.2602263,8.836892,17z/data=!4m13!1m7!3m6!1s0x4785b1306b1d2419:0x62c95c51a4303bb!2sLavertezzo+Paese,+6633+Lavertezzo,+Switzerland!3b1!8m2!3d46.2602226!4d8.8390807!3m4!1s0x4785b131b37ac893:0xb8b55f11feae7d93!8m2!3d46.2599527!4d8.8358563"
              target="_blank"
            >
              17th century bridge
            </a>{" "}
            called “Ponte dei Salti” which literally means “jumping bridge”.
            This was an extremely beautiful place to be, especially in summer,
            which should totally land on your bucket list or best on your next
            itinerary!
          </p>
          <p>
            The river water has a refreshing temperature of around 15 degrees,
            so many people just relax on the stones and go into the water
            occasionally for a short refreshment. As we were there, we also
            witnessed a couple of people jumping into the river from the bridge!
            Would you dare?
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_6739-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_6906-insta.jpg")} />
          </div>
        </div>
        <div className={styles.textsection}>
          <h3>Saxer Lücke</h3>
          <p>
            After a much needed rest and a nice breakfast in the garden in this{" "}
            <a
              href="https://www.airbnb.de/rooms/7786888?source_impression_id=p3_1562516044_d6BDnJnNB8Y4Civy"
              target="_blank"
            >
              affordable Airbnb
            </a>
            , we got onto the last adventure of our roadtrip – Saxer Lücke.
          </p>
          <p>
            It was raining the whole morning, but as we got to the lift the
            weather smiled at us as it stopped raining and even a bit of sun
            came out. Short lift ride followed by around one and a half hours
            easy hike led us to this amazing view.
          </p>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.leftimage}>
            <img src={require("../public/assets/travel/IMG_7070-insta.jpg")} />
          </div>
          <div className={styles.rightimage}>
            <img src={require("../public/assets/travel/IMG_7017-insta.jpg")} />
          </div>
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
        <div className={styles.textsection}>
          <div className={styles.button}>
            <a href="https://www.instagram.com/viktoria_08_08/" target="_blank">Follow Viktoria on Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
