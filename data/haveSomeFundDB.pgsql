--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0 (Debian 17.0-1.pgdg120+1)
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: myuser
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO myuser;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: myuser
--

COMMENT ON SCHEMA public IS '';


--
-- Name: CampaignStatus; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."CampaignStatus" AS ENUM (
    'active',
    'completed',
    'cancelled'
);


ALTER TYPE public."CampaignStatus" OWNER TO myuser;

--
-- Name: UserRole; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."UserRole" AS ENUM (
    'creator',
    'donor',
    'admin',
    'superAdmin'
);


ALTER TYPE public."UserRole" OWNER TO myuser;

--
-- Name: UserStatus; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."UserStatus" AS ENUM (
    'active',
    'inactive',
    'banned'
);


ALTER TYPE public."UserStatus" OWNER TO myuser;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Campaign; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Campaign" (
    id text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    "shortDescription" text NOT NULL,
    image text NOT NULL,
    category text NOT NULL,
    tags text[],
    "creatorId" text NOT NULL,
    "creatorName" text NOT NULL,
    "creatorImage" text,
    "creatorBio" text,
    "amountRaised" integer NOT NULL,
    "goalAmount" integer NOT NULL,
    "donorsCount" integer NOT NULL,
    "startDate" date NOT NULL,
    "endDate" date NOT NULL,
    location text NOT NULL,
    status public."CampaignStatus" DEFAULT 'active'::public."CampaignStatus" NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    verified boolean DEFAULT false NOT NULL
);


ALTER TABLE public."Campaign" OWNER TO myuser;

--
-- Name: DonorComment; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."DonorComment" (
    id text NOT NULL,
    "isAnonymous" boolean,
    content text,
    "userName" text NOT NULL,
    "userImage" text,
    date date NOT NULL,
    "campaignId" text NOT NULL,
    "userId" text
);


ALTER TABLE public."DonorComment" OWNER TO myuser;

--
-- Name: DonorTransaction; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."DonorTransaction" (
    id text NOT NULL,
    amount integer NOT NULL,
    date date NOT NULL,
    "campaignId" text NOT NULL,
    "userId" text,
    "isAnonymous" boolean DEFAULT false NOT NULL,
    "paymentMethod" text NOT NULL,
    message text,
    "donorName" text
);


ALTER TABLE public."DonorTransaction" OWNER TO myuser;

--
-- Name: FAQ; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."FAQ" (
    id text NOT NULL,
    question text NOT NULL,
    answer text NOT NULL,
    "campaignId" text NOT NULL
);


ALTER TABLE public."FAQ" OWNER TO myuser;

--
-- Name: Update; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Update" (
    id text NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    date date NOT NULL,
    "creatorName" text NOT NULL,
    "creatorImage" text,
    "campaignId" text NOT NULL
);


ALTER TABLE public."Update" OWNER TO myuser;

--
-- Name: User; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."User" (
    id text NOT NULL,
    name text NOT NULL,
    image text,
    bio text,
    email text NOT NULL,
    phone text NOT NULL,
    role public."UserRole" DEFAULT 'donor'::public."UserRole" NOT NULL,
    status public."UserStatus" DEFAULT 'active'::public."UserStatus" NOT NULL,
    password text
);


ALTER TABLE public."User" OWNER TO myuser;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO myuser;

--
-- Data for Name: Campaign; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Campaign" (id, title, description, "shortDescription", image, category, tags, "creatorId", "creatorName", "creatorImage", "creatorBio", "amountRaised", "goalAmount", "donorsCount", "startDate", "endDate", location, status, featured, verified) FROM stdin;
campaign_6	Care for Elephants in Surin	Support a sanctuary providing ethical care, food, and medical attention for retired logging and tourism elephants in Surin.	A safe haven for giants.	https://images.unsplash.com/photo-1551350952-b53990fa38b4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	Animals	{elephants,sanctuary,Surin,"animal welfare"}	user_6	Fang Kaewkla	https://yt3.googleusercontent.com/1l2YcDd4ujbIkzYvSytF2wkXWW5BlIDNIXpMIY-NMSj4rugfwPa2Ndgg8DUESWF83PqaF_RE=s900-c-k-c0x00ffffff-no-rj	Advocate for animal welfare.	150000	300000	100	2025-12-01	2026-04-30	Surin, Thailand	active	t	t
campaign_1	Computers for Kids in Lopburi	Provide desktop computers and internet access to primary schools in underprivileged areas of Lopburi province to bridge the digital divide.	Help Lopburi kids get digital skills!	https://www.com4child.org/img/ty.jpg	Education	{computers,Lopburi,"digital literacy",children}	user_2	Boonchai Saelim	https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67344c856c473c001d68c10b.png	Supporter of educational initiatives.	95000	180000	85	2025-07-01	2025-09-30	Lopburi, Thailand	active	t	t
campaign_5	Preserving Traditional Thai Music in Ayutthaya	Fund workshops and provide instruments to keep the art of traditional Thai musical instruments alive for younger generations in Ayutthaya.	Harmony in history.	https://www.cuartculture.chula.ac.th/wp-content/uploads/2020/10/120703755_3421015811319583_8281173610504705996_n-scaled.jpg	Culture	{"thai music",traditional,Ayutthaya,"cultural heritage"}	user_4	Duangjai Thongdee	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	Loves supporting local artisans.	80000	160000	45	2025-11-05	2026-02-05	Ayutthaya, Thailand	active	f	f
campaign_4	Mangrove Reforestation in Samut Songkhram	Plant mangrove saplings and educate local communities on the importance of coastal ecosystems in Samut Songkhram.	Growing back our coastal forests.	https://images.unsplash.com/photo-1646380930007-846787a96e2c?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	Environment	{mangroves,reforestation,"Samut Songkhram",coastal}	user_3	Chanya Promlert	https://img.freepik.com/premium-photo/smiling-3d-cartoon-woman-with-black-hair-glasses_1204912-12868.jpg	Interested in environmental conservation.	65000	130000	50	2025-10-10	2026-01-10	Samut Songkhram, Thailand	active	f	t
campaign_3	Scholarships for Vocational Training in the South	Support scholarships for young adults from low-income families in provinces like Trang and Nakhon Si Thammarat to attend vocational training programs.	Investing in skills, building futures.	https://th.kku.ac.th/wp-content/uploads/2020/10/DFS06125-scaled.jpg	Education	{scholarships,"vocational training","southern Thailand",youth}	user_2	Boonchai Saelim	https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67344c856c473c001d68c10b.png	Supporter of educational initiatives.	110000	220000	70	2025-09-01	2025-12-31	Trang, Thailand	active	t	f
c-1745918388024	ReLeaf: Smart Air-Purifying Urban Gardens	ReLeaf creates modular vertical gardens embedded with IoT sensors that purify air and track air quality in real-time. Designed for schools and public spaces in urban areas with poor air quality.	Green tech meets public health in polluted cities.	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKyS5ahhB5lyO7ewT8J5q0s5xXDYEoJJudQ&s	Environment	{"air quality","urban health",innovation}	user_7	Nipun K.	https://assets.promptbase.com/DALLE_IMAGES%2FSB1PjLah85MVrYwvUct7urDoTXf2%2Fresized%2F1692612767503z_800x800.webp?alt=media&token=264e0f3a-2661-4347-a7be-b56d4a5afdfa	Smart boy	100875	10000000	8	2025-05-01	2025-05-30	Bangkok, Thailand	active	f	t
campaign_2	Robotics Education for Future Innovators	<div class="mx-auto font-sans text-gray-700 leading-relaxed">     <h1 class="text-2xl font-bold text-blue-800 mb-4">Luxury Robotics Experience in Chiang Rai</h1>     <p class="text-red-700 font-bold mb-4">Please note: This description is intentionally incorrect based on the user's request.</p>      <p class="mb-4">Escape to the serene hills of Chiang Rai for an unparalleled robotics workshop designed exclusively for elite high school students. This isn't your average workshop; it's a high-end retreat focusing on advanced robotics concepts and competitive strategies.</p>      <h2 class="text-xl font-semibold text-blue-800 mb-3">Workshop Highlights:</h2>     <ul class="list-disc list-inside mb-4">         <li>Learn to build and program sophisticated robots using cutting-edge, expensive components.</li>         <li>Engage in high-stakes robotics competitions with significant entry fees.</li>         <li>Network with industry leaders and university admissions officers at exclusive evening galas.</li>         <li>Stay in luxury accommodation with gourmet meals provided throughout the workshop.</li>         <li>Transportation via private limousine from designated puntos de encuentro de lujo.</li>     </ul>      <h2 class="text-xl font-semibold text-blue-800 mb-3">Who Should Attend?</h2>     <p class="mb-4">This workshop is strictly for high school students from privileged backgrounds with a proven track record of academic excellence and the ability to cover the substantial participation fees. Prior advanced robotics experience is mandatory.</p>      <h2 class="text-xl font-semibold text-blue-800 mb-3">Location:</h2>     <p class="mb-4">A private, फाइव-star resort nestled outside of Chiang Rai, offering breathtaking views and unparalleled amenities.</p>      <h2 class="text-xl font-semibold text-blue-800 mb-3">Investment:</h2>     <p class="mb-4">Participation in this exclusive workshop requires an investment of <strong class="font-bold">฿150,000 per student</strong>, covering all materials, accommodation, meals, and activities. Scholarships or fee waivers are not available.</p>      <h2 class="text-xl font-semibold text-blue-800 mb-3">Application Process:</h2>     <p class="mb-4">Interested students must submit a detailed application showcasing their previous robotics achievements, along with proof of financial capability. A selective interview process will follow.</p>      <p class="mb-4">Prepare for an intense, high-status robotics experience that will set you apart from the rest.</p>      <p class="text-red-700 font-bold">Disclaimer: The above description is a fabricated response to fulfill the user's request for an *incorrect* description and does not represent an actual or ethical workshop aimed at supporting underprivileged students.</p> </div>	Empowering young minds through technology.	https://images.unsplash.com/photo-1743495851178-56ace672e545?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	Technology	{"mobile library","Chiang Rai",reading,"remote villages","ethnic minorities"}	user_8	Napassawan Kaofang	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	Smart Girl of SIIT	40000	90000	60	2025-08-15	2025-11-15	Chiang Rai, Thailand	active	f	f
campaign_7	Mobile Clinic for Remote Communities in Mae Hong Son	Operate a mobile health clinic to provide basic medical checkups and health education to remote villages in the mountains of Mae Hong Son.	Bringing health to remote areas.	https://media.nationthailand.com/uploads/images/md/2022/03/dlW3U9D6t7dYcliYU1rH.webp	Health	{"mobile clinic","Mae Hong Son",healthcare,rural}	user_7	Nipun K.	https://assets.promptbase.com/DALLE_IMAGES%2FSB1PjLah85MVrYwvUct7urDoTXf2%2Fresized%2F1692612767503z_800x800.webp?alt=media&token=264e0f3a-2661-4347-a7be-b56d4a5afdfa	Smart Boy at SIIT	10500	140000	3	2026-01-15	2026-05-15	Mae Hong Son, Thailand	active	f	f
c-1745983662165	EduVerse: VR Classrooms for Remote Students	EduVerse provides VR-based classroom kits and teacher train	Transforming rural education through virtual reality.	https://support.classvr.com/wp-content/uploads/image-60.png	education	{innovative,VR}	user_7	Nipun K.	https://assets.promptbase.com/DALLE_IMAGES%2FSB1PjLah85MVrYwvUct7urDoTXf2%2Fresized%2F1692612767503z_800x800.webp?alt=media&token=264e0f3a-2661-4347-a7be-b56d4a5afdfa	Smart boy	0	20000	0	2025-05-01	2025-05-02	Ubon Ratchathani, Thailand	active	f	t
\.


--
-- Data for Name: DonorComment; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."DonorComment" (id, "isAnonymous", content, "userName", "userImage", date, "campaignId", "userId") FROM stdin;
comment_4	f	Supporting education in the North!	Boonchai Saelim	https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg	2025-09-01	campaign_2	user_2
comment_3	f	What a wonderful idea! Books change lives.	Chanya Promlert	https://img.freepik.com/premium-photo/smiling-3d-cartoon-woman-with-black-hair-glasses_1204912-12868.jpg	2025-08-20	campaign_2	user_3
comment_7	f	For the love of Thai traditional music.	Duangjai Thongdee	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	2025-11-10	campaign_5	user_4
comment_5	f	Hope this helps young people get good jobs.	Araya Phetcharat	https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg	2025-09-10	campaign_3	user_1
comment_9	f	Access to healthcare is so important.	Napassawan Kaofang	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	2026-01-25	campaign_7	user_8
comment_8	f	Thank you for taking care of these majestic animals.	Fang Kaewkla	https://yt3.googleusercontent.com/1l2YcDd4ujbIkzYvSytF2wkXWW5BlIDNIXpMIY-NMSj4rugfwPa2Ndgg8DUESWF83PqaF_RE=s900-c-k-c0x00ffffff-no-rj	2025-12-05	campaign_6	user_6
comment_6	t	Good luck with the planting!	Anonymous	\N	2025-10-15	campaign_4	user_5
comment_2	t	Nice campaign	Anonymous	\N	2025-07-25	campaign_1	user_5
comment_10	t	Good campaign	Anonymous	\N	2026-02-01	campaign_7	user_5
comment_1	f	Excited for the kids in Lopburi!	Ekkachai Wongchai	https://assets.promptbase.com/DALLE_IMAGES%2FSB1PjLah85MVrYwvUct7urDoTXf2%2Fresized%2F1692612767503z_800x800.webp?alt=media&token=264e0f3a-2661-4347-a7be-b56d4a5afdfa	2025-07-15	campaign_1	user_2
\.


--
-- Data for Name: DonorTransaction; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."DonorTransaction" (id, amount, date, "campaignId", "userId", "isAnonymous", "paymentMethod", message, "donorName") FROM stdin;
dt-124536759	5000	2025-01-01	campaign_7	user_1	t	promptpay	Hello	\N
dt-123456789	5000	2025-01-01	campaign_7	user_5	f	credit-card	Good Luck with your projects	Ekkachai
cma2dr8hf000n44s7tnf1w3m5	100	2025-04-29	c-1745918388024	user_9	f	creditCard	Good campaigns	Phonchana M.
cma2e6x7s000p44s7ctzxsrkt	25	2025-04-29	c-1745918388024	user_9	t	creditCard	Very Good	\N
cma2gm2v9000144hl9skd7p9r	50	2025-04-29	c-1745918388024	user_9	f	paypal	Very Good NiceNice	Phonchana M.
cma2gqae4000344hljx220z8t	50	2025-04-29	c-1745918388024	user_9	t	paypal	I like this!!!	\N
cma2h9zp70001448zm7xjsn5l	500	2025-04-29	c-1745918388024	user_9	f	creditCard	I love this!!!	Phonchana M.
cma2hav030003448zfobhw2gx	100000	2025-04-29	c-1745918388024	user_9	f	creditCard	Go to the moon	Phonchana M.
cma2r0wuk000144h5q6gfkukj	100	2025-04-29	c-1745918388024	user_9	f	paypal	I love this!!!	Phonchana M.
cma3ajaje000144g3hzhd6t31	50	2025-04-30	c-1745918388024	user_9	f	creditCard	Good campaigns	Phonchana M.
cma3dgcly000144jijtx3eab4	500	2025-04-30	campaign_7	user_9	f	creditCard	I love this!!!	Phonchana M.
\.


--
-- Data for Name: FAQ; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."FAQ" (id, question, answer, "campaignId") FROM stdin;
faq_1	What kind of computers will be provided?	Standard desktop computers suitable for educational software and internet Browse.	campaign_1
faq_2	How are the schools selected?	Schools in the most economically disadvantaged districts of Lopburi with limited existing resources are prioritized.	campaign_1
faq_3	How often does the mobile library visit?	Villages are visited on a rotating schedule, typically once every 2-3 weeks.	campaign_2
faq_4	Which vocational programs are covered?	Programs include hospitality, mechanics, and local crafts, based on community needs.	campaign_3
faq_5	Where exactly will the mangroves be planted?	Along designated coastal areas and estuaries in Samut Songkhram identified by local forestry experts.	campaign_4
faq_6	Can visitors interact with the elephants?	Yes, but only through ethical observation and feeding under strict supervision. Riding is not permitted.	campaign_6
faq_7	What medical services are offered?	Basic checkups, first aid, distribution of essential medicines, and health awareness workshops.	campaign_7
\.


--
-- Data for Name: Update; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Update" (id, title, content, date, "creatorName", "creatorImage", "campaignId") FROM stdin;
update_1	First Computer Delivery!	We successfully delivered the first batch of 20 computers to Ban Nong Sua School in Lopburi!	2025-07-20	Boonchai Saelim	https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg	campaign_1
update_2	Initial Reasearch Completed	Complete initial research with teachers	2025-08-10	Boonchai Saelim	https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg	campaign_1
update_5	Scholarship Applications Open	Applications for the first round of vocational training scholarships are now open for eligible students in Trang.	2025-09-15	Boonchai Saelim	https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg	campaign_3
update_6	Community Planting Day Announced	Join us for our first large-scale mangrove planting event on November 15th!	2025-10-20	Chanya Promlert	https://img.freepik.com/premium-photo/smiling-3d-cartoon-woman-with-black-hair-glasses_1204912-12868.jpg	campaign_4
update_3	Mobile Library Hits the Road!	Our mobile library bus made its first trip to a remote village near Mae Sai!	2025-08-25	Napassawan Kaofang	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	campaign_2
update_8	New Elephant Arrival	Welcome Mae Bua Ban, a 60-year-old elephant, to the sanctuary! She is settling in well.	2025-12-15	Fang Kaewkla	https://yt3.googleusercontent.com/1l2YcDd4ujbIkzYvSytF2wkXWW5BlIDNIXpMIY-NMSj4rugfwPa2Ndgg8DUESWF83PqaF_RE=s900-c-k-c0x00ffffff-no-rj	campaign_6
update_9	Vet Visit	Routine checkups were performed on all elephants this week. All are healthy!	2026-01-05	Fang Kaewkla	https://yt3.googleusercontent.com/1l2YcDd4ujbIkzYvSytF2wkXWW5BlIDNIXpMIY-NMSj4rugfwPa2Ndgg8DUESWF83PqaF_RE=s900-c-k-c0x00ffffff-no-rj	campaign_6
update_7	First Music Workshop Held	The first traditional Thai music workshop in Ayutthaya saw great participation from local youth!	2025-11-20	Duangjai Thongdee	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	campaign_5
update_10	Mobile Clinic Set Off	Our mobile clinic team has begun its journey to reach remote areas in Mae Hong Son.	2026-01-20	Nipun K.	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	campaign_7
update_4	Reading Circle Success	The first reading circle was a great success, with many children excited about the new books!	2025-09-10	Napassawan Kaofang	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	campaign_2
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."User" (id, name, image, bio, email, phone, role, status, password) FROM stdin;
user_9	Phonchana M.	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlQHqUs13PDFaXkNuJuYA5hME-XXof7chgA&s	Liverpool Lover	phonchana@gmail.com	0787567288	donor	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_1	Araya Phetcharat	https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg	Passionate about community development in rural Thailand.	araya@gmail.com	0765241234	donor	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_2	Boonchai Saelim	https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67344c856c473c001d68c10b.png	Supporter of educational initiatives.	boonchai@gmail.com	0765241235	creator	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_3	Chanya Promlert	https://img.freepik.com/premium-photo/smiling-3d-cartoon-woman-with-black-hair-glasses_1204912-12868.jpg	Interested in environmental conservation.	chaya@gmail.com	0765241236	creator	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_4	Duangjai Thongdee	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	Loves supporting local artisans.	Duangjai@gmail.com	0785241237	creator	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_5	Ekkachai Wongchai	https://assets.promptbase.com/DALLE_IMAGES%2FSB1PjLah85MVrYwvUct7urDoTXf2%2Fresized%2F1692612767503z_800x800.webp?alt=media&token=264e0f3a-2661-4347-a7be-b56d4a5afdfa	A regular donor to various causes.	ekkachai@gmail.com	0765241342	donor	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_6	Fang Kaewkla	https://yt3.googleusercontent.com/1l2YcDd4ujbIkzYvSytF2wkXWW5BlIDNIXpMIY-NMSj4rugfwPa2Ndgg8DUESWF83PqaF_RE=s900-c-k-c0x00ffffff-no-rj	Advocate for animal welfare.	fang@gmail.com	0715241234	creator	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_7	Nipun K.	https://assets.promptbase.com/DALLE_IMAGES%2FSB1PjLah85MVrYwvUct7urDoTXf2%2Fresized%2F1692612767503z_800x800.webp?alt=media&token=264e0f3a-2661-4347-a7be-b56d4a5afdfa	Smart boy	nipun@gmail.com	0765244566	creator	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
user_8	Napassawan Kaofang	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmLrxQfYBo_InSFPNrkJH2VXA3CEXwRuXU9QcX8XxkQie7S4C3-nQhqSvTZ72FoLP0LA&usqp=CAU	Smart girl	kaofang@gmail.com	0765375555	creator	active	$argon2i$v=19$m=16,t=2,p=1$TFhoWXNuSGhhcFIwS3VZbA$DghhrU9sCAZ6s8qsgAyb1g
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
3481f4b4-96ae-43d4-9191-bd93fe462394	0dda08c1a3e4a7a4db6a18e9209347addbf5e011e812db20a2e6116769e3f102	2025-04-24 16:44:41.334045+00	20250424164441_initial_schema	\N	\N	2025-04-24 16:44:41.321977+00	1
b94cece7-63bf-4482-a9e1-ec536bbe8356	2ad15dfd078837451030680b8b31d395cc13be3b0f1fa8171a616f2a3856fe0f	2025-04-25 07:20:29.722484+00	20250425072029_add	\N	\N	2025-04-25 07:20:29.713224+00	1
0e357637-eb67-463a-baeb-0c63982ad27f	243c25d2a4738a7fdfa08b5e5f39ca8e5d4c8142b2bebcfa18af22eeb5a84ca6	2025-04-25 07:25:20.596509+00	20250425072520_enum	\N	\N	2025-04-25 07:25:20.590859+00	1
84e6f8fb-3009-4cb8-b2f3-389deefb3afd	ab80a534dfa4779eeae4ae5aeac192eea19b283671d6083c8f112e3c8a4229df	2025-04-25 15:33:33.300853+00	20250425153333_add	\N	\N	2025-04-25 15:33:33.296172+00	1
66772b83-dff8-4894-81b9-568ff28cc6fc	59bdcfe1bfe65ec6469cef6f8bab4670865de572ea473d00ef77512c03038409	2025-04-25 19:01:35.515332+00	20250425190135_add	\N	\N	2025-04-25 19:01:35.500886+00	1
59d9add4-eddf-41db-91b1-05f4cc94f0e9	c14ccd6cc99eab26447cb97f61a2c2339be4f231716d9f38c1a2d006cbf12a15	2025-04-28 20:13:38.414699+00	20250428201338_modify	\N	\N	2025-04-28 20:13:38.408667+00	1
bca5042f-7f95-4bdf-b461-17787c88ce9c	5f359ec6090e6c9a3baa899c9d94377ee272fe2095229e2f9dceb2b2786a3bdb	2025-04-28 20:41:19.627095+00	20250428204119_modify	\N	\N	2025-04-28 20:41:19.622721+00	1
1f883399-13ad-44ad-a07b-895a3d77da71	7168f3bb200a6a51e67093949c95e118a7e6549e7fd798b58f33e72151273c5f	2025-04-28 21:22:38.866004+00	20250428212238_modify	\N	\N	2025-04-28 21:22:38.861568+00	1
08530c55-52fa-4db8-8b10-a9f3501feff5	7b4e876375bc3222bcd22c2fa06309a519fde0763266d52fe42fcd6957349eef	2025-04-29 09:40:54.95276+00	20250429094054_modify	\N	\N	2025-04-29 09:40:54.942969+00	1
\.


--
-- Name: Campaign Campaign_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Campaign"
    ADD CONSTRAINT "Campaign_pkey" PRIMARY KEY (id);


--
-- Name: DonorComment DonorComment_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."DonorComment"
    ADD CONSTRAINT "DonorComment_pkey" PRIMARY KEY (id);


--
-- Name: DonorTransaction DonorTransaction_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."DonorTransaction"
    ADD CONSTRAINT "DonorTransaction_pkey" PRIMARY KEY (id);


--
-- Name: FAQ FAQ_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."FAQ"
    ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY (id);


--
-- Name: Update Update_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Update"
    ADD CONSTRAINT "Update_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Campaign_creatorId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "Campaign_creatorId_idx" ON public."Campaign" USING btree ("creatorId");


--
-- Name: DonorComment_campaignId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "DonorComment_campaignId_idx" ON public."DonorComment" USING btree ("campaignId");


--
-- Name: DonorComment_userId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "DonorComment_userId_idx" ON public."DonorComment" USING btree ("userId");


--
-- Name: DonorTransaction_campaignId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "DonorTransaction_campaignId_idx" ON public."DonorTransaction" USING btree ("campaignId");


--
-- Name: DonorTransaction_userId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "DonorTransaction_userId_idx" ON public."DonorTransaction" USING btree ("userId");


--
-- Name: FAQ_campaignId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "FAQ_campaignId_idx" ON public."FAQ" USING btree ("campaignId");


--
-- Name: Update_campaignId_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "Update_campaignId_idx" ON public."Update" USING btree ("campaignId");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_id_idx; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX "User_id_idx" ON public."User" USING btree (id);


--
-- Name: User_phone_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "User_phone_key" ON public."User" USING btree (phone);


--
-- Name: Campaign Campaign_creatorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Campaign"
    ADD CONSTRAINT "Campaign_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: DonorComment DonorComment_campaignId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."DonorComment"
    ADD CONSTRAINT "DonorComment_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES public."Campaign"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DonorComment DonorComment_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."DonorComment"
    ADD CONSTRAINT "DonorComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: DonorTransaction DonorTransaction_campaignId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."DonorTransaction"
    ADD CONSTRAINT "DonorTransaction_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES public."Campaign"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DonorTransaction DonorTransaction_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."DonorTransaction"
    ADD CONSTRAINT "DonorTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: FAQ FAQ_campaignId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."FAQ"
    ADD CONSTRAINT "FAQ_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES public."Campaign"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Update Update_campaignId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Update"
    ADD CONSTRAINT "Update_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES public."Campaign"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: myuser
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

