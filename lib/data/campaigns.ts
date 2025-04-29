import type { Campaign } from "@/lib/data/types/campaign";

export const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Community Garden Revitalization",
    description: `
      <p>Our neighborhood has an abandoned lot that has been sitting empty for years. With your help, we can transform this space into a thriving community garden that will provide fresh produce for local families and create a beautiful gathering space for everyone to enjoy.</p>
      
      <h3>The Problem</h3>
      <p>The vacant lot at the corner of Maple and Oak streets has become an eyesore in our community, collecting trash and attracting unwanted activities. Not only is it a waste of valuable space, but it also brings down the morale and pride in our neighborhood.</p>
      
      <h3>Our Solution</h3>
      <p>We plan to convert this neglected space into a vibrant community garden with:</p>
      <ul>
        <li>20 raised garden beds for vegetables and herbs</li>
        <li>Native plant sections to support local pollinators</li>
        <li>A small playground area for children</li>
        <li>Benches and tables for community gatherings</li>
        <li>Educational signage about sustainable gardening practices</li>
      </ul>
      
      <h3>How Your Donation Helps</h3>
      <p>Your contribution will go directly toward:</p>
      <ul>
        <li>$5,000 - Soil, compost, and mulch</li>
        <li>$3,000 - Lumber for raised beds</li>
        <li>$2,000 - Seeds and starter plants</li>
        <li>$2,500 - Tools and equipment</li>
        <li>$1,500 - Water irrigation system</li>
        <li>$1,000 - Playground equipment</li>
      </ul>
      
      <h3>Community Impact</h3>
      <p>This garden will not only beautify our neighborhood but also provide fresh, healthy food for local families, create educational opportunities for schools, and build a stronger sense of community as we work together to maintain this shared space.</p>
      
      <p>Join us in transforming this forgotten lot into a thriving green space that benefits everyone!</p>
    `,
    shortDescription:
      "Help us transform an abandoned lot into a thriving community garden with fresh produce for local families.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Community",
    tags: ["garden", "sustainability", "neighborhood", "food"],
    creatorId: "user1",
    creatorName: "Green Spaces Initiative",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a local non-profit dedicated to creating green spaces in urban environments. Founded in 2018, we've completed 5 community projects.",
    amountRaised: 8750,
    goalAmount: 15000,
    donorsCount: 124,
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    location: "Portland, OR",
    status: "active",
    featured: true,
    verified: true,
  },
  {
    id: "2",
    title: "Independent Film Production: 'Local Artisans'",
    description: `
      <p>We're a team of passionate independent filmmakers working on a short documentary that celebrates the rich tradition of craftsmanship in our city. 'Local Artisans' will showcase the stories, techniques, and creations of traditional craftspeople who are keeping these arts alive.</p>
      
      <h3>About the Project</h3>
      <p>Our 30-minute documentary will follow five local artisans:</p>
      <ul>
        <li>Maria - A third-generation woodworker specializing in hand-carved furniture</li>
        <li>James - A blacksmith creating both functional and artistic metalwork</li>
        <li>Sophia - A textile artist using traditional weaving techniques</li>
        <li>Miguel - A ceramicist blending ancient methods with modern design</li>
        <li>Leila - A stained glass artist restoring historic windows</li>
      </ul>
      
      <h3>Why This Matters</h3>
      <p>In our increasingly digital and mass-produced world, traditional craftsmanship is at risk of being lost. These artisans preserve cultural heritage, demonstrate sustainable production methods, and create unique works that connect us to our shared human history of making.</p>
      
      <h3>Budget Breakdown</h3>
      <ul>
        <li>$8,000 - Camera equipment rental and production gear</li>
        <li>$5,000 - Crew compensation (director, cinematographer, sound engineer)</li>
        <li>$3,000 - Post-production (editing, color grading, sound design)</li>
        <li>$2,000 - Music licensing and original score</li>
        <li>$1,000 - Festival submission fees</li>
        <li>$1,000 - Marketing and distribution</li>
      </ul>
      
      <h3>Our Team</h3>
      <p>We're a collective of filmmakers who have worked on award-winning documentaries and short films. Our previous work has been featured in regional film festivals and on public television.</p>
      
      <h3>Timeline</h3>
      <p>With your support, we plan to complete filming by January, finish post-production by March, and premiere the documentary at local film festivals next spring.</p>
      
      <p>Help us tell these important stories and celebrate the beauty of handmade craftsmanship!</p>
    `,
    shortDescription:
      "Support our team of independent filmmakers create a short documentary about local artisans.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Creative",
    tags: ["film", "documentary", "arts", "crafts", "local"],
    creatorId: "user2",
    creatorName: "Indie Lens Collective",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a collective of independent filmmakers dedicated to telling authentic stories about our community and culture.",
    amountRaised: 12300,
    goalAmount: 20000,
    donorsCount: 89,
    startDate: "2023-08-15",
    endDate: "2023-11-30",
    location: "Austin, TX",
    status: "active",
    featured: true,
    verified: true,
  },
  {
    id: "3",
    title: "Johnson Family Medical Emergency Fund",
    description: `
      <p>The Johnson family is facing an unexpected medical crisis. Their 8-year-old daughter, Emma, was recently diagnosed with a rare form of leukemia that requires immediate and intensive treatment.</p>
      
      <h3>About Emma</h3>
      <p>Emma is a bright, energetic third-grader who loves soccer, drawing, and her pet rabbit, Hoppy. She's known for her infectious laugh and kind heart. Her diagnosis has come as a devastating shock to her family and our entire community.</p>
      
      <h3>The Medical Journey Ahead</h3>
      <p>Emma's treatment plan includes:</p>
      <ul>
        <li>Immediate hospitalization for intensive chemotherapy</li>
        <li>Potential bone marrow transplant</li>
        <li>Specialized medications not fully covered by insurance</li>
        <li>Regular travel to a specialized children's hospital (150 miles away)</li>
        <li>Extended recovery period requiring at least one parent to take unpaid leave from work</li>
      </ul>
      
      <h3>Financial Impact</h3>
      <p>While the Johnsons have health insurance, they're facing significant out-of-pocket expenses:</p>
      <ul>
        <li>$15,000 - Insurance deductibles and co-pays</li>
        <li>$10,000 - Specialized treatments not covered by insurance</li>
        <li>$8,000 - Travel and accommodation expenses for treatment</li>
        <li>$12,000 - Lost income while caring for Emma</li>
        <li>$5,000 - Home modifications and special equipment needed during recovery</li>
      </ul>
      
      <h3>How You Can Help</h3>
      <p>Your donation, no matter the size, will help ease the financial burden on the Johnson family so they can focus on what matters most: Emma's recovery. All funds will go directly to the family to cover medical and related expenses.</p>
      
      <p>Our community has always come together in times of need. Let's show the Johnson family they're not alone in this fight.</p>
    `,
    shortDescription:
      "Help the Johnson family with medical expenses after their daughter's unexpected diagnosis.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: ["/placeholder.svg?height=400&width=600"],
    video: null,
    category: "Emergency",
    tags: ["medical", "family", "children", "healthcare"],
    creatorId: "user3",
    creatorName: "Friends of Johnson Family",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We are friends, neighbors, and community members coming together to support the Johnson family during this difficult time.",
    amountRaised: 28500,
    goalAmount: 50000,
    donorsCount: 342,
    startDate: "2023-08-01",
    endDate: "2023-10-15",
    location: "Chicago, IL",
    status: "active",
    featured: true,
    verified: true,
  },
  {
    id: "4",
    title: "Clean Water Initiative for Rural Communities",
    description: `
      <p>Access to clean water is a fundamental human right, yet millions of people around the world still lack this basic necessity. Our Clean Water Initiative aims to bring sustainable water solutions to rural communities facing water scarcity and contamination issues.</p>
      
      <h3>The Water Crisis</h3>
      <p>In many rural areas, families must walk miles each day to collect water from sources that are often contaminated. This leads to waterborne diseases, keeps children out of school, and traps communities in cycles of poverty.</p>
      
      <h3>Our Solution</h3>
      <p>With your support, we will implement comprehensive water solutions in 5 rural communities, including:</p>
      <ul>
        <li>Drilling deep wells to access clean groundwater</li>
        <li>Installing solar-powered pumping systems</li>
        <li>Building water storage tanks and distribution points</li>
        <li>Implementing rainwater harvesting systems for schools and clinics</li>
        <li>Training local technicians to maintain the systems</li>
        <li>Educating communities on water conservation and hygiene practices</li>
      </ul>
      
      <h3>Impact</h3>
      <p>Each water system will serve approximately 500-1,000 people, meaning your contribution will help provide clean water to up to 5,000 people. The benefits include:</p>
      <ul>
        <li>Reduced waterborne diseases and improved health</li>
        <li>Increased school attendance, especially for girls</li>
        <li>Time saved for productive activities and education</li>
        <li>Economic opportunities through improved agriculture</li>
        <li>Community empowerment through local ownership</li>
      </ul>
      
      <h3>Budget Breakdown</h3>
      <ul>
        <li>$30,000 - Well drilling and pump installation (5 wells)</li>
        <li>$15,000 - Solar power systems</li>
        <li>$10,000 - Water storage and distribution infrastructure</li>
        <li>$8,000 - Water quality testing equipment and supplies</li>
        <li>$7,000 - Training programs for local technicians</li>
        <li>$5,000 - Community education materials and workshops</li>
      </ul>
      
      <h3>Our Experience</h3>
      <p>Our organization has successfully implemented similar water projects in 12 communities over the past 5 years, serving over 10,000 people with sustainable water solutions.</p>
      
      <p>Join us in making clean water accessible to those who need it most!</p>
    `,
    shortDescription:
      "Bringing clean drinking water to rural communities through sustainable well construction.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Environment",
    tags: ["water", "sustainability", "global", "health"],
    creatorId: "user4",
    creatorName: "Water for All",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a non-profit organization dedicated to solving the global water crisis through sustainable solutions and community empowerment.",
    amountRaised: 45000,
    goalAmount: 75000,
    donorsCount: 278,
    startDate: "2023-07-15",
    endDate: "2023-12-31",
    location: "Global",
    status: "active",
    featured: false,
    verified: true,
  },
  {
    id: "5",
    title: "STEM Education for Girls",
    description: `
      <p>Despite progress in recent years, girls remain significantly underrepresented in STEM fields (Science, Technology, Engineering, and Mathematics). Our program aims to inspire and equip young girls with the skills, confidence, and opportunities to pursue STEM education and careers.</p>
      
      <h3>The Challenge</h3>
      <p>Research shows that girls often lose interest in STEM subjects around middle school due to various factors including:</p>
      <ul>
        <li>Lack of female role models in STEM fields</li>
        <li>Persistent stereotypes about gender and ability</li>
        <li>Limited access to engaging, hands-on STEM activities</li>
        <li>Absence of supportive learning environments</li>
      </ul>
      
      <h3>Our Program</h3>
      <p>With your support, we will launch a comprehensive STEM program for girls ages 10-15 that includes:</p>
      <ul>
        <li>Weekly after-school STEM clubs at 10 schools in underserved communities</li>
        <li>Weekend workshops covering robotics, coding, engineering, and environmental science</li>
        <li>A mentorship program connecting girls with women working in STEM fields</li>
        <li>Field trips to tech companies, research labs, and universities</li>
        <li>A summer STEM camp featuring project-based learning</li>
        <li>Parent education workshops to support girls' STEM interests at home</li>
      </ul>
      
      <h3>Expected Outcomes</h3>
      <p>Our program will directly benefit 200 girls in its first year, with goals to:</p>
      <ul>
        <li>Increase girls' interest and confidence in STEM subjects</li>
        <li>Develop practical STEM skills through hands-on projects</li>
        <li>Build a supportive community of peers and mentors</li>
        <li>Improve academic performance in STEM subjects</li>
        <li>Create pathways to further STEM education and careers</li>
      </ul>
      
      <h3>Budget</h3>
      <ul>
        <li>$10,000 - STEM equipment and supplies (robotics kits, coding tools, science materials)</li>
        <li>$8,000 - Instructor and mentor stipends</li>
        <li>$5,000 - Field trip and transportation costs</li>
        <li>$4,000 - Summer camp expenses</li>
        <li>$2,000 - Curriculum development and educational materials</li>
        <li>$1,000 - Program evaluation and assessment</li>
      </ul>
      
      <h3>About Us</h3>
      <p>Our organization has been working in education equity for over 5 years, with proven success in creating engaging learning opportunities for underrepresented students.</p>
      
      <p>Help us inspire the next generation of female scientists, engineers, and innovators!</p>
    `,
    shortDescription:
      "Providing resources and mentorship to encourage girls to pursue careers in STEM fields.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Education",
    tags: ["STEM", "girls", "education", "technology", "mentorship"],
    creatorId: "user5",
    creatorName: "Future Scientists Foundation",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're dedicated to closing the gender gap in STEM fields through innovative educational programs and mentorship opportunities.",
    amountRaised: 18200,
    goalAmount: 30000,
    donorsCount: 156,
    startDate: "2023-08-01",
    endDate: "2023-11-15",
    location: "Boston, MA",
    status: "active",
    featured: false,
    verified: true,
  },
  {
    id: "6",
    title: "Local Animal Shelter Renovation",
    description: `
      <p>Our community animal shelter has been serving homeless pets for over 15 years, but the facility is now in urgent need of renovation to continue providing quality care for the animals and to increase adoption rates.</p>
      
      <h3>Current Challenges</h3>
      <p>Our shelter faces several critical issues:</p>
      <ul>
        <li>Outdated kennels that are difficult to clean and disinfect properly</li>
        <li>Inadequate ventilation system contributing to respiratory issues</li>
        <li>Insufficient space for proper animal isolation and quarantine</li>
        <li>Lack of dedicated areas for potential adopters to meet animals</li>
        <li>Deteriorating plumbing and electrical systems</li>
        <li>Limited medical treatment facilities for on-site care</li>
      </ul>
      
      <h3>Renovation Plans</h3>
      <p>With your support, we will transform our shelter into a modern, welcoming facility that prioritizes animal welfare and increases adoptions:</p>
      <ul>
        <li>Replace all kennels with modern, easy-to-clean enclosures</li>
        <li>Install a new HVAC system with proper air exchange</li>
        <li>Create dedicated isolation areas for sick animals</li>
        <li>Build comfortable "meet and greet" rooms for potential adopters</li>
        <li>Upgrade plumbing and electrical systems</li>
        <li>Expand the medical treatment room with new equipment</li>
        <li>Renovate the reception area to be more welcoming to visitors</li>
      </ul>
      
      <h3>Impact</h3>
      <p>These improvements will:</p>
      <ul>
        <li>Reduce disease transmission among shelter animals</li>
        <li>Decrease stress and improve mental health for animals awaiting adoption</li>
        <li>Increase adoption rates by creating a more appealing environment</li>
        <li>Reduce operational costs through energy-efficient systems</li>
        <li>Allow us to provide better medical care on-site</li>
        <li>Create capacity to help more animals in our community</li>
      </ul>
      
      <h3>Budget Breakdown</h3>
      <ul>
        <li>$8,000 - New kennels and animal enclosures</li>
        <li>$6,000 - HVAC system upgrade</li>
        <li>$4,000 - Plumbing and electrical repairs</li>
        <li>$3,000 - Medical room equipment and supplies</li>
        <li>$2,500 - Construction of meet and greet rooms</li>
        <li>$1,500 - Reception area renovation</li>
      </ul>
      
      <h3>About Our Shelter</h3>
      <p>Last year, our shelter took in over 800 animals and found homes for more than 650. We operate with a small staff and dedicated volunteers, maintaining a no-kill policy whenever possible.</p>
      
      <p>Help us create a better environment for animals waiting for their forever homes!</p>
    `,
    shortDescription:
      "Help us renovate our facilities to better care for abandoned and rescued animals.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Community",
    tags: ["animals", "shelter", "pets", "rescue", "adoption"],
    creatorId: "user6",
    creatorName: "Happy Paws Rescue",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a no-kill animal shelter dedicated to rescuing, rehabilitating, and rehoming abandoned and abused animals in our community.",
    amountRaised: 9800,
    goalAmount: 25000,
    donorsCount: 203,
    startDate: "2023-08-15",
    endDate: "2023-12-10",
    location: "Denver, CO",
    status: "active",
    featured: false,
    verified: true,
  },
  {
    id: "7",
    title: "GreenWrap: Biodegradable Packaging Solution",
    description: `
      <p>Plastic packaging is one of the most persistent environmental problems of our time. At GreenWrap, we've developed an innovative, fully biodegradable packaging material made from agricultural waste that performs like plastic but breaks down completely in natural environments.</p>
      
      <h3>The Problem</h3>
      <p>Conventional plastic packaging:</p>
      <ul>
        <li>Takes 400+ years to degrade in the environment</li>
        <li>Is made from non-renewable petroleum</li>
        <li>Contaminates oceans and harms wildlife</li>
        <li>Creates microplastics that enter our food chain</li>
        <li>Is difficult and expensive to recycle properly</li>
      </ul>
      
      <h3>Our Solution: GreenWrap</h3>
      <p>After three years of research and development, we've created GreenWrap, a revolutionary packaging material that:</p>
      <ul>
        <li>Is made from agricultural waste (corn husks, rice straw, and other crop residues)</li>
        <li>Provides the same protection and shelf life as conventional plastic</li>
        <li>Completely biodegrades in 180 days in home compost conditions</li>
        <li>Leaves zero toxic residue in soil or water</li>
        <li>Can be manufactured using modified existing equipment</li>
        <li>Costs only 15% more than conventional plastic packaging</li>
      </ul>
      
      <h3>Current Status</h3>
      <p>We've successfully developed and tested our prototype, secured a provisional patent, and received interest from several food and consumer goods companies. We're now ready to scale up production to meet market demand.</p>
      
      <h3>Funding Goals</h3>
      <p>Your investment will help us:</p>
      <ul>
        <li>$40,000 - Purchase specialized manufacturing equipment</li>
        <li>$25,000 - Complete final material certification and testing</li>
        <li>$15,000 - Produce initial inventory for first customers</li>
        <li>$10,000 - Develop marketing materials and attend industry trade shows</li>
        <li>$10,000 - Secure additional intellectual property protection</li>
      </ul>
      
      <h3>Market Opportunity</h3>
      <p>The sustainable packaging market is projected to grow to $440 billion by 2025. With increasing consumer demand for eco-friendly products and new regulations restricting single-use plastics, GreenWrap is positioned to capture significant market share.</p>
      
      <h3>Our Team</h3>
      <p>Our founding team includes materials scientists, packaging industry veterans, and sustainability experts with over 30 years of combined experience in developing and commercializing new materials.</p>
      
      <p>Join us in revolutionizing the packaging industry and reducing plastic pollution!</p>
    `,
    shortDescription:
      "Support the development and production of our biodegradable alternative to plastic packaging.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Innovation",
    tags: [
      "sustainability",
      "plastic-free",
      "environment",
      "startup",
      "technology",
    ],
    creatorId: "user7",
    creatorName: "GreenWrap Solutions",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a team of scientists and entrepreneurs developing sustainable alternatives to conventional plastic packaging.",
    amountRaised: 67500,
    goalAmount: 100000,
    donorsCount: 412,
    startDate: "2023-07-01",
    endDate: "2023-10-30",
    location: "Seattle, WA",
    status: "active",
    featured: false,
    verified: true,
  },
  {
    id: "8",
    title: "Cultural Heritage Mural Project",
    description: `
      <p>Our city is a vibrant tapestry of cultures, histories, and communities, yet many of these stories remain untold in our public spaces. The Cultural Heritage Mural Project aims to create a series of large-scale murals that celebrate our city's diverse cultural heritage and foster community pride and connection.</p>
      
      <h3>Project Vision</h3>
      <p>We will create five stunning murals in different neighborhoods, each developed through a collaborative process between professional artists and community members. Each mural will:</p>
      <ul>
        <li>Celebrate the unique cultural heritage of its neighborhood</li>
        <li>Incorporate historical elements and contemporary community life</li>
        <li>Feature artistic styles that reflect cultural traditions</li>
        <li>Include input from residents of all ages through community workshops</li>
        <li>Transform underutilized or neglected public spaces</li>
      </ul>
      
      <h3>Locations & Themes</h3>
      <p>We've secured permission for murals at these locations:</p>
      <ul>
        <li>Downtown Transit Center - "Journeys: Migration Stories"</li>
        <li>Eastside Community Center - "Cultural Celebrations & Traditions"</li>
        <li>Westside Public Library - "Languages & Literature of Our Community"</li>
        <li>Northside Park Pavilion - "Culinary Heritage & Food Ways"</li>
        <li>Southside Youth Center - "Music & Dance Across Cultures"</li>
      </ul>
      
      <h3>Community Engagement</h3>
      <p>Each mural will involve the community through:</p>
      <ul>
        <li>Story-gathering sessions with neighborhood residents</li>
        <li>Design workshops with local schools and senior centers</li>
        <li>Public input on draft designs</li>
        <li>Community painting days where residents can help create the mural</li>
        <li>Celebratory unveiling events with cultural performances</li>
      </ul>
      
      <h3>Budget</h3>
      <ul>
        <li>$15,000 - Artist fees ($3,000 per mural)</li>
        <li>$8,000 - Materials (paint, primers, sealants, equipment)</li>
        <li>$5,000 - Community engagement workshops and events</li>
        <li>$3,000 - Documentation (photography, video, project book)</li>
        <li>$2,500 - Site preparation and safety equipment</li>
        <li>$1,500 - Administrative costs and permits</li>
      </ul>
      
      <h3>Timeline</h3>
      <p>With funding secured, we plan to complete all five murals over a 10-month period, with community engagement beginning immediately and the first mural installation starting in spring.</p>
      
      <h3>About Us</h3>
      <p>Our arts organization has been creating community-based public art for over 8 years, completing 12 successful mural projects that have become beloved landmarks in our city.</p>
      
      <p>Help us transform our public spaces into vibrant celebrations of our shared cultural heritage!</p>
    `,
    shortDescription:
      "Creating a public art installation that celebrates our city's diverse cultural heritage.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Creative",
    tags: ["art", "culture", "community", "mural", "heritage"],
    creatorId: "user8",
    creatorName: "Urban Arts Collective",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a community arts organization dedicated to creating public art that reflects and celebrates the diverse cultures and histories of our city.",
    amountRaised: 15600,
    goalAmount: 35000,
    donorsCount: 178,
    startDate: "2023-08-01",
    endDate: "2023-11-20",
    location: "Philadelphia, PA",
    status: "active",
    featured: false,
    verified: true,
  },
  {
    id: "9",
    title: "Hurricane Relief Fund",
    description: `
      <p>Hurricane Maria devastated our coastal communities last month, leaving thousands of families without homes, power, clean water, or access to essential services. While national relief efforts are underway, many local communities are still struggling with immediate needs and face a long road to recovery.</p>
      
      <h3>Current Situation</h3>
      <p>The hurricane's impact has been severe:</p>
      <ul>
        <li>Over 5,000 homes damaged or destroyed in our county</li>
        <li>Critical infrastructure (roads, power lines, water systems) severely damaged</li>
        <li>Local businesses forced to close, leaving many without income</li>
        <li>Schools and community centers damaged, disrupting essential services</li>
        <li>Vulnerable populations (elderly, disabled, low-income) facing particular hardship</li>
      </ul>
      
      <h3>Our Response</h3>
      <p>As a local disaster response organization with deep community connections, we're providing immediate relief and supporting early recovery efforts:</p>
      <ul>
        <li>Distributing emergency supplies (food, water, hygiene items, tarps)</li>
        <li>Setting up temporary shelter for displaced families</li>
        <li>Providing emergency financial assistance for immediate needs</li>
        <li>Coordinating volunteer teams for debris removal and home repairs</li>
            <li>Supporting vulnerable individuals with special needs</li>
          </ul>
          
          <p>Your support will help us rebuild and recover stronger. Thank you for standing with our community in this time of need.</p>
        `,
    shortDescription:
      "Creating a public art installation that celebrates our city's diverse cultural heritage.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    video: null,
    category: "Creative",
    tags: ["art", "culture", "community", "mural", "heritage"],
    creatorId: "user8",
    creatorName: "Urban Arts Collective",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a community arts organization dedicated to creating public art that reflects and celebrates the diverse cultures and histories of our city.",
    amountRaised: 15600,
    goalAmount: 35000,
    donorsCount: 178,
    startDate: "2023-08-01",
    endDate: "2023-11-20",
    location: "Philadelphia, PA",
    status: "active",
    featured: false,
    verified: true,
  },
];
