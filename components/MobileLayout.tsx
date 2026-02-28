"use client";

import { useState, useRef } from "react";
import type { SiteData } from "@/data/types";
import {
  HeroSection,
  SkillsSection,
  WorkSection,
  AboutSection,
  PublicationsSection,
  SectionHeading_Clickable,
  getClipFrom,
} from "./sections";
import ExpandedOverlay from "./sections/ui/ExpandedOverlay";

type MobileLayoutProps = {
  siteData: SiteData;
  expandedSection: "work" | "about" | "education" | null;
  setExpandedSection: (section: "work" | "about" | "education" | null) => void;
};

export default function MobileLayout({
  siteData,
  expandedSection,
  setExpandedSection,
}: MobileLayoutProps) {
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWorkExpand = () => {
    if (expandedSection === "work") {
      setExpandedSection(null);
    } else {
      const rect = workRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("work");
    }
  };

  const handleAboutExpand = () => {
    if (expandedSection === "about") {
      setExpandedSection(null);
    } else {
      const rect = aboutRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("about");
    }
  };

  const handleEducationExpand = () => {
    if (expandedSection === "education") {
      setExpandedSection(null);
    } else {
      const rect = educationRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("education");
    }
  };

  const clipFrom = getClipFrom(sourceRect);

  return (
    <div ref={containerRef} className="relative h-dvh overflow-hidden">
      {/* Mobile column layout */}
      <div
        className="grid h-full"
        style={{
          gridTemplateRows:
            "minmax(0, 2.5fr) minmax(0, 2.5fr) minmax(0, 0.7fr) minmax(0, 0.5fr) minmax(0, 2fr)",
        }}
      >
        {/* Hero Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <HeroSection data={siteData.hero} />
        </div>

        {/* Skills Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <SkillsSection data={siteData.skills} />
        </div>

        {/* Work Section */}
        <div
          ref={workRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-b border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleWorkExpand}>
            Publications
          </SectionHeading_Clickable>
          <div onClick={handleWorkExpand} className="text-xl">
            +
          </div>
        </div>

        {/* About Section */}
        <div
          ref={aboutRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-b border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleAboutExpand}>
            About Me
          </SectionHeading_Clickable>
          <div onClick={handleAboutExpand} className="text-xl">
            +
          </div>
        </div>

        {/* Education Section */}
        <div
          ref={educationRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-t border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleEducationExpand}>
            Education
          </SectionHeading_Clickable>
          <div onClick={handleEducationExpand} className="text-xl">
            +
          </div>
        </div>
      </div>

      {/* Expanded overlays */}
      <ExpandedOverlay
        isOpen={expandedSection === "work"}
        clipFrom={clipFrom}
        uniqueKey="work-expanded"
      >
        <PublicationsSection
          data={siteData.publications}
          onExpand={handleWorkExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>

      <ExpandedOverlay
        isOpen={expandedSection === "about"}
        clipFrom={clipFrom}
        uniqueKey="about-expanded"
      >
        <AboutSection
          data={siteData.about}
          onExpand={handleAboutExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>

      <ExpandedOverlay
        isOpen={expandedSection === "education"}
        clipFrom={clipFrom}
        uniqueKey="education-expanded"
      >
        <WorkSection
          data={siteData.projectCategories}
          onExpand={handleEducationExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>
    </div>
  );
}
