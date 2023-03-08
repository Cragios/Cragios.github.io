import ResumeSection from "./ResumeSection";
import ResumeItem from "./ResumeItem";

function ResumePage() {
  return (
    <div className="grid gap-4 px-64 py-4">
      <ResumeSection title={"Work Experience"}>
        <ResumeItem
          title={"MOH (Covid Operations)"}
          date={"Jan 2022 - Aug 2022"}
          position={"Assistant Executive at Case Management Task Group (CMTG)"}
          skills={"Python (Pandas), Stata, Excel"}
        >
          <p>
            Wrote programs to consolidate COVID patient data for workflow and analysis purposes, increasing the efficiency of
            patient onboarding and implementing better ways of representing patient statuses
          </p>
        </ResumeItem>
        <ResumeItem
          title={"National Service"}
          date={"Jan 2020 - Nov 2022"}
          position={"Vehicle Technician (Motorised Infantry) - 3rd Sergeant"}
        >
          <p>Main role was to maintain servicibility and fix basic faults of armored vehicles</p>
          <p>Delegated jobs to men both in the workshop and outfield</p>
          <p>Taught the new batch of technicians how to do their jobs and ensured their safety</p>
        </ResumeItem>
      </ResumeSection>
      <ResumeSection title={"Awards"}>
        <ResumeItem
          title={"The Asia Pacific ICT Alliance Awards"}
          date={"Oct 2018"}
          position={"Software Developer (in a team of 3)"}
          skills={"Java"}
        >
          <p>Achieved a merit award at the international level</p>
          <p>Splash Awards 2018 project was chosen as one of several to represent Singapore in the awards</p>
        </ResumeItem>
        <ResumeItem
          title={"Splash Awards 2018"}
          date={"Jul 2018"}
          position={"Software Developer (in a team of 3)"}
          skills={"Java"}
        >
          <p>Achieved 2nd runner-up at the national level</p>
          <p>
            Group developed an application that uses artificial intelligence to detect eye disease from retinal images in a
            voice-activated robot
          </p>
          <p>Had the role of writing the code for the application</p>
        </ResumeItem>
      </ResumeSection>
      <ResumeSection title={"Education"}>
        <ResumeItem
          title={"Nanyang Technological University"}
          date={"2022 - Present"}
          position={"Computer Science Undergraduate"}
        >
          <p>Currently studying...</p>
        </ResumeItem>
        <ResumeItem title={"Dunman High School"} date={"2014 - 2019"} position={"Secondary & Post-Secondary Education"}>
          Graduated with General Certificate of Education Advanced Level (GCE A-Level) and achieved 3 Distinctions
        </ResumeItem>
      </ResumeSection>
      <ResumeSection title={"Co-Curricular Activities"}>
        <ResumeItem title={"Guitar Ensemble"} date={"Mar 2018 - Jul 2019"} position={"Section Leader"}>
          <p>Achieved 'Distinction' in the 2019 Singapore Youth Festival</p>
          <p>Led practice sessions for a team of motivated individuals to improve coordination when performing pieces</p>
        </ResumeItem>
        <ResumeItem title={"National Polics Cadet Corps"} date={"Mar 2014 - Jun 2017"} position={"Staff Sergeant"}>
          <p>Planned trainings and other activities such as camps and orientations</p>Graduated with General Certificate of
        </ResumeItem>
      </ResumeSection>
    </div>
  );
}

export default ResumePage;
