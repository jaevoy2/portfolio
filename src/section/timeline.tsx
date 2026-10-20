import { Timeline } from "../components/timeline"

// Alternating entries are right-aligned on tablet/desktop and left-aligned on phones
const right = "flex flex-col items-start md:items-end";
const rightText = "text-sm leading-relaxed text-neutral-700 md:text-base text-left md:text-right";
const leftText = "text-sm leading-relaxed text-neutral-700 md:text-base";
const company = "mb-4 text-sm font-medium text-neutral-600 dark:text-neutral-600";

function TimelineDemo() {
  const data = [
    {
      title: "Project-Based Employee",
      content: (
        <div className={right}>
          <p className={company}>Creative Dev Labs Company</p>
          <p className={rightText}>
            Contributed to upgrading CDL Blocks, performing data mining,
            and supporting various web development projects. Assisted in
            website creation, provided technical support, and implemented
            practical solutions to meet project requirements.
          </p>
        </div>
      ),
    },
    {
      title: "IT Intern",
      content: (
        <div>
          <p className={company}>Creative Dev Labs Company</p>
          <p className={leftText}>
            Collaborated on web system development while gaining hands-on
            industry experience. Began exploring mobile application
            development, expanding technical skills beyond web technologies.
          </p>
        </div>
      ),
    },
    {
      title: "Part-Time IT Instructor",
      content: (
        <div className={right}>
          <p className={company}>MLG College of Learning Inc.</p>
          <p className={rightText}>
            Guide students in learning information technology concepts and
            practical computing skills. Facilitate technical discussions,
            hands-on activities, and problem-solving exercises to help
            students strengthen their understanding of IT.
          </p>
        </div>
      ),
    },
    {
      title: "Junior Software Developer",
      content: (
        <div>
          <p className={company}>Creative Dev Labs Company</p>
          <p className={leftText}>
            Develop and maintain web applications and mobile apps, building
            functional and user-friendly digital solutions. Contribute to
            feature development, system improvements, and the delivery of
            software that meets project requirements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}


export default TimelineDemo;