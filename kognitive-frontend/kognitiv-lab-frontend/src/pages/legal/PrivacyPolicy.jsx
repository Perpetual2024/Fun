import React from 'react';
import LegalPageLayout, { LegalSection } from './LegalPageLayout'

const sections = [
  { id: 'introduction', heading: 'Introduction' },
  { id: 'information-we-collect', heading: 'Information we collect' },
  { id: 'how-we-use-it', heading: 'How we use information' },
  { id: 'ai-processing', heading: 'AI processing (Kognitiv Core)' },
  { id: 'childrens-data', heading: "Children's & students' data" },
  { id: 'sharing', heading: 'Data sharing & third parties' },
  { id: 'security', heading: 'Data security' },
  { id: 'retention', heading: 'Data retention' },
  { id: 'your-rights', heading: 'Your rights' },
  { id: 'cookies', heading: 'Cookies & tracking' },
  { id: 'changes', heading: 'Changes to this policy' },
  { id: 'contact', heading: 'Contact' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="[DATE]" sections={sections}>
      <LegalSection id="introduction" number={1} heading="Introduction">
        <p>
          This Privacy Policy explains how Kognitiv Lab ("we", "us") collects, uses, and
          protects information when schools, teachers, and parents use the Service. Because
          Kognitiv Lab handles student academic records, we pay particular attention to data
          belonging to minors. [Placeholder — one paragraph orienting the reader.]
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" number={2} heading="Information we collect">
        <ul className="list-disc pl-5 space-y-1">
          <li>Teacher account details (name, email, school affiliation).</li>
          <li>Student academic records entered by teachers (grades, subjects, terms).</li>
          <li>Parent access credentials (admission number + PIN) — no separate parent
            account data beyond what's needed to verify access.</li>
          <li>[Placeholder — usage/analytics data, device info, if collected.]</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use-it" number={3} heading="How we use information">
        <p>
          We use collected information to operate the Service: displaying grades to the
          correct parent, generating Kognitiv Core feedback, and maintaining account access.
          [Placeholder — confirm whether any data is used for purposes beyond direct service
          delivery, e.g. product improvement, and disclose that explicitly if so.]
        </p>
      </LegalSection>

      <LegalSection id="ai-processing" number={4} heading="AI processing (Kognitiv Core)">
        <p>
          Grade data is processed by Kognitiv Core, our AI feature, to generate structured
          feedback. [Placeholder — name the underlying AI provider if using a third-party API,
          confirm whether student data leaves your infrastructure to reach that provider, and
          state your data retention terms with that provider.]
        </p>
      </LegalSection>

      <LegalSection id="childrens-data" number={5} heading="Children's & students' data">
        <p>
          Student records processed by Kognitiv Lab belong to minors in most cases. We collect
          and process this data on the basis of the school's relationship with the student's
          parent or guardian, not the student's own consent. [Placeholder — this section
          carries real legal weight under most data protection frameworks covering children;
          have it reviewed specifically, don't rely on a template.]
        </p>
      </LegalSection>

      <LegalSection id="sharing" number={6} heading="Data sharing & third parties">
        <p>
          [Placeholder — list any third parties data is shared with: hosting provider, AI API
          provider, analytics tools, etc. State clearly if data is NOT sold or shared for
          advertising purposes.]
        </p>
      </LegalSection>

      <LegalSection id="security" number={7} heading="Data security">
        <p>
          [Placeholder — describe security measures in place: encryption in transit,
          access controls, password hashing, etc. Only state what is actually implemented.]
        </p>
      </LegalSection>

      <LegalSection id="retention" number={8} heading="Data retention">
        <p>
          [Placeholder — how long is a student's data kept after they leave the school, or
          after a school stops using the Service? This should have a concrete answer.]
        </p>
      </LegalSection>

      <LegalSection id="your-rights" number={9} heading="Your rights">
        <p>
          Depending on applicable law, you may have rights to access, correct, or request
          deletion of personal data held about you or your child. [Placeholder — confirm
          rights under the Kenya Data Protection Act (2019) or the relevant framework for
          your users' jurisdiction, and provide a concrete process for exercising them.]
        </p>
      </LegalSection>

      <LegalSection id="cookies" number={10} heading="Cookies & tracking">
        <p>
          [Placeholder — does the Service use cookies or similar tracking technologies? If
          none beyond essential session handling, state that plainly.]
        </p>
      </LegalSection>

      <LegalSection id="changes" number={11} heading="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. [Placeholder — confirm notice
          method and effective-date policy, consistent with the Terms page.]
        </p>
      </LegalSection>

      <LegalSection id="contact" number={12} heading="Contact">
        <p>
          Questions about this Privacy Policy, or requests regarding your data, can be sent to
          [CONTACT EMAIL].
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}