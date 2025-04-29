-- Insert data into User table (Using user_1, user_2, etc. format)
INSERT INTO "User" (id, name, image, bio) VALUES
('user_1', 'Araya Phetcharat', 'https://example.com/images/araya.jpg', 'Passionate about community development in rural Thailand.'),
('user_2', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', 'Supporter of educational initiatives.'),
('user_3', 'Chanya Promlert', 'https://example.com/images/chanya.jpg', 'Interested in environmental conservation.'),
('user_4', 'Duangjai Thongdee', 'https://example.com/images/duangjai.jpg', 'Loves supporting local artisans.'),
('user_5', 'Ekkachai Wongchai', 'https://example.com/images/ekkachai.jpg', 'A regular donor to various causes.'),
('user_6', 'Fang카오 Kaewkla', 'https://example.com/images/fang.jpg', 'Advocate for animal welfare.'),
('user_7', 'Gender Male', 'https://example.com/images/male_avatar.jpg', NULL),
('user_8', 'Gender Female', 'https://example.com/images/female_avatar.jpg', NULL);


-- Insert data into Campaign table (7 records with campaign_1, campaign_2, etc. IDs, related to Thailand, 3 education-focused, linking to user IDs)
INSERT INTO "Campaign" (id, title, description, "shortDescription", image, category, tags, "creatorId", "creatorName", "creatorImage", "creatorBio", "amountRaised", "goalAmount", "donorsCount", "startDate", "endDate", location, status, featured, verified) VALUES
('campaign_1', 'Computers for Kids in Lopburi', 'Provide desktop computers and internet access to primary schools in underprivileged areas of Lopburi province to bridge the digital divide.', 'Help Lopburi kids get digital skills!', 'https://example.com/images/lopburi_computers.jpg', 'Education', '{"computers", "Lopburi", "digital literacy", "children"}', 'user_2', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', 'Supporter of educational initiatives.', 95000, 180000, 85, '2025-07-01', '2025-09-30', 'Lopburi, Thailand', 'active', TRUE, TRUE),
('campaign_2', 'Mobile Library for Remote Villages in the North', 'Fund a mobile library service to bring books and reading activities to children in remote ethnic minority villages near Chiang Rai.', 'Bringing stories to every child.', 'https://example.com/images/mobile_library_north.jpg', 'Education', '{"mobile library", "Chiang Rai", "reading", "remote villages", "ethnic minorities"}', 'user_8', 'Gender Female', 'https://example.com/images/female_avatar.jpg', NULL, 40000, 90000, 60, '2025-08-15', '2025-11-15', 'Chiang Rai, Thailand', 'active', FALSE, FALSE),
('campaign_3', 'Scholarships for Vocational Training in the South', 'Support scholarships for young adults from low-income families in provinces like Trang and Nakhon Si Thammarat to attend vocational training programs.', 'Investing in skills, building futures.', 'https://example.com/images/vocational_south.jpg', 'Education', '{"scholarships", "vocational training", "southern Thailand", "youth"}', 'user_2', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', 'Supporter of educational initiatives.', 110000, 220000, 70, '2025-09-01', '2025-12-31', 'Trang, Thailand', 'active', TRUE, FALSE),
('campaign_4', 'Mangrove Reforestation in Samut Songkhram', 'Plant mangrove saplings and educate local communities on the importance of coastal ecosystems in Samut Songkhram.', 'Growing back our coastal forests.', 'https://example.com/images/mangrove_samut.jpg', 'Environment', '{"mangroves", "reforestation", "Samut Songkhram", "coastal"}', 'user_3', 'Chanya Promlert', 'https://example.com/images/chanya.jpg', 'Interested in environmental conservation.', 65000, 130000, 50, '2025-10-10', '2026-01-10', 'Samut Songkhram, Thailand', 'active', FALSE, TRUE),
('campaign_5', 'Preserving Traditional Thai Music in Ayutthaya', 'Fund workshops and provide instruments to keep the art of traditional Thai musical instruments alive for younger generations in Ayutthaya.', 'Harmony in history.', 'https://example.com/images/thai_music_ayu.jpg', 'Culture', '{"thai music", "traditional", "Ayutthaya", "cultural heritage"}', 'user_4', 'Duangjai Thongdee', 'https://example.com/images/duangjai.jpg', 'Loves supporting local artisans.', 80000, 160000, 45, '2025-11-05', '2026-02-05', 'Ayutthaya, Thailand', 'active', FALSE, FALSE),
('campaign_6', 'Care for Elephants in Surin', 'Support a sanctuary providing ethical care, food, and medical attention for retired logging and tourism elephants in Surin.', 'A safe haven for giants.', 'https://example.com/images/surin_elephants.jpg', 'Animals', '{"elephants", "sanctuary", "Surin", "animal welfare"}', 'user_6', 'Fang카오 Kaewkla', 'https://example.com/images/fang.jpg', 'Advocate for animal welfare.', 150000, 300000, 100, '2025-12-01', '2026-04-30', 'Surin, Thailand', 'active', TRUE, TRUE),
('campaign_7', 'Mobile Clinic for Remote Communities in Mae Hong Son', 'Operate a mobile health clinic to provide basic medical checkups and health education to remote villages in the mountains of Mae Hong Son.', 'Bringing health to remote areas.', 'https://example.com/images/maehongson_clinic.jpg', 'Health', '{"mobile clinic", "Mae Hong Son", "healthcare", "rural"}', 'user_7', 'Gender Male', 'https://example.com/images/male_avatar.jpg', NULL, 70000, 140000, 95, '2026-01-15', '2026-05-15', 'Mae Hong Son, Thailand', 'active', FALSE, FALSE);

-- Insert data into FAQ table (Using faq_1, faq_2, etc. format, linking to new campaign IDs)
INSERT INTO "FAQ" (id, question, answer, "campaignId") VALUES
('faq_1', 'What kind of computers will be provided?', 'Standard desktop computers suitable for educational software and internet Browse.', 'campaign_1'),
('faq_2', 'How are the schools selected?', 'Schools in the most economically disadvantaged districts of Lopburi with limited existing resources are prioritized.', 'campaign_1'),
('faq_3', 'How often does the mobile library visit?', 'Villages are visited on a rotating schedule, typically once every 2-3 weeks.', 'campaign_2'),
('faq_4', 'Which vocational programs are covered?', 'Programs include hospitality, mechanics, and local crafts, based on community needs.', 'campaign_3'),
('faq_5', 'Where exactly will the mangroves be planted?', 'Along designated coastal areas and estuaries in Samut Songkhram identified by local forestry experts.', 'campaign_4'),
('faq_6', 'Can visitors interact with the elephants?', 'Yes, but only through ethical observation and feeding under strict supervision. Riding is not permitted.', 'campaign_6'),
('faq_7', 'What medical services are offered?', 'Basic checkups, first aid, distribution of essential medicines, and health awareness workshops.', 'campaign_7');

-- Insert data into Update table (10 records, using update_1, update_2, etc. format, linking to new campaign IDs, consistent creator info)
INSERT INTO "Update" (id, title, content, date, "creatorName", "creatorImage", "campaignId") VALUES
('update_1', 'First Computer Delivery!', 'We successfully delivered the first batch of 20 computers to Ban Nong Sua School in Lopburi!', '2025-07-20', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', 'campaign_1'),
('update_2', 'Teacher Training Completed', 'Teachers at recipient schools received training on integrating computers into their lessons.', '2025-08-10', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', 'campaign_1'),
('update_3', 'Mobile Library Hits the Road!', 'Our mobile library bus made its first trip to a remote village near Mae Sai!', '2025-08-25', 'Gender Female', 'https://example.com/images/female_avatar.jpg', 'campaign_2'),
('update_4', 'Reading Circle Success', 'The first reading circle was a great success, with many children excited about the new books!', '2025-09-10', 'Gender Female', 'https://example.com/images/female_avatar.jpg', 'campaign_2'),
('update_5', 'Scholarship Applications Open', 'Applications for the first round of vocational training scholarships are now open for eligible students in Trang.', '2025-09-15', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', 'campaign_3'),
('update_6', 'Community Planting Day Announced', 'Join us for our first large-scale mangrove planting event on November 15th!', '2025-10-20', 'Chanya Promlert', 'https://example.com/images/chanya.jpg', 'campaign_4'),
('update_7', 'First Music Workshop Held', 'The first traditional Thai music workshop in Ayutthaya saw great participation from local youth!', '2025-11-20', 'Duangjai Thongdee', 'https://example.com/images/duangjai.jpg', 'campaign_5'),
('update_8', 'New Elephant Arrival', 'Welcome Mae Bua Ban, a 60-year-old elephant, to the sanctuary! She is settling in well.', '2025-12-15', 'Fang카오 Kaewkla', 'https://example.com/images/fang.jpg', 'campaign_6'),
('update_9', 'Vet Visit', 'Routine checkups were performed on all elephants this week. All are healthy!', '2026-01-05', 'Fang카오 Kaewkla', 'https://example.com/images/fang.jpg', 'campaign_6'),
('update_10', 'Mobile Clinic Set Off', 'Our mobile clinic team has begun its journey to reach remote areas in Mae Hong Son.', '2026-01-20', 'Gender Male', 'https://example.com/images/male_avatar.jpg', 'campaign_7');

-- Insert data into DonorComment table (10 records, using comment_1, comment_2, etc. format, linking to new campaign and user IDs)
INSERT INTO "DonorComment" (id, amount, "isAnonymous", content, "userName", "userImage", date, "campaignId", "userId") VALUES
('comment_1', 750, FALSE, 'Excited for the kids in Lopburi!', 'Ekkachai Wongchai', 'https://example.com/images/ekkachai.jpg', '2025-07-15', 'campaign_1', 'user_5'),
('comment_2', 300, TRUE, NULL, 'Anonymous', NULL, '2025-07-25', 'campaign_1', NULL),
('comment_3', 500, FALSE, 'What a wonderful idea! Books change lives.', 'Chanya Promlert', 'https://example.com/images/chanya.jpg', '2025-08-20', 'campaign_2', 'user_3'),
('comment_4', 100, FALSE, 'Supporting education in the North!', 'Boonchai Saelim', 'https://example.com/images/boonchai.jpg', '2025-09-01', 'campaign_2', 'user_2'),
('comment_5', 1000, FALSE, 'Hope this helps young people get good jobs.', 'Araya Phetcharat', 'https://example.com/images/araya.jpg', '2025-09-10', 'campaign_3', 'user_1'),
('comment_6', 200, TRUE, 'Good luck with the planting!', 'Anonymous', NULL, '2025-10-15', 'campaign_4', NULL),
('comment_7', 400, FALSE, 'For the love of Thai traditional music.', 'Duangjai Thongdee', 'https://example.com/images/duangjai.jpg', '2025-11-10', 'campaign_5', 'user_4'),
('comment_8', 2000, FALSE, 'Thank you for taking care of these majestic animals.', 'Fang카오 Kaewkla', 'https://example.com/images/fang.jpg', '2025-12-05', 'campaign_6', 'user_6'),
('comment_9', 150, FALSE, 'Access to healthcare is so important.', 'Gender Female', 'https://example.com/images/female_avatar.jpg', '2026-01-25', 'campaign_7', 'user_8'),
('comment_10', 500, TRUE, NULL, 'Anonymous', NULL, '2026-02-01', 'campaign_7', NULL);