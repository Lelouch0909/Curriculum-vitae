import React, { useState } from "react";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import { contents } from "../utils/const";

import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Language from "../components/Language";
import Section from "../components/Section";
import Experience from "../components/Experience";
import Certification from "../components/Certification";
import Skill from "../components/Skill";

function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=" lg:text-xl max-md:block max-md:overflow-y-scroll scroll-smooth font-calibri text-center bg-gradient-to-b from-custom-blue to-custom-pink h-[100lvh]    min-h-[100lvh] bg-black-bg p-3 flex  gap-3 justify-center">
      <div className="   no-scrollbar overflow-y-scroll scroll-smooth  flex flex-col gap-4 rounded-lg bg-custom-black text-white-text p-4">
        <Profile
          name={contents.profile.name}
          lastName={contents.profile.lastName}
          job={contents.profile.job}
          summary={contents.profile.summary}
        ></Profile>
        <div className="text-sm text-start text-gray-text m-2 max-w-[300px] lg:max-w-[400px] lg:text-base ">
          <div className={`${!isExpanded ? 'line-clamp-3' : ''}`}>
            "{contents.profile.summary}"
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-custom-blue hover:text-custom-pink text-xs mt-1"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <Contact logo={FaEnvelope} text={contents.contact.mail}></Contact>
          <Contact logo={FaPhone} text={contents.contact.phone} />
          <Contact logo={FaLinkedin} text={contents.contact.linkedin} />
          <Contact logo={FaGithub} text={contents.contact.github} />
          <Contact logo={FaMapMarkerAlt} text={contents.contact.city} />
        </div>
        <div className="text-start rounded-lg bg-custom-black p-2">
          <h2 className="font-bold font-montserrat text-sm">Languages</h2>
          <Language
            text={contents.language.french}
            note={contents.language.frenchNote}
          ></Language>
          <Language
            text={contents.language.english}
            note={contents.language.englishNote}
          ></Language>
        </div>
        <div className="text-start rounded-lg bg-custom-black p-2">
          <h2 className="font-bold font-montserrat text-sm">Education</h2>
          <div className="text-sm text-start text-white-text mx-4 max-w-[300px] line-clamp-3">
            {contents.education.degree}
          </div>
          <div className="text-sm text-start text-gray-text mx-4 max-w-[300px] line-clamp-3">
            {contents.education.university}
          </div>
          <div className="text-sm text-start text-gray-text mx-4 max-w-[300px] line-clamp-3">
            {contents.education.year}
          </div>
        </div>
        <div className="text-start rounded-lg bg-custom-black p-4">
          <h2 className="font-bold font-montserrat text-sm mb-4">
            {contents.skills.title}
          </h2>
          {contents.skills.categories.map((category, index) => (
            <div key={index} className="mb-6 last:mb-0 p-2">
              <h3 className="text-sm text-white-text mb-2">{category.name}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Skill key={skillIndex} name={skill.name} Icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="  no-scrollbar  overflow-y-scroll scroll-smooth bg-white-text rounded-lg text-black-text p-4">
        <Section title={contents.experience.title}>
          {contents.experience.experiences.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              comment={experience.comment}
              descriptions={experience.descriptions}
            ></Experience>
          ))}
        </Section>
        <Section title={contents.project.title}>
          {contents.project.projects.map((project, index) => (
            <Experience
              key={index}
              title={project.title}
              comment={project.comment}
              descriptions={project.descriptions}
              github={project.github}
            ></Experience>
          ))}
        </Section>
        <Section title={contents.certification.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.certification.certifications.map(
              (certification, index) => (
                <Certification
                  key={index}
                  name={certification.name}
                  issuer={certification.issuer}
                  file={certification.file}
                  description={certification.description}
                />
              )
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
