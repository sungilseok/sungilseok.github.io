type ProjectCardProps = {
  title: string;
  image: string;
  techStack: string[];
  href?: string;
};

export function ProjectCard({
  title,
  techStack,
  href,
}: ProjectCardProps) {
  const CardWrapper = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="relative group block overflow-hidden rounded-2xl bg-[#fdfdfd] transition-shadow hover:shadow-lg"
    >
      {/* Footer */}
      <div className="w-full flex items-center justify-between px-4 py-3">
        {/* Title */}
        <h4 className="heading-card text-black">{title}</h4>

        {/* Tech Stack */}
        <div className="flex items-center gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="text-meta">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}
