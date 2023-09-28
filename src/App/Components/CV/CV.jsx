import React, { useState } from 'react';
import profile from '../../Images/prof1m.jpg';

import './styles.css';

const CvSection = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const titleToClassName = () => {
    return title.toLowerCase().replace(/ /g, '-') + '-content';
  };

  return (
    <>
      <dt className="cv-info" onClick={toggleExpanded}>
        <h3>{title}</h3>
        <span className="arrow-dropdown">{isExpanded ? '↑' : '↓'}</span>
      </dt>
      <dd
        className={`content ${isExpanded ? 'show' : ''} ${titleToClassName()}`}
      >
        {children}
      </dd>
    </>
  );
};

export const CV = () => {
  return (
    <div className="cv-container">
      <dl>
        <CvSection title="Personal Info" defaultExpanded={true}>
          <div className="personal-info-data">
            <p>E-mail: adam.karcz.1984@gmail.com</p>
            <p>Mobile: +48 506 088 756</p>
            <p>LinkedIn: Adam Karcz</p>
            <p>GitHub: Adam Karcz</p>
            <p>Portfolio: Adam Karcz</p>
          </div>
          <img
            className="personal-info-picture profile-pic"
            src={profile}
            alt="moje oblicze"
          />
        </CvSection>

        <CvSection title="Tech Stack">
          <p>
            <span>Dev:</span> HTML5, CSS3, XML, JavaScript, Jest, React.js,
            React Redux, TypeScript, SDLC, JSON, REST API, WSL, Node, Prettier,
            ESLint, Husky, Visual Studio Code, Git/GitHub
          </p>
          <p>
            <span>DB:</span> Firebase, SQL
          </p>
          <p>
            <span>OS:</span> MS Windows, Linux
          </p>
          <p>
            <span>Other:</span> MS Office, M365, JIRA, Confluence, Trello,
            Redmine, Capture One, Adobe Photoshop CC, CorelDRAW
          </p>
          <p>
            <span>Devices:</span> Sony, Canon, Nikon, studio equipment
          </p>
          <p>
            <span>Work methodologies:</span> SCRUM/Agile
          </p>
        </CvSection>

        <CvSection title="Languages">
          <p>English: B2+</p>
        </CvSection>

        <CvSection title="Summary">
          <p>
            A highly motivated professional currently undergoing a career
            transition into the IT industry, equipped with a solid programming
            foundation gained from completing the specialized Pomeranian
            START.IT course, which prepares for a Junior Frontend Developer
            role.
          </p>
          <p>
            With a background as a team leader, I have honed my skills in team
            management. Moreover, I have extensive experience in various
            photography domains, including product, outdoor, portrait, fashion,
            and more. This experience has rapidly enhanced my attention to
            detail, creativity and ability to consistently deliver high-quality
            results.
          </p>
          <p>
            I am enthusiastic about leveraging my current skill set to excel in
            the IT industry and make effective contributions to frontend
            development projects.
          </p>
        </CvSection>

        <CvSection title="Key Skills">
          <ul>
            <li>
              Solid understanding of frontend programming fundamentals backed by
              practical skills
            </li>
            <li>Extensive, practical experience as a photographer</li>
            <li>
              The ability to think outside the box, propose innovative ideas,
              and apply creative solutions
            </li>
            <li>
              Proven track record of effectively working with clients,
              understanding their requirements, and delivering results that meet
              their needs
            </li>
            <li>
              The capability to lead and mentor team members, ensuring
              high-quality work and promoting professional growth (I managed a
              team of up to 6 people)
            </li>
          </ul>
        </CvSection>

        <CvSection title="Professional Experience">
          {' '}
          {/* nesting <dl> is not common but I give it a try :) */}
          <dl class="jobs">
            <CvSection
              title="
              05/2023 – 08/2023 | Junior Frontend Developer | Pomeranian
              START.IT"
            >
              <p>
                Course website:
                <a href="#https://pomeranianstartit.pl/" target="_blank">
                  Pomeranian START.IT
                </a>
              </p>
              <p>Certificate of Completion issued by Rockin’iT</p>
              <ul class="responsibilities">
                <li>
                  Participated in intensive live coding sessions to enhance
                  practical coding skills
                </li>
                <li>
                  Completed diverse hands-on projects focusing on frontend
                  development
                </li>
                <li>
                  Collaborated with peers and trainers to solve complex
                  programming challenges
                </li>
                <li>
                  Gained proficiency in HTML5, CSS3, JavaScript, React, Redux,
                  and TypeScript
                </li>
                <li>
                  Utilized tools like Git, GitHub, Redmine, JIRA, and Confluence
                  for project management and version control
                </li>
              </ul>
            </CvSection>

            <CvSection
              title="
              09/2021 – 08/2023 | Photographers Team Leader | Beliani
            "
            >
              <ul class="responsibilities">
                <li>
                  Coordinated the daily activities of the photography team
                </li>
                <li>
                  Conducted recruitment processes to find suitable talents and
                  organized onboarding and training for new team members
                </li>
                <li>
                  Planned and prepared product photoshoots, ensuring
                  high-quality visual content
                </li>
                <li>
                  Assessed the quality of photographs, ensuring compliance with
                  company requirements, and implemented corrections and
                  enhancements
                </li>
                <li>
                  Developed and implemented operational standards for
                  photography processes to optimize efficiency and quality
                </li>
                <li>
                  Collaborated with photo retouching and styling teams to
                  achieve desired visual effects
                </li>
                <li>
                  Worked with the marketing department to tailor photographs to
                  advertising campaigns and promotional needs
                </li>
                <li>
                  Ensured the availability and regular maintenance of
                  appropriate photographic equipment
                </li>
              </ul>
            </CvSection>

            <CvSection
              title="
              06/2018 – 08/2021 | Photographer | Beliani
            "
            >
              <ul class="responsibilities">
                <li>
                  Prepared and captured product photographs as packshots and in
                  styled settings
                </li>
                <li>
                  Collaborated with marketing and design teams to create visuals
                  that effectively conveyed product features and benefits
                </li>
                <li>
                  Ensured products were photo-ready, including cleaning and
                  removing any imperfections
                </li>
                <li>
                  Performed retouching and editing of photos for color
                  correction, defect removal, and resizing/formatting in line
                  with company requirements
                </li>
                <li>
                  Adapted photos for website use, ensuring a balance of quality
                  and size for optimal loading and browsing experience
                </li>
                <li>
                  Organized and managed the product image library, ensuring
                  accessibility and organization for the marketing team and
                  other stakeholders
                </li>
              </ul>
            </CvSection>

            <CvSection
              title="
              04/2013 – 10/2013 | Garden Work Subcontractor | FYLLIT -
              Construction and Stonemasonry Services
            "
            >
              <ul class="responsibilities">
                <li>
                  Handled various garden care tasks including plant maintenance,
                  lawn care, terrain modification, garden design, and
                  installation of various garden surfaces, ensuring aesthetic
                  and durable outcomes.
                </li>
              </ul>
            </CvSection>

            <CvSection
              title="
              10/2010 – 12/2018 | Business Owner | Kmada Photo
            "
            >
              <ul class="responsibilities">
                <li>
                  Conducted photo sessions for individuals, families, and groups
                  in various settings
                </li>
                <li>
                  Provided a wide range of photography services for businesses,
                  including corporate headshots, product photography, and
                  corporate events
                </li>
                <li>
                  Created high-quality digital photos utilizing professional
                  accessories to achieve desired visual effects
                </li>
                <li>
                  Adjusted scene lighting professionally, using tools like flash
                  lighting, light modifiers, and diffusers
                </li>
                <li>
                  Performed correction, retouching, and photo editing using
                  graphic design software to enhance photo quality and
                  aesthetics
                </li>
                <li>
                  Developed and delivered finalized photographic materials to
                  clients in various formats
                </li>
                <li>
                  Managed client relations, ensuring their requirements were
                  understood and met
                </li>
              </ul>
            </CvSection>

            <CvSection
              title="
              12/2008 – 12/2010 | Website Administrator | League for Nature
              Protection - Szczecin District
            "
            >
              <ul class="responsibilities">
                <li>
                  Designed, developed, and maintained websites using xHTML, CSS,
                  and various scripts
                </li>
                <li>
                  Regularly updated website content to ensure current and
                  engaging information for visitors
                </li>
                <li>
                  Managed and integrated multimedia resources like images,
                  videos, sounds, and animations to enhance the visual appeal of
                  the websites
                </li>
                <li>
                  Monitored website performance and made necessary updates to
                  ensure optimal functionality
                </li>
                <li>
                  Handled user issues and feedback to improve the website user
                  experience
                </li>
                <li>
                  Collaborated with content creators and designers to ensure the
                  website aligned with organizational goals
                </li>
              </ul>
            </CvSection>
          </dl>
        </CvSection>

        <CvSection title="Education">
          <p>09/2014 – 06/2016 | Tricity School of Photography</p>
          <p>
            10/2004 – 02/2007 | West Pomeranian University of Technology |
            Environmental Protection
          </p>
          <p>
            10/2003 – 06/2008 | West Pomeranian University of Technology |
            Horticulture
          </p>
        </CvSection>

        <CvSection title="Courses and Certificates">
          <p>
            06/2021: Studio Photography Course: Fashion, Portrait,
            Post-Production (by todobrykurs.pl)
          </p>
          <p>05/2021: Management and Leadership - Modern Leaders Training</p>
          <p>04/2018: Gliding Winch Operators Instructor</p>
          <p>
            05/2017: Radio Operator in Aviation Service (General Certificate)
          </p>
          <p>10/2015: Sailplane Pilot License (SPL)</p>
        </CvSection>

        <CvSection title="Organizations & Volunteering">
          <p>
            01/2018 - present: Member @ Szczecin Gliding Association - Pilot,
            glider winch operator, car hauler operator
          </p>
          <p>
            10/2004 – 06/2007: Member @ Environmental Protection Science Club -
            Participated in scientific camps and conferences, administered the
            Science Club's website
          </p>
        </CvSection>

        <CvSection title="Awards and Achievements">
          <p>07/2023: Silver Glider Badge</p>
          <p>
            06/2005: Academic scholarship for outstanding academic achievements
          </p>
        </CvSection>

        <CvSection title="Passions">
          <p>
            Cycling (road, gravel, ultra-distances ~300 km), gliding, aviation,
            RC modeling, computer science, photography, popular science
          </p>
        </CvSection>
      </dl>
    </div>
  );
};
