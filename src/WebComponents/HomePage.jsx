import React from "react";
import './HomePageCss.css'

const MyWebHome=()=>{

    const image1='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1611416261976-5MBLFY77VFAMH1RFMFZ2/Rosaline%2527s%2BHut%2BBackground-min.jpg?format=2500w'
    const image2='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/bb41255c-1540-44f1-8c72-111c49415ab1/Gnarble+Smaller.png'
    const image3='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1611416766105-1PFVKVQWHHDNBTV1YLZT/Candy%2BHouse%2BBackground-min.jpg?format=2500w'
    const image4='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/6dfb99ac-f68c-4cbe-886b-309659513230/Idontwantahaircutcover+thumbnail.jpg'
    const image5='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/8fe94006-7a27-4124-a4b5-87e757240b68/GuardianCoverFullOpt+copy.jpeg'
    const image6='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/f1ac3e76-fca2-4a23-820f-6fa73450a933/When+Do+Hippos+Play+Cover+Thumbnail+Opt.jpeg'
    const image7='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/ca141b59-c29f-4a89-96d3-825b6a6d4d11/Firefly+Cover+4+Opt.jpeg'
    const image8='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/ae5b33ab-b17f-4785-a82b-eceef31db21b/Cricket+Cover+Opt.jpeg'
    const image9='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1c75d66f-e627-4727-8032-71aed20bfea2/Gemma+Cover+Thumbnail+with+Title+Opt.jpeg'
    const image10='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1542163705439-0FJZPVS9U2QLN48PWQP0/Robot+Bedtime+Book-min.jpeg'
    const image11='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1575530550257-UP92OP28U2BY7JIAJSSR/G2-min.jpeg'
    const image12='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1542151201932-1CUEO397Y03QBOO7HQMG/Gnarble%27s+World+Smaller-min.jpeg'
    const image13='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1542151201932-1CUEO397Y03QBOO7HQMG/Gnarble%27s+World+Smaller-min.jpeg?format=1000w'
 
    
    return(
        <>
            <div className="main">
            <div className="right-fixed-navbar">
                <a href="#"><div className="circle"></div></a>
                <a href="#welcom"><div className="circle"></div></a>
                <a href="#free-fourth-sec"><div className="circle"></div></a>
                <a href="#haircut"><div className="circle"></div></a>
                <a href="#hippos"><div className="circle"></div></a>
                <a href="#robot"><div className="circle"></div></a>
                <a href="#gnarble"><div className="circle"></div></a>
                <a href="#world"><div className="circle"></div></a>
                <a href="#youtube-playlist"><div className="circle"></div></a>
            </div>
            <div className="first-section">
                <img src={image1} alt="" />
                <h1>Free & original Stories for Kids!</h1>
            </div>
            <div className="second-section" id="welcom">
                <div className="second-left">
                    <h1>Browse Stories by Age</h1>
                    <button>for kids ages 3-5</button>
                    <button>for kids ages 5-8</button>
                    <button>for kids ages 8-10</button>
                    <button>for kids ages 10+</button>
                    <button>middle grade novels</button>

                </div>
                <div className="second-right">
                    <h1>Browse Stories By Style</h1>
                    <button>rhyming stories for kids</button>
                    <button>non-rhyming stories for kids</button>
                    <button>bedtime stories for kids</button>
                    <img src={image2} alt="image2" />
                </div>
            </div>
            <div className="third-section">
                <hr />
                <button>subscribe to our youtube channel</button>
            </div>
            <div className="fourth-section" id="free-fourth-sec">
                
                <div className="blue-banner"></div>

                <img src={image3} alt="image3" />
                <h1> ALWAYS FREE. NO SIGN-UP. <br /> NO DOWNLOADS.</h1>
            </div>
            <div className="fifth-section" id="haircut">
                <h5>new story</h5>
                <h1>i dont wan't a haircut</h1>
                <img src={image4} alt="image4" />
                <p>Sammy and haircuts did not get along. In fact, he decided one day that he would never get another haircut again. But, soon Sammy realized that avoiding the barber, and letting your hair get longer, and longer, and longer… wasn’t all it’s cracked up to be. Turns out, when you can’t see what you’re eating, you might end up eating napkins instead of pancakes! And nobody wants to find potato chips in their hair! This illustrated story for kids is a fun lesson for anyone who doesn’t like haircuts!</p>
            </div>
            <div className="sixth-section link-style">
                <h5>story of the month : december</h5>
                <h1><a href="">the guardians of the lore</a></h1>
                <img src={image5} alt="image5" />
                <button>listen on youtube</button>
                <p>While drawing in class at Stagwood School, 12-year old Cal sees a frog staring at him through the window. Stranger than that, is the fact that this frog happens to be Popular STORIES FOR KIDSwearing glasses. </p>
                <p>Cal and his best friend, Soy, learn that the frog (who prefers the name Deli) has sought them out for a reason. When a school administrator named Ream reveals himself to be a dragon, the boys discover that fairytales are real, and that there is magic afoot in Stagwood. With Ream on their tail, the trio must unearth a powerful tool protected by riddles and rile (the magic that fuels nightmares) to save the fate of all fairytales past. But, before Cal can defeat Ream, he has to deal with Soy's knack for arguing with magical creatures, discover the truth about Deli's identity, and earn his place as the hero of the story. The Guardians of Lore is a middle grade novel that centers around two life-long friends, infusing humor and fantasy-based riddles into a modern fairytale.</p>
                <p>One of our most-read and fun stories of all time!</p>
            </div>
            <div className="blue-banner"></div>
            <div className="seventh-section link-style" id="hippos">
                
                <p><strong style={{fontSize:"25px"}}>POPULAR STORIES FOR KIDS</strong><br /> Check out some of our most popular free kids stories online. Fun stories that have been read by kids, parents, teachers, and guardians all over the world! </p>
                <h1>When do hippos play?</h1>
                <img src={image6} alt="image6" />
                <p>Do you know what the Hippos of Africa do long after the Elephants and Rhinos have gone to sleep? This rhythmical story will teach kids about the habits of Hippos at night. Full of true facts and fun rhymes, kids stories don’t get more fun than this! </p>
                
                <h1><a href="">How Firefly got his Light</a></h1>
                <img src={image7} alt="image7" />
                <p>Long ago, Sun and Moon shared the sky together, and there was no day and night. When Elephant, Turtle, and Owl, asked them to split the day into light and dark, they called on a very special fly to help signal them when it was time to leave the sky. This modern-day fable is one of our origin stories for kids who want to learn about the best and brightest of bugs: the firefly!</p>
                <p>Did You Know: fireflies (sometimes called lightning bugs) are most active at dawn and dusk.</p>

                <h1><a href="">WHy the cricket chirps</a></h1>
                <img src={image8} alt="image8" />
                <p>How you ever wondered why crickets have wings, but they don't fly? This fun and beloved fable explores the journey of the cricket, and reveals the secret message it’s sending to us. Why the Cricket Chirps is a popular classroom and bedtime story for kids.</p>
                <p>Did You Know: <strong>Dolbear's Law</strong> states that you can tell the temperature outside by the rate at which a cricket chirps.  The higher the temperature, the faster the chirps!</p>
                
                <h1><a href="">Gemma</a></h1>
                <img src={image9} alt="image9" />
                <p>Gemma is a middle grade novel that follows a curious explorer and her ring-tailed lemur, Milo, as they hunt for the “most greatest treasure in the world”. Solving riddles, battling a bell-wearing jaguar, and traveling the Eight Seas, Gemma’s adventures take her from a young girl to a brave captain, whose only limits are the stars. One of our more advanced stories for kids, Gemma is a perfect book for reading chapter-by-chapter together.</p>

            </div>
            <div className="blue-banner"></div>

            <div className="eighth-section link-style">
                <div className="eighth-left">
                    <img src={image10} alt="image10" />
                </div>
                <div className="eighth-right" id="robot">
                    <h1><a href="">The Robot Bedtime Book</a></h1>
                    <p>Ages 3-5, Narrated, Read Along One of our most popular bedtime stories, this is the tale of a group of robots winding down for the night. The Robot Bedtime Book is a playful bedtime story for kids that encourages interaction, imagination, and a fun bedtime routine. </p>
                </div>
            </div>
            <div className="eighth-section link-style">
                <div className="eighth-left">
                    <img src={image11} alt="image11" />
                </div>
                <div className="eighth-right" id="gnarble">
                    <h1><a href="">THE JOURNEY OF THE NOBLE GNARBLE</a></h1>
                    <p style={{textAlign:"left"}}>The Journey of the Noble Gnarble is a number one best-selling ebook that has been adapted into a hardcover book and play. Through rhyming verse and engaging illustrations, the Noble Gnarble teaches kids about perseverance and determination in the face of obstacles. Dream Big!</p>
                </div>
            </div>
            <div className="eighth-section2">
                <div className="eighth-left">
                    <img src={image12} alt="image12" />
                </div>
                <div className="eighth-right link-style" id="world">
                    <h1><a href="">GNARBLE'S WORLD </a></h1>
                    <p>Ages 3-8, Narrated, Read Along Explore the ocean floor and discover the location of Orangebeard's Treasure in this series of adventure stories for kids! Each location that you visit under the sea reveals a unique story from the gnarble. Piece together the clues with reading comprehension and reasoning skills to solve the mystery!</p>
                </div>
            </div>
            

            <div className="nineth-section" id="youtube-playlist">
                <h3>our children’s stories Are translated into 35 different languages, from Hindi (बच्चों की रात की कहानियां) to English! Select your Language in the bottom right corner.</h3>
                <button>Click here to view langugage lsit</button>
                <h1>Stories for Kids YOUTUBE Playlist</h1>
                <iframe width="120%" height="700" src="https://www.youtube.com/embed/g4krt3oDnGg?si=znR1n5wymuZOZ7b1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h3>Check out our Youtube Channel for new illustrated and narrated kids stories added regularly.</h3>
                <h3>FREECHILDRENSTORIES.COM PROVIDES BEST-SELLING Short STORIES FOR KIDS OF ALL AGES FOR FREE. READ MORE ABOUT US HERE!</h3>
                <h3> Follow Us for New ONLINE Stories For Kids</h3>
                <div className="button-pair">
                    <button>youtube</button>
                    <button>Facebook</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default MyWebHome;