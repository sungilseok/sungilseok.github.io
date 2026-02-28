import type { SkillsData } from "@/data/types";
import FallingText from "@/components/ReactBits/FallingText";

type SkillsSectionProps = {
  data: SkillsData;
};

export function SkillsSection({ data }: SkillsSectionProps) {
  const allSkills = data.skills.split(", ");
  const line1 = data.highlights.join(", ");
  const line2 = allSkills
    .filter((skill) => !data.highlights.some((h) => skill.startsWith(h)))
    .join(", ");

  return (
    <div className="overflow-hidden flex h-full flex-col [--falling-text-size:1.3rem] md:[--falling-text-size:1.4rem] xl:[--falling-text-size:1.5rem]">
      <h3 className="shrink-0 heading-section-sm">Skills</h3>
      <FallingText
        className="min-h-10 flex-1"
        text={line1}
        highlightWords={data.highlights}
        highlightClass="highlighted"
        trigger="click"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="var(--falling-text-size)"
        mouseConstraintStiffness={0.9}
      />
      <FallingText
        className="min-h-10 flex-1"
        text={line2}
        highlightWords={[]}
        highlightClass="highlighted"
        trigger="click"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="var(--falling-text-size)"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
}
