import React from 'react';
import TeamBackground from './TeamBackground';
import TeamHeader from './TeamHeader';
import TeamGrid from './TeamGrid';
import TeamFooter from './TeamFooter';

export default function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Dr. Denis Bbosa",
      role: "Mentor",
      description: "Deputy Dean FAST",
      expertise: ["Academic Leadership", "Research Guidance", "Project Supervision"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Dr. Opio Jimmy",
      role: "Medical Intern",
      description: "Medical personnel",
      expertise: ["Medical Consultation", "Clinical Testing", "Healthcare Integration"],
      color: "from-green-500 to-teal-400"
    },
    {
      name: "Lemi Robin Loprimo",
      role: "Team Lead",
      description: "A Biomedical Engineering student at Mbarara University of Science and Technology.",
      expertise: ["Project Management", "Biomedical Engineering", "Product Development"],
      color: "from-primary to-secondary"
    },
    {
      name: "Wamono Benjamin",
      role: "Hardware Engineer",
      description: "He is the team hardware designer and engineer.",
      expertise: ["Hardware Design", "Prototyping", "Technical Documentation"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <TeamBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <TeamHeader />
        <TeamGrid teamMembers={teamMembers} />
        <TeamFooter />
      </div>
    </section>
  );
}

