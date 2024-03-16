// AboutUsPage.js
import React from 'react';
import TeamMemberCard from '../componenets/TeamMemberCard';
import backgroundImage from '../abiutsus5.avif';
import '../style/AboutUsPage.css'; // Import CSS for this component


const teamMembers = [
  {
    id: 1,
    name: 'Omkar Shahapure',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    image: 'john-doe.jpg'
  },
  {
    id: 2,
    name: 'Dipak Khandare',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    image: 'john-doe.jpg'
  },
  {
    id: 3,
    name: 'Harish Bhise',
    position: 'CTO',
    bio:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur ad possimus laborum veritatis, sit impedit id accusamus distinctio porro voluptatibus dicta in saepe consectetur. Ex nostrum hic quis eveniet.',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    image: 'john-doe.jpg'
  },
  {
    id: 4,
    name: 'Sarvesh Shevade',
    position: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    image: 'john-doe.jpg'
  },
  {
    id: 5,
    name: 'Matin Jamadar',
    position: 'CTO',
    bio: 'I"m  a 23-year-old engineering enthusiast who recently graduated from VIT Pune with a passion for innovation and problem-solving. Currentely Studying C-DAC in Sunbeam Pune.',
    linkedin: 'https://www.linkedin.com/in/matin-jamadar-54249b214/?originalSubdomain=in',
    image: "http://localhost:3000/matin.jpg"
  },
  // Add more team members as needed
];

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="story-section">
          <h1><b>Our Story</b></h1>
          <p><i>Dear Pooja Mam,
            I wanted to take a moment to express my sincere gratitude for your invaluable mentorship throughout our project. Your guidance, support, and expertise have been instrumental in helping me navigate challenges and grow both personally and professionally. </i></p>
        </div>
      </div>
      <div className="team-members">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
