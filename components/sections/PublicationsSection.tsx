import type { Publication } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type PublicationsSectionProps = {
  data: Publication[];
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function PublicationsSection({
  data,
  onExpand,
  isExpanded = false,
}: PublicationsSectionProps) {
  return (
    <div className="relative h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          Publications
        </SectionHeading_Clickable>
      </div>
      {isExpanded && <CloseButton onClick={onExpand} />}
      <div className="mt-4 space-y-4">
        {data.map((pub, i) => {
          const Wrapper = pub.href ? "a" : "div";
          const wrapperProps = pub.href
            ? { href: pub.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={i}
              {...wrapperProps}
              className="block rounded-2xl bg-[#fdfdfd] px-4 py-3 transition-shadow hover:shadow-lg"
            >
              <p className="heading-card text-black">{pub.title}</p>
              <p className="mt-1 text-meta text-gray-500">
                {pub.venue} · {pub.year}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
