$(document).ready(function()
{
    $("#ph").show();
    $("#phsel").show();
    $('#phsel').on('change',function() 
    {
        $("#rest").show();
        var phase = $(this).val();
        $("#phsel").prop('disabled',true);
        if(phase==1)
        {
            $("#ph1sel").show();
            $('#ph1sel').on('change',function() 
            {
                var movie = $(this).val();
                if(movie==1)
                {
                    $("#ph1sel").prop('disabled',true);
                    $("#image").append('<img src="images/Iron Man 1.jpg" height="570" width="450"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2008");
                    $("#partxt").append("");
                    $("#prevtxt").append("Captain Marvel, Captain America The First Avenger");
                    $("#nextxt").append("Iron Man 2, Avengers");
                    $("#plotxt").append("Tony Stark is a Philanthrophist, Playboy, Billionaire who was captured by a Group of Terrorists in Afganistan. Thus he makes a Suit from Box of Scraps to escape from there and eventually find who is the Main reason behind his murder attempt.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/8ugaeA-nMTc")})
                }
                else if(movie==2)
                {
                    $("#ph1sel").prop('disabled',true);
                    $("#image").append('<img src="images/Incredible Hulk.jpg" height="570" width="450"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2011 (Fury's Busy Week)");
                    $("#partxt").append("Captain America First Avenger, Thor, Iron Man 2");
                    $("#prevtxt").append("Iron Man");
                    $("#nextxt").append("Avengers");
                    $("#plotxt").append("Bruce Banner is a Brilliant Scientist. He falls in love with the Daughter of General Thadeaus Ross (Betty Ross). Ross performs an experiment on Bruce to transform him into a Super Soldier (instead, he turns into Hulk). To stop him, another Army Officer was sent. Instead he was smacked down by Hulk. To get vengence, he transformed himself into  a Super Soldier (Abomination). The Final face off is Hulk vs Abomination.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/xbqNb2PFKKA")})
                }
                else if(movie==3)
                {
                    $("#ph1sel").prop('disabled',true);
                    $("#image").append('<img src="images/Iron Man 2.jpg" height="570" width="450"/>'); 
                    $("#image").show();
                    $("#mcuyear").append("2011 (Fury's Busy Week)");
                    $("#partxt").append("Incredible Hulk, Thor, Captain America First Avenger");
                    $("#prevtxt").append("Iron Man");
                    $("#nextxt").append("Avengers, Iron Man 3");
                    $("#plotxt").append("A Russian Scientist (Ivan Vanko) whose father was betrayed by Howard Stark wants to get revenge on Tony Stark. He prepares his own armor with the Help of Hammer Industries. Stark is lavish, irresponsible with his Technology. The Arc Reactor slowly poisons him. Thus he has to fix the Arc Reactor and stop Ivan.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/wKtcmiifycU")})
                }
                else if(movie==4)
                {
                    $("#ph1sel").prop('disabled',true);
                    $("#image").append('<img src="images/CA 01.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("1940's, 2011 (Fury's Busy Week)");
                    $("#partxt").append("Incredible Hulk, Thor, Iron Man 2");
                    $("#prevtxt").append("Eternals");
                    $("#nextxt").append("Agent Carter, Captain Marvel, Avengers");
                    $("#plotxt").append("The Movie narrates about Steve Rogers aka Captain America (The First Avenger), on his transformation from a Skinny Lad to a Super Soldier. He participates in The Second World War, Battle against Nazi's (Red Skull) who found the Tesseract that has infinite energy, which can destroy the World. Steve and Peggy Carter love each other. Steve sacrifices himself to save the world, freezes into ice for 70 years.");  
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/JerVrbLldXw")})
                }
                else if(movie==5)
                {
                    $("#ph1sel").prop('disabled',true);
                    $("#image").append('<img src="images/Thor 1.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2011 (Fury's Busy Week)");
                    $("#partxt").append("Incredible Hulk, Iron Man 2, Captain America First Avenger");
                    $("#prevtxt").append("");
                    $("#nextxt").append("Avengers");
                    $("#plotxt").append("The Movie takes the MCU to cosmic Side (Asgrad), ruled by Norse Mythology Gods, Thor (Son of Odin) has to prove his valour to his Father, to become the nextxt King. His Initial Failiure Expelled him to Earth (Midgard), where he falls in love with a Scientist (Jane Foster). Thor has to stop his Cunning brother (Loki) from taking the Throne of Asgard."); 
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/JOddp-nlNvQ")})
                }
                else
                {
                    $("#ph1sel").prop('disabled',true);
                    $("#image").append('<img src="images/Avengers 1.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2012");
                    $("#partxt").append("Loki Season 1");
                    $("#prevtxt").append("Incredible Hulk, Captain America First Avenger, Thor, Iron Man 2");
                    $("#nextxt").append("Captain America Winter Soldier, Thor Dark World, Iron Man 3");
                    $("#plotxt").append("Nick Fury forms a Team of Super Heroes called the Avengers who work along with SHIELD (A Top Level Organisation), to save the Planet from Loki's Invasion. Loki brain washes few people. Initially, they are reluctant to work as a Team due to their differences, but sooner or later, they have to save the World Together.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/eOrNdBpGMv8")})
                }
            });
        }
        else if(phase==2)
        {
            $("#ph2sel").show();
            $('#ph2sel').on('change',function() 
            {
                var movie = $(this).val();
                if(movie==1)
                {
                    $("#ph2sel").prop('disabled',true);
                    $("#image").append('<img src="images/CA 02.jpg" height="570" width="400"/>');  
                    $("#image").show(50);
                    $("#mcuyear").append("2014");
                    $("#partxt").append("");
                    $("#prevtxt").append("Avengers");
                    $("#nextxt").append("Avengers Age of Ultron");
                    $("#plotxt").append("Hydra (A Secret Organisation within SHIELD) whose main aim is to bring the SHIELD down, plan different operations with the help of their Top Biological Weapon (Winter Soldier) who commits a Lot of Murders. Barnes is Brain washed by Hydra. Captian America Along with Nick Fury, Black Widow has to destroy Hydra, stop Bucky Barnes (Winter Soldier). Steve comes to know the truth about Barnes. Hydra is exposed and SHIELD is destroyed.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/7SlILk2WMTI")})
                }
                else if(movie==2)
                {
                    $("#ph2sel").prop('disabled',true);
                    $("#image").append('<img src="images/Iron Man 3.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2013");
                    $("#partxt").append("");
                    $("#prevtxt").append("Avengers");
                    $("#nextxt").append("Avengers Age of Ultron");
                    $("#plotxt").append("Tony Stark dis-respected a Brilliant Young Scientist (Aldrich Killian), who founds a Organisation (AIM) to improve Disable people with the help of Heat and use them as Weapon. They work with Mandarin (the leader of Ten Ring's Organisation). Tony Stark's house is destroyed, he escapes to a remote place, with the help of a nerd kid, he repairs his aromr, and tries to stop Aldrich.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/YLorLVa95Xo")})
                }
                else if(movie==3)
                {
                    $("#ph2sel").prop('disabled',true);
                    $("#image").append('<img src="images/Thor 2.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2013");
                    $("#partxt").append("");
                    $("#prevtxt").append("Avengers");
                    $("#nextxt").append("Avengers Age of Ultron");
                    $("#plotxt").append("Thor's Ancestor (Bhor), hides a highly dangerous substance (Ether) from the Dark Elves thousand's of years Back. The Ether (in a unfortunate manner), gets inside Jane Foster, who becomes Sick and is taken to Asgard for her treatment. Loki is imprisoned for his actions against Humanity in Midgard. The Dark Elves are Back led by Malekith, Asgard is destroyed, Thor along with his brother has to defeat the Dark Elves and take Ether out of Jane Foster.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/npvJ9FTgZbM")})
                }
                else if(movie==4)
                {
                    $("#ph2sel").prop('disabled',true);
                    $("#image").append('<img src="images/Guardians 1.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2014");
                    $("#partxt").append("I am Groot");
                    $("#prevtxt").append("");
                    $("#nextxt").append("Guardians of Galaxy Volume 2");
                    $("#plotxt").append("A Bunch of Unknown Space pirates, are put together in a prison due to a unavoidable situation. They have to work as a Team and escape from there. The Power Stone is in huge demand. Ronin (A space lord who works for Thanos), wants to destroy the Entire Planet (Xandar), with the help of Power Stone. The Guardians have to plan appropriately, and stop Ronin from destroying the Galaxy.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/d96cjJhvlMA")})
                }
                else if(movie==5)
                {
                    $("#ph2sel").prop('disabled',true);
                    $("#image").append('<img src="images/Avengers 2.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2015");
                    $("#partxt").append("Antman 1");
                    $("#prevtxt").append("Captain America Winter Soldier, Iron Man 3, Thor Dark World");
                    $("#nextxt").append("Captain America Civil War, Thor Ragnarok");
                    $("#plotxt").append("Tony Stark wants to create an AI (Ultron), to safeguard and prepare a Suit of Armor around the World. The Plan goes wrong and an evil AI is created which wants to take control of the entire world. Hydra experiments Wanda and Quicksilver initially work with Ultron to take revenge against Stark. But later, they realise the true intention of Ultron. The Avengers along with Wanda, Quick Silver and Vision, has to save the world from the Ultron's Invasion");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/tmeOjFno6Do")})
                }
                else
                {
                    $("#ph2sel").prop('disabled',true);
                    $("#image").append('<img src="images/Antman 1.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2015");
                    $("#partxt").append("Avengers Age of Ultron");
                    $("#prevtxt").append("");
                    $("#nextxt").append("Captain America Civil War");
                    $("#plotxt").append("Hank Pym, a great Scientist who once worked with Howard Stark and SHEILD, is old now. He wants someone to take on the Mantle of Antman (the suit which can shrink and enlarge, communicate with Ants). Scott Lang, a theif, gets the Suit unfortunately, and becomes the Antman. He has to Stop Darren Cross aka Yellow Jacket, who works in Pym Industry, and wants the Ant man suit to test on various animals and humans, destroy them.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/pWdKf3MneyI")})
                }
            });
        }
        else if(phase==3)
        {
            $("#ph3sel").show();
            $('#ph3sel').on('change',function() 
            {
                var movie = $(this).val();
                if(movie==1)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/CA 3.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2016");
                    $("#partxt").append("Black Widow");
                    $("#prevtxt").append("Avengers Age of Ultron, Antman 1");
                    $("#nextxt").append("Spider Man Homecoming, Black Panther, Antman and the Wasp");
                    $("#plotxt").append("In the name of defeating Enemy, the Avengers are involved in Mass Destruction. Hence, a Pact (Sokovia Accords) was created, which does not allow free movement of Avengers. The Avengers are split, based on their point of View into two sides and fight each other. Bucky Barnes is on the run, for his previous murders. Tony and Steve has to fought among themselves who was tricked by Zemo.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/dKrVegVI0Us")})
                }
                else if(movie==2)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Spider Man 1.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2017");
                    $("#partxt").append("");
                    $("#prevtxt").append("Captain America Civil War, Avengers");
                    $("#nextxt").append("Avengers Infinity War");
                    $("#plotxt").append("During the Battle at Germany (Civil War), Tony was impressed by a Young Nerd, who can create Web Shooters, recruited him in his team and sponsered him. Tony was also the Chair person of DRDO, whose responsiblitiy was to clear the damages caused due to external threat. The waste resources from DRDO were misused by a bunch of people to create weapons. Spider Man aka Peter Parker has to stop Vulture from stealing resources, prevent misuse and earn the respect of Mr.Stark to join the Avengers.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/rk-dF1lIbIg")})
                }
                else if(movie==3)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Doc Str 1.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2016");
                    $("#partxt").append("");
                    $("#prevtxt").append("");
                    $("#nextxt").append("Thor Ragnarok, Avengers Infinity War");
                    $("#plotxt").append("Stephen Strange is a great surgeaon. Once he met with an accident due to carelessness. To fix his wounds, come back to his normal life, he went to Kamar Taj in Nepal. He was trained in Magic and became the Master of Mystic arts. He has to stop Kaecillius along with Wong, Ancient One, who wants to go against the Mystic arts, destory the World. Doctor Strange has to stop Dormamu with the help of Time Stone.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/HSzx-zryEgM")})
                }
                else if(movie==4)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Guardians 2.jpg" height="550" width="375"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2014");
                    $("#partxt").append("I am Groot");
                    $("#prevtxt").append("Guardians of Galaxy Volume 1");
                    $("#nextxt").append("Avengers Infinity War");
                    $("#plotxt").append("Two weeks after defeating Ronin, the Guardians want to save a bunch of people (Soverign People) from a Giant Monster. On their way back, they are interrupted by EGO (Peter Quill's Father), who wants his son's help, to destroy the Galaxy. Peter initially happy after bonding with his Dad, comes to know about his true intentions later. Peter along with Yondu, other Guardians have to stop EGO.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/dW1BIid8Osg")})
                }
                else if(movie==5)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Thor 3.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2017");
                    $("#partxt").append("");
                    $("#prevtxt").append("Thor Dark World, Avengers Age of Ultron, Doctor Strange");
                    $("#nextxt").append("Avengers Infinity War");
                    $("#plotxt").append("Thor goes to Asgrard, where an imposter Loki is ruling. In search of Odin, Thor comes to know about Hela (Godess of Death, Odin's Daughter), who wants vengence, destroy Asgard. Thor goes to Sarkar, fights Hulk and forms a Team (Revengers), to fight against Hela, and save the people of Asgard.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/ue80QwXMRHg")})
                }
                else if(movie==6)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/BP 01.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2018");
                    $("#partxt").append("");
                    $("#prevtxt").append("Captain America Civil War");
                    $("#nextxt").append("Avengers Infinity War");
                    $("#plotxt").append("After his Dad's demise (T'Chaka), Prince T'Challa fights for the Throne and becomes the King of Wakanda. T'Chaka's Nephew (Killmonger), is fond of the Rich resources (Vibranium) that Wakanda has, wants to plunder it, and make business with it, whereas T'Challa wants to protect Vibranium and his people. This ideological difference leads to their Conflict.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/xjDjIWPwcPU")})
                }
                else if(movie==7)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Captain Marvel.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("1995");
                    $("#partxt").append("");
                    $("#prevtxt").append("Captain America First Avenger");
                    $("#nextxt").append("Iron Man 1, Avengers Endgame");
                    $("#plotxt").append("Carol Danvers is a Fighter Jet Pilot, who works for the US Airforce. In a unexpected accident with the Tesseract, she becomes powerful. The Kree soldiers erased her memory and used her as a weapon against the Skrulls, to protect their home planet Hala. Danvers comes to know about their true intention via Supreme Intelligence. Now Nick Fury and Captain Marvel has to save Skrull's from Kree Invasion.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/Z1BCujX3pw8")})
                }
                else if(movie==8)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Avengers 3.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2018");
                    $("#partxt").append("Antman and the Wasp");
                    $("#prevtxt").append("Captain America Civil War, Black Panther, Spider Man Homecoming, Black Widow, Guardians of Galaxy Volume 2, Thor Ragnarok, Doctor Strange");
                    $("#nextxt").append("Avengers Endgame");
                    $("#plotxt").append("The Biggest face off by all the Super heroes, against one Common Enemy (Thanos). The Mad Titan wants six Infinity stones to snap and wipe half of the Universe from existence. All the Avengers group together and try their best to defend the Stones, untill their efforts go in vain.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/6ZfuNTqbHE8")})
                }
                else if(movie==9)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Antman 2.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2018");
                    $("#partxt").append("Avengers Infinity War");
                    $("#prevtxt").append("Captain America Civil War");
                    $("#nextxt").append("Avengers Endgame");
                    $("#plotxt").append("Hank Pym along with Antman and the Wasp, wants to rescue Janet Van Dyne (Wife of Hank Pym) from the Quantum Realm, where she is stuck for the past 30 years. Antman lost his suit and is house arrested for violating Sokovia Accords. (Ghost) who is a victim of Hank's failiure experiment, wants her Vengence. A Group of low profile Salesmen wants Pym's technology to sell and gain Profit. In the end Antman and Wasp has to deal with all the above issues.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/UUkn-enk2RU")})

                }
                else if(movie==10)
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Avengers 4.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2018 - 2023");
                    $("#partxt").append("");
                    $("#prevtxt").append("Avengers Infinity War, Antman and the Wasp");
                    $("#nextxt").append("Wanda Vision, Ms.Marvel, She Hulk, Falcon and the Winter Soldier, Black Panther Wakanda Forever, Hawkeye, Spider Man Far From Home, Thor Love and Thunder, Eternals, Antman and Wasp Quantumania, Loki Season 1");
                    $("#plotxt").append("This movie is the Culmination and Call back to all the previous movies. After losing half of the Avengers to Thanos Snap, the remaining Avengers are hopeless. Antman comes back from Quantum Tunnel, and pitches about Time Travel Idea to the Avengers. The Remaining Avengers go back in time to specific moments in the past to collect Infinity Stones and reverse the Snap. The Final Battle involves all the Avengers facing against Thanos Army. After that Battle all Superheroes find their own path to live by.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/TcMBFSGVi1c")})
                }
                else
                {
                    $("#ph3sel").prop('disabled',true);
                    $("#image").append('<img src="images/Spider Man 2.jpg" height="570" width="400"/>'); 
                    $("#image").show(50);
                    $("#mcuyear").append("2024");
                    $("#partxt").append("");
                    $("#prevtxt").append("Avengers Endgame");
                    $("#nextxt").append("Secret Invasion, Spider Man No Way Home");
                    $("#plotxt").append("After Tony Stark sacrificed his life for the greater good, Peter Parker has to find his own way. He spends some time in College Vacation Tour across Europe. He comes across Mysterio, an Ex-Stark Employee, who was fired by Stark, for not being useful to him. Mysterio wants Stark's EDITH Glasses, to control the Drones, create Illusion and destroy the world. He manipulates Peter and is succesful in his misson. Now Spider Man has to withstand Mysterio's attack and save the World, his college colleagues.");
                    $("#text").show();
                    $("#trabut").click(function(){window.open("https://youtu.be/Nt9L1jCKGnE")})
                }
            });
        }
        else if(phase==4)
        {
            $("#ph4sel").show();
            $('#ph4sel').on('change',function() 
            {
            var movie = $(this).val();
            if(movie==1)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Wanda Vision.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2023");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Doctor Strange in the Multiverse of Madness, The Marvels");
                $("#plotxt").append("Nine days after the Endgame Battle, Wanda Maximoff visits SWORD Headquartes, where she comes to know that Vision (Dead from Infinity War) is torn apart and used for Research purpose. Unable to withstand the grief, Wanda creates a Hex (Illusion Town called West View) with actual people and an imaginary Vision. SWORD tries to intrude and warn Wanda from outside the Hex. Agatha, a witch and resident of West view is well aware about the Situation and wants to Steal Wandas power.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/sj9J2ecsSpo")})
            }
            else if(movie==2)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/FAWS.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2024");
                $("#partxt").append("Black Panther Wakanda Forever");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Captain America Brave New World, Thunderbolts");
                $("#plotxt").append("After the Blip, GRC a independent Council was created, to displace the people back to their home, who were erased out of existence during the Blip. Bucky has to undergo therapy sessions to overcome his past trauma's, Sam has to manage his Family and the business. A New Captain America (John Walker) was appointed by the US Governement as replacement of Steve Rogers. A revolt group under Karli Margantha took the Super Soldier serum and are against GRC and the Government actions. Karli was funded by a Unknown Wealthy Induvidual (Powerbroker). Sam along with Bucky Barnes, Zemo, Sharon Carter has to stop Karli, find Powerbroker and deal with Walker's actions.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/IWBsDaFWyTE")})
            }
            else if(movie==3)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Black widow.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2016");
                $("#partxt").append("");
                $("#prevtxt").append("Captain America Civil War");
                $("#nextxt").append("Avengers Infinity War");
                $("#plotxt").append("After the Battle at Germany, Natasha Romanhoff is on the run for violating Sokvia Accords. She goes to Budapest, where she meets her long lost sister Yelena Belova. Along with Red Guardian, Melina, she has to take down Task Master and the Red Room, who are involved in Brainwashing Girls and turning them into a Biological weapon.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/ybji16u608U")})
            }
            else if(movie==4)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Shang Chi.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2023+");
                $("#partxt").append("She Hulk Attorney at Law");
                $("#prevtxt").append("");
                $("#nextxt").append("");
                $("#plotxt").append("As a Son of the Powerful lord Wen Wu (Mandarin), Shang Chi has to undergo a lot of Martial Arts training, which he is not interested. After 10 years, he lives in San Fransisco to overcome his past trauma's and to escape from his Dad's presence. However, he is abducted and taken back to his Dad's Ten Rings Organisation. Wen Wu wants to retreive his wife from an another Dimension, whereas Shang Chi wants to prevent his Dad. They go to Talo (A pocket Reality), where Shang Chi trains and comes to know about the true potential of Ten Rings. The Final Faceoff is in the Talo where Shang Chi, Katy, the Native people has to fight against Mandarin, other soul sucking creatures.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/x7Krla_UxRg")})
            }
            else if(movie==5)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Ms marvel.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2025");
                $("#partxt").append("Spider Man No Way Home");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("The Marvels");
                $("#plotxt").append("A high school kid, Kamala Khan is so obsessed with Captain Marvel. She receives a mystical Bangle from her Grandma which can create Hard Light, used to travel to another Dimension (Noor Dimension). Initially, unable to control her powers, Kamala Khan slowly understands its usage. She goes to Karachi, where she meets her Grandma and understands the History of the Bangle. A group of people who were expeled from the Noor Dimension, wants the Bangle back to escape back to their reality. The DRDO wants to put an end to Children using Super power and disturbing the Soceity. The Final Face off is Kamala Khan, along with her Family, saving Kamran and the Bangle, from DRDO and the expelled people.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/m9EX0f6V11Y")})
            }
            else if(movie==6)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Loki Season 1.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("Start - End");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame, Avengers");
                $("#nextxt").append("Loki Season 02");
                $("#plotxt").append("As an Alternate Variant created when the Avengers time traveled back to the past, Loki is summoned in the TVA. Initially reluctant, Loki has to help the TVA to find Sylvie (Another Female variant of Loki). Sylvie wants the TVA to be thrown, wants to kill the person responsible for her pruning. As Loki and Sylvie spend time together on a unknown plant, Loki comes to know that the workers in the TVA and the Whole system is fake. Loki wants the Truth to be exposed to everyone. He is sent to the Void where he meets multiple variants of himself. The Final faceoff is Loki and Sylvie vs the Man Controlling all the Timeline.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/nW948Va-l10")})
            }
            else if(movie==7)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Eternals.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("5000 BCE - 2023");
                $("#mcu").show();
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Captain America First Avenger");
                $("#plotxt").append("The Celestials are God level beings who created the Entire Universe, and all the organisms in it. They created specific Human like Robots called Eternals, whose primary job is to protect the planet from external attacks, improve the knowledge on the Planet. The Celestials also created Deviants, the exact opposite of Eternals. A group of Eternals were sent to the Earth, and were instructed not to interfere in Human's internal conflicts. Due to the difference in their opinion, they were split and each lived their own live for thousands of years. When the Deviants start attacking after their Hibernation, Sersi comes to know about the actual intention of Celestials. She wants all the Eternals to stand by her and oppose the Celestial's birth (Tiamut). However, things didn't pant the same way as there are some losses involved.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/x_me3xsvDgk")})
            }
            else if(movie==8)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Doc Str 2.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2024");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame, Wanda Vision, Spider Man No Way Home");
                $("#nextxt").append("");
                $("#plotxt").append("After losing her kids in the West view, Wanda tries to access the Multiverse (using Darkhold) and wants her kids back. A interdimension traveller (America Chavez), unable to control her power ends up in Earth. Doctor Strange wants to protect America Chavez, who is threatened by Wanda for her powers. Kamar Taj is attacked, destroyed. Strange and Chavez are sent to another universe (Earth-838), where they met an alternate Group of Super heroes called 'Illuminatti'. Wanda aware about her kid's presence in Earth-838, dream walks and attacks Illuminaati. Strange,Palmer go to another universe in search of Dark Hold. The Final faceoff is Strange dream walking to prevent Wanda from using Chavez's powers, which led to Incursion.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/aWzlQ2N6qqg")})
            }
            else if(movie==9)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/BP 02.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2024");
                $("#partxt").append("Falcon and the Winter Soldier");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Iron Heart");
                $("#plotxt").append("After the sudden loss of T'Challa, Wakanda is under immense pressure for it's Vibranium from the outside world. On the other hand, a Vibranuim detector designed by a High School Girl (Riri Williams), is used by the US Government and it detects Vibranium under water in Atlantic Ocean. The Research team is killed by the Leader of Ocean Tribe (Namor aka Ku'kul Khan), who wants to keep his people and the kingdom safe (Talokan). The US Government misinterupts the Attack and want to take revenge action on Wakanda. Thus, Namor makes a deal with the Wakanda to either kill the Girl or keep their identity a secret. Wakanda trying to save the Girl lose thier Ruler. The Final Face off is the Wakandan Army with their new Black Panther vs Namor and the Talokans .");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/_Z3QKkl1WyM")})
            }
            else if(movie==10)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Hawkeye.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2024");
                $("#partxt").append("Spider Man No Way Home");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Echo");
                $("#plotxt").append("Clint Barton aka Hawkeye loses hearing after his continous exposure to different attacks in the past. He just wants to live a Normal life and wants to celebrate Christmas with his family. He saves a Girl (Kate Bishop) who is good in archery. Barton has to safeguard Kate from the Track Suit Mafia and Echo. Kate wants Barton to be her mentor. Echo's father was killed by Ronin (an Alter ego of Barton) during the Blip. Thus Echo wants vengence for her Dad's murder. Yelena wants to kill Barton, as she wants justice for her sister. On further analysis, Barton comes to  know that Kate's mom (Eleanor Bishop), sent Yelena and also works with Underground Boss (King Pin). She also sponsered the Track Suit Mafia. The Final face off is Hawkeye,Kate and Jack  vs Yelena, King Pin and Track suit Mafia Gang in the Central Park at New York.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/5VYb3B1ETlk")})
            }
            else if(movie==11)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/She Hulk.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2024");
                $("#partxt").append("Shang Chi and the Legend of Ten Rings");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Captain America New World Order");
                $("#plotxt").append("Jennifer Walters is the Cousin of Bruce Banner aka Hulk. In a unfortunate accident she gains Hulk powers from her Cousin. Initially she practises with Bruce, to control her powers. Hulk goes to Sarkar. Jennifer Walters joins in a Law Firm and wants to resolve cases pertaining to Superheroes law division. Abomination's prison term is about to end, so he approaches Jennifer for his trial. He is released. Walters is popular as She Hulk. She also handles some other super hero cases regarding Wong, Frog Man. Jennifer comes to know about a unknown gang in the Internet named 'Hulking' who wants her Blood to turn into a Hulk. A mess is created in Abomination's underground house. She makes a Deal with the Writers and K.E.V.I.N about her show. Hulk returns from Sarkar with a surprise.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/u7JsKhI2An0")})
            }
            else if(movie==12)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/I am Groot.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2016");
                $("#partxt").append("Guardians of Galaxy Volume 2");
                $("#prevtxt").append("Guardians of Galaxy Volume 1");
                $("#nextxt").append("I am Groot Season 2");
                $("#plotxt").append("A mini TV series about Groot's development from young to Teenage. Takes place during Guardians Vol 2.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/D7eFpRf4tac")})
            }
            else if(movie==13)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Guardians Holiday Special.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2023+");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame, Thor Love and Thunder");
                $("#nextxt").append("Guardians of Galaxy Volume 3");
                $("#plotxt").append("After leaving Thor, Guardians are back in Knowhere. It's about Christmas time in Earth. Drax, Mantis want to give Quill a present as he is lonely. They come to know why Quill does not celebrate Christmas due to Yondu. They go to Earth in search of Hollywood actor Kevin Bacon. They kidnap him along with several gift items. Quill is shocked to see Bacon as his present. He wants the Guardians to send him back to Earth. Bacon understands their needs and sings a song. The Guardians each receive a Gift which they were waiting for a long time.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/OYhFFQl4fLs")})
            }
            else if(movie==14)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/werewolf.jpg" height="570" width="450"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2023+");
                $("#partxt").append("");
                $("#prevtxt").append("");
                $("#nextxt").append("");
                $("#plotxt").append("A Contest was conducted with several people where every induvidual is a trained killer with a couple of kills / murder. The Contest was to get the Gem (Bloodstone) without being killed. The Gem can convert a person into monster, keep them in control. Initially, the contestants tried to kill themseleves, but were unaware about Jack who can turn into a Werewolf. Elsa who had the right to Bloodstone, should also participate in the contest to prove her worthiness. Elsa and Jack had a conversation and made a deal to help themselves. Jack being a monster himself tried to help another monster (Ted) and let him go. This lead to their capture. All other contestant attacked Jack and Elsa. The Final Show down is Werewolf hunting each Contestant, Elsa trying to secure the Bloodstone.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/bLEFqhS5WmI")})
            }
            else if(movie==15)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Thor 4.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2023+");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Guardians of Galaxy Holiday Special");
                $("#plotxt").append("After Endgame, Thor is stout, has to make himself fit again. Along with the Guardians he fought and saved people. Gorr, the lone survivor in a Planet approached God for Help. When The God refused, he killed him and started a rampage to kill all the Gods. Jane is affected by Cancer. She goes to the New Asgard and becomes the Mighty Thor. Thor, Jane save Asgard from Gorr, who kidnapped some Children. Thor comes to know about Gorr, leaves to Omnipotent City along with Korg, Valkyrie, Jane to warn all the Gods about the imminent attack. Thor is body shamed by Zeus (Greek God). Thor goes to the Shadow Realm to deal Gorr by himself. Jane's health conditon becomes serious. The Final face off is Thor,Jane, the kidnapped Children against Gorr and his shadow Army.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/Go8nTmfrQd8")})
            }
            else if(movie==16)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Spider Man 3.jpg" height="570" width="450"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2024");
                $("#partxt").append("Hawkeye");
                $("#prevtxt").append("Spider Man Far From Home, Spider Man 1,2,3 (Raimi); The Amazing Spider Man 1,2 ; Venom 1,2");
                $("#nextxt").append("Doctor Strange in the Multiverse of Madness");
                $("#plotxt").append("As Spiderman's identity is known to the Entire world, Peter Parker is on the run. DRDO arrested him for killing Mysterio, the damages caused by Stark Drones. Peter faces harsh criticism from his colleagues. He approaches Dr.Strange to spell a cast that everyone has to forget Peter Parker as Spiderman. The Spell is messed up, unleashes few villian from the multiverse. Dr. Strange wants to send them back, where as Peter wants to fix them. This leads to a conflict. Norman Osborn shows his Alter ego (Goblin) and attacks them. Peter has to sacrifice, take vengence. He is interrupted by two other Spiderman who want to give correct guidance. The Final face off is the Spiderman's trying to fix the Villains.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/ZYzbalQ6Lg8")})
            }
            else if(movie==17)
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/Moon Knight.png" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("");
                $("#nextxt").append("");
                $("#plotxt").append("Marc Spector, an Identity Disorder Mercenary in order to Save his Life takes the Avatar of Khonsu (An Egyptian God). Marc in his childhood created an Alter Identity of Himself (Steven Grant) to overcome Depression. Khonsu punishes those people who commit Crime. Arthur Harrow, a Staunch Disciple of Ammit (Another Egyptian God), judges people according to their previous deeds and Eliminates them. Arthur wants to find the Tomb of Ammit in Egypt and release her. Marc is Shot, Dead. In the Afterlife, along with the Help of Egyptian Goddess Tauras, Marc/Steven has to comeback and Stop Arthur with the Help of Layla and Khonsu.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/x7Krla_UxRg")})
            }
            else
            {
                $("#ph4sel").prop('disabled',true);
                $("#image").append('<img src="images/What If S01.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("");
                $("#nextxt").append("Marvel Zombies");
                $("#plotxt").append("Uatu aka the Watcher, keeps watching on Different multiverse to gain knowledge. The show explores on alternate realities. We meet Peggy Carter as Captain America, T'Challa as Star Lord, Hank Pym as Yellow Jacket, Supreme Strange, Zombie Avengers, Kill monger, Funny Thor, Ultron as an evil AI. Every episode focuses on one Superhero whose fate his changed and the coressponding consequences that are observed. The Final face off is Watcher's Guardians of the Multiverse vs Ultrom who wants to capture the entire multiverse.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/x9D0uUKJ5KI")})
            }
        });
    }
    else if(phase==5)
    {
        $("#ph5sel").show();
        $('#ph5sel').on('change',function() 
        {
            var movie = $(this).val();
            if(movie==1)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Antman 3.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2023+");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame");
                $("#nextxt").append("Loki Season 02, Avengers Kang Dynasty");
                $("#plotxt").append("After Endgame Battle, Scott Lang wants to live a Normal Life, a Good Dad to Cassie. Cassie performs an experiment but it goes wrong and everyone is sucked into the Quantum Realm. Scott and Cassie meet a Bunch of Rebels. Vanet,Hank Pym,Hope meet Krailer (who works for Kang) but foul plays them. Meanwhile Scott and Cassie are arrested by MODOK (Darren Cross) and is captured by Kang, who wants to make a deal with Scott. Scott has to go inside the Quantum Core and make it small. The Quantum core was enlarged by Vanet Dyne who once spent time with Kang in fixing his Multiverse Chair. When she came to know the truth, she betrayed him. Scott finishes the job but Kang back fires him. The Final face off is Antman Family and the Rebels against Kang and his army. Scott is back to his normal routine life with a bit of suspicion.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/ZlNFpri-Y40")})
            }
            else if(movie==2)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Secret Invasion.png" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2025");
                $("#partxt").append("");
                $("#prevtxt").append("Captain Marvel, Avengers Endgame, Spider Man Far From Home");
                $("#nextxt").append("The Marvels");
                $("#plotxt").append("In 1995, when the Skrulls came to Earth as Refugees, Nick Fury made a Promise to find a New Home for the Skrulls in return of their help as Spies. Nearly after 30 years, when Fury failed to fulfill their Promise, Gravik the New Skrull General along with his Council and Young Rebellion Army wants to take control of the Earth as their New Home. At the same time Millions of Skrull are in the Planet, disguised as Spies and Top Position Leaders. The Skrulls try to destroy the Planet by starting World War 3, so that the humans can kill each other. Nick Fury along with the Help of Talos, G'iah and other Secret Agents have to stop Gravik and the Secret Invasion.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/Tp_YZNqNBhw")})
            }
            else if(movie==3)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Guardians 3.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("Avengers Endgame, Thor Love and Thunder, Guardians of Galaxy Volume 2, Guardians of Galaxy Holiday Special");
                $("#nextxt").append("");
                $("#plotxt").append("The High.Evol wants to create a Perfect Society, thus he experiments on various Creatures. One such Subject is 89P13 (Rocket), High.Evol was impressed by Rocket's intelligence but he wants to create better creatures than him. Rocket comes to know about the true intentions of High.Evol, manages to escape after losing his friends. In the present Day, he is attacked by Adam Warlock and is almost pushed towards his Death, the Guardians along with Gamora (Ravager) has to find the Pass-Key and save Rocket's Life. They go to Counter-Earth to face High.Evol. The Planet is Destroyed, the Guardians are split. Along with the help of Kraglin and Cosmo from Knowhere they have to Stop High.Evol. Some of the Guardians have to part ways. The Guardians Team with their New Captain will continue saving the Galaxy from different Threats.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/JqcncLPi9zw")})
            }
            else if(movie==4)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/The Marvels.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("Wanda Vision, Secret Invasion, Ms. Marvel, Avengers Endgame, Captain Marvel ");
                $("#nextxt").append("");
                $("#plotxt").append("");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/wS_qbDztgVY")})
            }
            else if(movie==5)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/I_Am_Groot_S2.webp" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2016");
                $("#partxt").append("Guardians of Galaxy Volume 2");
                $("#prevtxt").append("I am Groot Season 1");
                $("#nextxt").append("Avengers Infinity War");
                $("#plotxt").append("A mini TV series about Groot's development from young to Teenage. Takes place during Guardians Vol 2.");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/1k8H2CywVqg")})
            }
            else if(movie==6)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Loki S2.png" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("Start-End");
                $("#partxt").append("");
                $("#prevtxt").append("Loki Season 01, Antman and Wasp Quantumania ");
                $("#nextxt").append("");
                $("#plotxt").append("After Loki is sent to the TVA from End of Time, he starts to Time Slip. He has to fix this issue with the help of Ouroborus. He has to find Sylvie with the help of X-5 (Brad Wolf).");
                $("#text").show();
                $("#trabut").click(function(){window.open("https://youtu.be/dug56u8NN7g")})
            }/*
            else if(movie==7)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Echo.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("Hawkeye, Spider Man No Way Home, She Hulk");
                $("#nextxt").append("");
                $("#plotxt").append("");
                $("#text").show();
            }
            else if(movie==8)
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Deadpool 3.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("");
                $("#nextxt").append("");
                $("#plotxt").append("");
                $("#text").show();
            }
            else
            {
                $("#ph5sel").prop('disabled',true);
                $("#image").append('<img src="images/Captain America 4.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("");
                $("#partxt").append("");
                $("#prevtxt").append("");
                $("#nextxt").append("");
                $("#plotxt").append("");
                $("#text").show();
            }*/
        });
    }
    else
    {
        $("#cansel").show();
        $('#cansel').on('change',function() 
        {
            var movie = $(this).val();
            if(movie==1)
            {
                $("#cansel").prop('disabled',true);
                $("#image").append('<img src="images/Agent Carter.jpg" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("1940's");
                $("#partxt").append("");
                $("#prevtxt").append("Captain America First Avenger");
                $("#nextxt").append("Captain Marvel, Iron Man 1");
                $("#plotxt").append("Life changes for Peggy Carter after her boyfriend Steve Rogers is feared dead. Now she leads a dual life by doing administrative work as well as working as a S.H.I.E.L.D. agent under Howard Stark. After Howard's Death she becomes the Director of SHIELD.");
                $("#text").show();
                $("#trabut").hide();
            }
            else if(movie==2)
            {
                $("#cansel").prop('disabled',true);
                $("#image").append('<img src="images/Raimi spiderman.png" height="530" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2002 - 2007");
                $("#partxt").hide(); 
                $("#prevtxt").hide();
                $("#nextxt").append("Spider Man No Way Home");
                $("#plotxt").append("(I) Peter Parker is a Brilliant Student, one day during a visit to a Museum, a Spider bites him, he gains body and can shoot organic webs. He wants to use his power and earn money illegally, thus ends up losing his Uncle. Norman Osborn a leading Scientist, CEO of Oscorb Industries, is fired. Thus he creates an Alter Ego to threaten people (Goblin). On the other hand, Peter realises the Responsibilities with his power, designs a new suit, and becomes Spider Man. The Final face off is Goblin vs Spider Man. (II) Dr.Otto Octavius a Brilliant Scientist wants to create an energy source with Trittium, thus he creates mechanised arms for his experiment, but the experiment goes wrong, the arms take control of him. He turns evil. Spider Man has to defeat Dr.Octopus and save Mary Jane. (III) A local theif when trying to escape from Police falls into a giant experiment, becomes Sandman, an Alien Symbiote from Space, makes Peter as its host. Peter initially likes the New colour of the Suit (Black), but slowly changes into an arrogant person, Harry want to take Revenge on Peter, thus he becomes Goblin. Peter spoils the career of his fellow reporter Eddie Brock. Soon Peter realises the impact of Venom on his life, wants to avoid it. Eddie becomes Venom. Peter has to fight Sand Man, Venom, Harry to save the New York City.");
                $("#text").show();
                $("#trabut").hide();
            }
            else if(movie==3)
            {
                $("#cansel").prop('disabled',true);
                $("#image").append('<img src="images/Amazing Spiderman.png" height="570" width="400"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2012 - 2014");
                $("#partxt").hide();
                $("#prevtxt").hide();
                $("#nextxt").append("Spider Man No Way Home");
                $("#plotxt").append("(I) Peter Parker is a High School Nerd. One day he loses Uncle Ben in a unfortunate incident. He realises his responsibilities. He prepares Web Shooters, a Suit. In his School, Dr. Connors a Brilliant Teacher who lost an upper limb, tries to create a Serum, that can potentially convert him into a Lizard. He believed that humans have to evolve. He starts attacking the city, Peter comes to know the Truth, want to prevent Connors from converting the Whole city into Lizard. (II) Spider Man helps the NYPD in stopping Rhino. Peter and Gwenn Stacy have a Complicated relationship. Peter saves an Oscorb worker (Max millian), who becomes obsessed with him. Harry Osborn starts dying due to a unknown genetic disease. He beleives that Spider Man's blood could potentailly cure him. But Peter refuses to give his Blood. In a unfortunate accident, Max falls into a Pool of Electric eels and becomes Electro. When Spider Man tries to save him, Max misunderstands and starts attacking the City. Max and Harry Osborn together make a Deal to kill Spider Man. Spider Man has to fight them and at the same time save Gwenn Stacy.");
                $("#text").show();
                $("#trabut").hide();
            }
            else
            {
                $("#cansel").prop('disabled',true);
                $("#image").append('<img src="images/Venom.png" height="570" width="390"/>'); 
                $("#image").show(50);
                $("#mcuyear").append("2018 - 2020");
                $("#partxt").hide();
                $("#prevtxt").hide();
                $("#nextxt").append("Venom 3");
                $("#plotxt").append("(I) Eddie Brock, a Newspaper reporter comes in contact with an Alien Symbiote (Venom). The Symbiote neds a Host in order to sustain. A Rogue Scientist wants to make Humans better by combining Human Body and Symbiote. He Conducts experiments on Animals and Human Beings, but no one could survive. When Eddie comes to know about the true intention of the Scientist, he wants to publish an Article, but instead ends up losing his job. A Jobless Eddie and Venom want to take revenge on the Scientist (Riot). The Final face off is Venom vs Riot to prevent another Rocket Launch.(II) Cletus Kasady a psychopath falls in love with Shreik (whose screams are Shock waves). They are split by Officer Mulligan. After few years, Kasady is in jail for his murders. When Kasady wants Eddie to investigate him, he bites his hand, thus a drop of Venom is mixed with Kasady which led to the birth of Carnage. Carnage breaks out from the prison, saves Shreik from her cell, and eventually want to marry her. Shreik want to take revenge on Mulligan. Meanwhile a misunderstanding led Venom to part ways with Eddie. The Final face off is Eddie convincing Venom to fight against Carnage and defeat him.");
                $("#text").show();
                $("#trabut").hide();
            }
        });
    }
    });
    $("#mcubut").click(function(){$("#mcuyear").fadeToggle(150)})
    $("#parbut").click(function(){$("#partxt").fadeToggle(150)})
    $("#prebut").click(function(){$("#prevtxt").fadeToggle(150)})
    $("#nxtbut").click(function(){$("#nextxt").fadeToggle(150)})
    $("#pltbut").click(function(){$("#plotxt").fadeToggle(150)})
    $('#rest').on('click',function()
    {
        location.reload();
    });
}); 
