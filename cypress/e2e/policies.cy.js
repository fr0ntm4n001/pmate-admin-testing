describe("FAQ", () => {
  Cypress.Commands.add("login", () => {
    // Step 1: Set the viewport size
    cy.viewport(1920, 1080);

    // Step 2: Visit the login page
    cy.visit("https://admin.app.pocketmate.ai"); // Replace with your actual URL

    // Step 3: Enter the email (hardcoded)
    cy.get("#email").clear().type("admin_prod@pocketmate.ai"); // Replace with actual email

    // Step 4: Enter the password (hardcoded)
    cy.get("#password").clear().type("12345678"); // Replace with actual password

    // Step 5: Check the "remember me" checkbox
    cy.get("#remember").check();

    // Step 6: Submit the form
    cy.get(".py-8 > .justify-center").click();

    // Step 7: Verify login by checking if the specified text appears
    cy.get("h1.text-black.text-2xl.font-semibold", { timeout: 20000 })
      .should("be.visible")
      .contains("Patient Users"); // Verify the expected text after login
  });

  beforeEach(() => {
    cy.login();
  });

  ///////////////////
  it("verify listed Policies ", () => {
    cy.get(":nth-child(8) > .text-gray-primary").should(
      "have.text",
      "Policies"
    );
    cy.get(":nth-child(8) > .text-gray-primary").click();
    cy.get(".text-gray-dark").should("have.text", "Policies");

    ////// Help Desk //////

    cy.get("div.MuiDataGrid-cellContent")
      .contains("Help Desk") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".w-1\\/3").click();
    cy.get(".text-gray-dark").should("have.text", "Help Desk");
    cy.get(".min-h-\\[calc\\(100vh-64px\\)\\] > .sm\\:px-6").click();
    cy.get(".text-black").should("have.value", "Help Desk");
    cy.get(":nth-child(1) > strong").should(
      "have.text",
      "Need Assistance? Visit Our Help Desk"
    );
    cy.get(".ql-editor").click();
    cy.get(".ql-editor > :nth-child(3)").should(
      "have.text",
      "Follow the link to access support and resources."
    );
    cy.get(".ql-editor > :nth-child(5)").click();
    cy.get(":nth-child(5) > strong").should("have.text", "Knowledge Base");
    cy.get(".ql-editor").click();
    cy.get(":nth-child(8) > strong").should("have.text", "Tickets");
    cy.get(".ql-editor > ul > :nth-child(1)").should(
      "have.text",
      "Easily track and manage your previous tickets – stay informed on their status and resolutions."
    );
    cy.get(".ql-editor > ul > :nth-child(2)").should(
      "have.text",
      "Empower yourself with the tools you need, right at your fingertips!"
    );
    cy.get(".ql-editor > :nth-child(6)").should(
      "have.text",
      "Explore a wide range of articles, user guides, and FAQs to find quick answers and helpful insights."
    );
    cy.get(".w-1\\/3 > .w-8").click();

    ///////////// Account Deletion ////////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Account Deletion") //
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".w-1\\/3").click();
    cy.get(".text-gray-dark").should("have.text", "Account Deletion");
    cy.get(".text-black").should("have.value", "Account Deletion");
    cy.get(".ql-editor > :nth-child(1)").should(
      "have.text",
      "Please visit this website periodically to check for updates to our Account Deletion Policy."
    );
    cy.get(".ql-editor > :nth-child(3) > strong").should(
      "have.text",
      "Introduction"
    );
    cy.get(".ql-editor > :nth-child(4)").should(
      "have.text",
      "At Pocket Mate.AI, we prioritize user privacy and autonomy. This User Account Deletion Policy is designed to provide a clear understanding of the steps you need to follow if you wish to delete your user account and the subsequent actions we take regarding your data."
    );
    cy.get(".ql-editor > :nth-child(6)").should(
      "have.text",
      "How to Delete Your Account"
    );
    cy.get(".ql-editor > :nth-child(7)").should(
      "have.text",
      "Account deletion is exclusively available through our native apps. Please make sure you have the latest version of the app installed on your device."
    );
    cy.get(":nth-child(9) > strong").should("have.text", "Step-by-Step Guide");
    cy.get(":nth-child(10) > :nth-child(2)").should(
      "have.text",
      "Tap on the “Settings” button"
    );
    cy.get(".ql-editor > :nth-child(10) > :nth-child(1)").should(
      "have.text",
      "Log into the app with your account"
    );
    cy.get(":nth-child(10) > :nth-child(3)").should(
      "have.text",
      "Tap “Edit account info”"
    );
    cy.get(".ql-editor > :nth-child(12)").should(
      "have.text",
      "Upon completing the steps above, confirm you can confirm that your account is no longer accessible by trying to log into the app. Once the deletion is complete, you cannot reverse the process through the app."
    );
    cy.get(":nth-child(14) > strong").should(
      "have.text",
      "What Happens After Deletion"
    );
    cy.get(":nth-child(16) > :nth-child(1)").should(
      "have.text",
      "Immediate Loss of Access: After you’ve deleted your account, you will lose immediate access to it. This means you won’t be able to use our services associated with that particular account."
    );
    cy.get(":nth-child(16) > :nth-child(2)").should(
      "have.text",
      "Data Purge: All your identifiable information will be purged from our systems within 30 days of your account deletion. This means that after 30 days, none of your personal details will be available in our databases."
    );
    cy.get(":nth-child(16) > :nth-child(3)").should(
      "have.text",
      "30-Day Restoration Window: Should you change your mind or if you’ve deleted your account accidentally, you have a window of 30 days to contact our support team to restore your account. After reaching out, our team will guide you through the restoration process."
    );
    cy.get(":nth-child(16) > :nth-child(4)").should(
      "have.text",
      "Permanent Data Loss after 30 Days: If you don’t restore your account within the 30-day window, post that period, you will lose access to all the data associated with your account permanently."
    );
    cy.get(":nth-child(16) > :nth-child(5)").should(
      "have.text",
      "Creating a New Account: After the 30-day window, if you wish to use our services again, you’ll need to start afresh. This will mean creating a brand new account and setting up your preferences from scratch."
    );
    cy.get(".w-1\\/3 > .w-8").click();

    ///////////// Trusted Soucres ////////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Trusted Sources") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });
    cy.get(".text-gray-dark").should("have.text", "Trusted Sources ");
    cy.get(".text-black").should("have.value", "Trusted Sources ");
    cy.get(".ql-editor > :nth-child(1)").should(
      "have.text",
      "At Pocket Mate.AI, we are committed to providing accurate and reliable wellness tools to support your brain health journey."
    );
    cy.get(".ql-editor > :nth-child(3)").should(
      "have.text",
      "Our app offers personalized self-assessments and wellness recommendations designed to give you actionable insights into your well-being."
    );

    cy.get(".ql-editor > :nth-child(5)").should(
      "have.text",
      "The Health Center, thoughtfully curated with the expertise of Dr. Estevez Carolina, a distinguished clinical psychologist; Dr. Saman Aftab, a renowned Doctor of Physiotherapy; and Dr. P. Kumpon, a respected psychiatrist, ensures each self-assessment is tailored to your unique needs. Guided by Dr. Estevez’s expert insight, we offer personalized recommendations designed to enhance your brain health and overall well-being."
    );

    cy.get(".ql-editor > :nth-child(7)").should(
      "have.text",
      "Our assessments and recommendations are based on clinical guidelines from leading organizations such as the American Psychological Association and the latest Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR). By leveraging these trusted resources, we ensure that our tools reflect the most current diagnostic criteria and are grounded in the latest scientific research."
    );

    cy.get(".ql-editor > :nth-child(9)").should(
      "have.text",
      "For more information, please visit Psychiatry.org - DSM."
    );
    cy.get(".ql-editor > :nth-child(11)").should(
      "have.text",
      "While Pocket Mate.AI supports your wellness journey with these trusted resources, our app is not intended to diagnose or treat medical conditions. For any clinical concerns, we encourage you to seek professional medical advice from a qualified healthcare provider."
    );
    cy.get(".w-1\\/3 > .w-8").click();

    ////////////// Session Engagement ////////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Session Engagement") //
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".text-gray-dark").should("have.text", "Session Engagement ");
    cy.get(".text-black").should("have.value", "Session Engagement ");
    cy.get(".ql-editor > :nth-child(1)").should(
      "have.text",
      "Welcome to Pocket Mate.AI's Session Engagement Policy. As a user on our platform, you have a pivotal role in delivering high-quality therapeutic services."
    );

    cy.get(".ql-editor > :nth-child(3)").should(
      "have.text",
      "At Pocket Mate.AI, we understand the importance of providing a safe, supportive, and effective environment for individuals seeking mental health guidance. Your role is central to achieving this goal, and this policy is designed to provide you with clear guidance on how to conduct sessions that meet the highest standards of professionalism and ethics."
    );

    cy.get(".ql-editor > :nth-child(5)").should(
      "have.text",
      "This policy covers various aspects of session conduct, including session scheduling, communication protocols, engagement strategies, crisis management, documentation, and follow-up procedures. It serves as a comprehensive reference point, ensuring that sessions are conducted with the utmost care and effectiveness."
    );
    cy.get(".ql-editor > :nth-child(7)").should(
      "have.text",
      "We recognize the significant impact your sessions can have on your well-being. Please take the time to familiarize yourself with the content of this policy, as it serves as a guide to conducting sessions that are professional, ethical, and impactful."
    );
    cy.get(":nth-child(10) > strong").should(
      "have.text",
      "Mobile Phone Policy"
    );
    cy.get(":nth-child(21) > strong").should(
      "have.text",
      "Session Scheduling and Initiation Procedures"
    );
    cy.get(":nth-child(25) > strong").should(
      "have.text",
      "Therapist Schedule Creation:"
    );
    cy.get(":nth-child(28) > strong").should(
      "have.text",
      "User Interaction Initiation:"
    );
    cy.get(":nth-child(180) > strong").should(
      "have.text",
      "Collaboration with Local Authorities and Health Systems:"
    );
    cy.get(":nth-child(183) > strong").should(
      "have.text",
      "User Education on Crisis Resources:"
    );
    cy.get(":nth-child(174) > strong").should(
      "have.text",
      "Training and Simulation:"
    );
    cy.get(":nth-child(171) > strong").should(
      "have.text",
      "Post-Crisis Follow-Up:"
    );
    cy.get(":nth-child(168) > strong").should("have.text", "Safety Planning:");
    cy.get(".w-1\\/3 > .w-8").click();

    ////////////// Commitment ///////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Commitment") //
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".text-gray-dark").should("have.text", "Commitment");

    cy.get(".ql-editor > :nth-child(1)").should(
      "have.text",
      "At Pocket Mate.AI, our unwavering commitment is to consistently deliver the highest standard of care and service to our esteemed clients. Recognizing the dynamic nature of schedules and the importance of accessibility, we have meticulously devised this Cancellation, No-Show, and Punctuality Policy. This policy serves as a cornerstone of our dedication to ensuring that every client enjoys equitable access to our services while maintaining operational efficiency and fairness. We understand that life's demands can sometimes necessitate adjustments to appointments, and this policy outlines our guidelines to accommodate such situations with transparency and fairness."
    );

    cy.get(":nth-child(4) > strong > u").should(
      "have.text",
      "Cancellation Policy"
    );
    cy.get(".ql-editor > :nth-child(9)").should(
      "have.text",
      "Clients should effectuate cancellations exclusively through the official Pocket Mate.AI app or by contacting the therapist via their designated PocketMate.AI contact information. Any cancellations made through third-party communication platforms or unofficial channels will not be considered valid."
    );
    cy.get(".ql-editor > :nth-child(16)").should(
      "have.text",
      "A no-show is defined as a situation in which a client fails to attend a scheduled appointment without prior notice of cancellation. To compensate therapists for their reserved time and minimize disruptions to our scheduling, incidents of no-shows may be subject to a prescribed fee."
    );
    cy.get(":nth-child(37) > strong").should(
      "have.text",
      "Consent and Purpose:"
    );
    cy.get(":nth-child(36) > strong").should(
      "have.text",
      "Providing Emergency Contact Information:"
    );
    cy.get(":nth-child(42)").should(
      "have.text",
      "By continuing to use Pocketmate.AI's services, you acknowledge and agree to the terms outlined above. If you have any questions or concerns regarding our services or data handling practices, please don't hesitate to contact us at privacy@pocketmate.ai"
    );
    cy.get(".w-1\\/3 > .w-8").click();

    /////////////// AI Interaction ///////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("AI Interaction") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".text-gray-dark").should("have.text", "AI Interaction");

    cy.get(".ql-editor").should(
      "have.text",
      "To ensure a positive and productive experience for all users, we have established guidelines for communicating with our AI. These guidelines help prevent misuse and promote a supportive environment.Do’s:Engage Constructively:·      Use the AI to obtain information, support, and guidance in a constructive manner.·      Approach interactions as you would with a human – with courtesy and respect.Use Supportive Language:·      Encourage positivity in your interactions, whether seeking help or providing feedback to the AI.·      Be clear and direct in your communication to help the AI understand and respond appropriately.Utilize Resources Appropriately:·      When provided with resources or referrals by the AI, consider them as part of your support system.·      Use the provided help options if the conversation raises any concerns or if you need further assistance.Don’ts:No Violence or Threats:·      Avoid language that involves threats, violence, or descriptions of harmful actions toward yourself or others.·      Do not use the AI to express violent thoughts or plans.Avoid Inappropriate Content:·      Refrain from using harassing, threatening, or any form of negative language that could be harmful.·      Do not engage in conversations that involve hate speech, discrimination, or any content that could offend based on personal characteristics.Enforcement:The AI is equipped with moderation tools to detect inappropriate language. When such language is detected, the AI will issue an immediate reminder of these guidelines.Alert System:·      First Alert: A reminder to steer the conversation back to respectful and safe topics.·      Second Alert: A notice that repeated inappropriate language may lead to a temporary pause in interaction.·      Third Alert: If the behavior continues, the AI will end the current session and temporarily restrict access to interactive features.Explaining End-to-End Encryption with Pocket Mate.AIImagine you’re writing a personal letter to a trusted friend, but instead of sending it directly, you put it in a special box that scrambles all the words into a secret code. Only your friend has the key to unlock the box and read your letter. This ensures that even if someone else gets the box, they won’t understand what’s inside.With Pocket Mate AI, your conversations work the same way. When you type something into the app, your message is encrypted—meaning it’s scrambled into a secure code that can only be understood by the Pocket Mate AI system. Even while your message is being sent over the internet, it remains in that coded form, keeping your personal information safe. Once the AI processes your message, the response is encrypted again and sent back to you, ensuring no one else can access or read your conversation.In short, Pocket Mate AI ensures your personal conversations stay safe, private, and secure, so you can focus on getting the support you need with complete peace of mind.By interacting with the AI, you agree to follow these guidelines. Failure to comply may affect your ability to use our services effectively."
    );

    cy.get(".w-1\\/3 > .w-8").click();

    /////////////// Opt-in Consent  ///////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Opt-in Consent") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });
    cy.get(".text-gray-dark").should("have.text", "Opt-in Consent");
    cy.get(".ql-toolbar").click();
    cy.get(".ql-toolbar").click();

    cy.get(".ql-editor").should(
      "have.text",
      "Welcome to Pocket Mate.AI! We are thrilled to have you as a user of our innovative platform dedicated to enhancing mental well-being through advanced technology and personal support from experienced therapists.This comprehensive document has been meticulously crafted to provide you with a thorough understanding of our data sharing practices and to empower you with knowledge of your rights as a valued client. At Pocket Mate.AI, we uphold the highest standards of data privacy and security, strictly adhering to the principles set forth by the Health Insurance Portability and Accountability Act (HIPAA). Our unwavering commitment is to safeguard your Personal Health Information (PHI) while ensuring that you receive the best possible therapeutic care and support.Nature of Services: Pocket Mate.AI provides tools and resources aimed at enhancing mental well-being. It is important to understand that our platform is not intended for diagnosis or critical care. While our services may provide insights and support, they should not be used as a substitute for professional medical advice or treatment.Release of Sensitive Data: In the course of using Pocket Mate.AI, you may choose to share sensitive information related to your mental health and well-being. We understand the importance of privacy and security, and we are committed to protecting your data in accordance with applicable laws and regulations.Data Control: You have control over the data you share with Pocket Mate.AI. You may request the modification or deletion of your data at any time, subject to our data retention policies and legal requirements. For more information about this, kindly visit our privacy policy or the openAI Supplier Data Processing Addendum found here: https://openai.com/policies/supplier-dpa.Data Retention: Pocket Mate.AI may securely retain API inputs and outputs for up to 30 days to provide our services and to identify abuse. After 30 days, API inputs and outputs are removed from our systems, unless we are legally required to retain them. Content Moderation: Pocket Mate.AI employs moderation tools to check for potentially harmful content. This helps us maintain a safe and supportive environment for all users.Model Training: Please note that we do not use content submitted by customers to our business offerings such as our API and ChatGPT Enterprise to improve model performance. We prioritize the privacy and confidentiality of your data. For more information on how we handle business data, please refer to our Enterprise Privacy page.Patient HIPAA Acknowledgement Opt-In Consent for Appointment RemindersThank you for choosing our services. As part of your account setup, you have the option to receive appointment reminders via email, text message, or automated calls. These reminders are designed to help you manage your healthcare appointments effectively.Please note, you agreed to this service during your account creation, and you can modify your preferences or completely opt out at any time via your account settings. Opting out of these communications is simple and will not affect the quality of care provided to you.We prioritize your privacy and take robust measures to protect your information. However, please be aware of the inherent risks associated with electronic communications. By opting in, you acknowledge and accept these risks.By continuing to use Pocketmate.AI's services, you acknowledge and agree to the terms outlined above. If you have any questions or concerns regarding our services or data handling practices, please don't hesitate to contact us at privacy@pocketmate.aiData Sharing Compliance and Client Consent Data Compliance and Client Consent for Data Sharing:Stringent Data Management: We want to reassure you that all data is meticulously managed in strict accordance with the Health Insurance Portability and Accountability Act (HIPAA) standards. These rigorous standards are the cornerstone of our commitment to safeguarding your privacy and ensuring that your personal health information (PHI) is treated with the utmost care and diligence.Your Explicit Consent: We hold your privacy in the highest regard, and your explicit consent is an indispensable prerequisite for any sharing of your data with third-party service providers. Our commitment to transparency means that we will provide you with all the pertinent information about the entities seeking access to your data, along with a clear explanation of the purpose behind such data sharing.Principle of Minimum Necessity: To further fortify your privacy, we adhere steadfastly to the principle of sharing only the minimum necessary PHI required for third parties to fulfill their designated roles in your healthcare. This meticulous approach ensures that your privacy remains uncompromised while enabling seamless healthcare coordination.Strictly for Healthcare Coordination: Rest assured that we only share your data for essential healthcare coordination purposes or when mandated by law. We want to emphasize that we do not engage in the sale, rental, or trade of personal health information. All data sharing is conducted in full accordance with the terms stipulated in our Notice of Privacy Practices and in strict compliance with applicable laws and regulations.Ensuring Data Protection: To further safeguard your PHI, we require all third-party service providers, also known as business associates, to enter into a legally binding Business Associate Agreement (BAA) with us. This crucial document obligates the business associate to handle your PHI in a manner entirely consistent with our stringent privacy and security practices, as well as in full compliance with HIPAA and any other pertinent legislation. This additional layer of assurance reinforces our commitment to protecting your data and your privacy at all times.Limitations When Records are Stored Electronically:Robust Security MeasuresEncryption: As a cornerstone of our commitment to data security, we employ industry-standard encryption protocols to ensure the confidentiality and integrity of your data. Whether your information is at rest or in transit, this encryption guarantees that your personal health records remain entirely unreadable to unauthorized individuals, providing a robust shield against data breaches.Secure Access Controls: Access to Electronic Health Records (EHRs) is rigorously controlled, allowing only authorized healthcare providers with verified credentials to access patient information. This stringent measure acts as a safeguard against unauthorized viewing or tampering with patient records, maintaining the utmost privacy and security.Regular Security Audits: Our commitment to data security extends to frequent security audits of our systems. These audits serve to identify and promptly rectify any vulnerabilities, ensuring that our defenses remain up to date and resilient against emerging threats. This proactive approach underscores our dedication to continuous improvement and data protection.Firewalls and Intrusion Detection Systems: To bolster the security of the network storing patient data, we employ firewalls. In addition, intrusion detection systems actively monitor for any suspicious activities, providing real-time alerts in the event of potential breaches. These robust measures work in tandem to fortify our data security infrastructure and promptly respond to any security threats.Access and RecoveryPatient Access: You retain the unequivocal right to access your Electronic Health Records (EHR), affording you the opportunity to review your complete medical history, treatment plans, and other essential healthcare information. Access is facilitated securely through a dedicated patient portal, accessible via a stringent and secure login process, empowering you to take control of your health information.Data Backup Systems: Our commitment to data integrity includes the implementation of robust backup systems. These systems generate regular, secure copies of all electronic records, which are stored in secure, geographically separate locations. This meticulous approach ensures that data can be efficiently retrieved and restored in the unfortunate event of data loss or technical failures, minimizing disruption to healthcare services.Disaster Recovery Plan: Preparedness is paramount. In the face of a disaster, whether natural or technical, we have a comprehensive disaster recovery plan in place. This plan ensures that our systems and data can be swiftly restored, minimizing disruption to services and maintaining the continuity of care for our clients.Data Portability: In alignment with data portability regulations, we fully support your right to request a copy of your EHR in a format suitable for use or transfer to another healthcare service provider if necessary. Your ability to access and control your health information is a fundamental aspect of our commitment to patient empowerment.User Training: Our dedicated team is not only proficient in efficiently utilizing electronic systems but is also well-versed in assisting patients in navigating their EHRs. This ensures that you can fully harness your right to access and utilize your health information, promoting active patient engagement in their healthcare journey.Client Rights and Responsibilities:Informed Participation: ·      Comprehensive Understanding: As a user of our services, it is your fundamental right to be fully informed about how we handle your Personal Health Information (PHI). This includes a deep understanding of the privacy policies in place, the extent to which your information is used and shared, and the protective measures put in place to ensure the utmost privacy.·      Transparency in Data Use: We are committed to providing you with detailed information regarding how your data is used, which may include potential de-identification for use in health research, quality improvement initiatives, or other healthcare-related activities. This transparency empowers you to make informed decisions about your healthcare data.Providing Accurate Information:·      Integral Role in Data Integrity: Your active role in maintaining the integrity of your health records is paramount. It is incumbent upon you to provide complete and accurate information to the best of your ability, including promptly reporting any changes in your health status, contact information, or insurance details.·      Timeliness for Effective Care: Timely updates to your information are essential for ensuring the effective delivery of healthcare and preventing potential issues in your care and treatment plans. Your proactive engagement in this regard contributes significantly to the quality of your healthcare.Amendments and Access to PHI:·      Right to Request Amendments: Under the provisions of HIPAA, you hold the right to request amendments to your PHI if you believe there is an error or crucial information has been omitted. Our processes are designed to guide you through how to submit such requests and provide clarity on how they will be handled.·      Access to Health Records: Your right to access your health records is upheld, whether for review, a deeper understanding of your healthcare journey, or to seek a second opinion. We prioritize making this process as smooth as possible, with dedicated support available to assist you in navigating your Electronic Health Record (EHR).·      Requesting Copies of PHI: You can also request copies of your PHI, and we are committed to providing this in the format required by HIPAA, which may include electronic copies or printed records, depending on your preferences and needs.Responsibility for Consent:·      Informed Consent: You bear the responsibility of reviewing and comprehending any consent forms or agreements related to your PHI. It is your right to ask questions and receive clear answers before you agree to any terms concerning your health information, ensuring that your consent is fully informed.Privacy Policy Awareness:·      Familiarity with Privacy Policy: Awareness of our privacy policy is an essential component of your responsibility. We strongly encourage you to read the policy thoroughly and reach out if there are any sections you do not understand or require further information about. Your familiarity with our policy ensures informed decision-making regarding your data.Security of Access Credentials: ·      Securing Access Credentials: In the event that you are provided with access credentials to view your EHR online, such as a username and password, it is your responsibility to maintain the security and confidentiality of these credentials. This proactive measure prevents unauthorized access to your information and upholds data privacy.Reporting Concerns or Violations:·      Privacy Concerns: If you ever believe that your privacy rights have been infringed upon or if you have concerns about the handling of your PHI, you possess the right to file a complaint. We are committed to providing clear instructions on how to do so and assure you that there will be no retaliation for voicing your concerns. Your feedback is invaluable in ensuring the ongoing protection of your privacy and data security.Consent to Data Sharing and Acknowledgement:By agreeing to create an account, you acknowledge and consent to the data sharing practices of Pocket Mate.AI as outlined above. This includes, but is not limited to, the use of your PHI for health care coordination and as required by law. You affirm your understanding that this consent is voluntary and may be revoked by you at any time.If you have any questions or concerns regarding our services or data handling practices, please don't hesitate to contact us at privacy@pocketmate.aiThank you for choosing Pocketmate.AI to support your mental well-being journey!"
    );

    cy.get(":nth-child(100)").click();
    cy.get(".ql-editor").click();
    cy.get(":nth-child(103)").should(
      "have.text",
      "By agreeing to create an account, you acknowledge and consent to the data sharing practices of Pocket Mate.AI as outlined above. This includes, but is not limited to, the use of your PHI for health care coordination and as required by law. You affirm your understanding that this consent is voluntary and may be revoked by you at any time."
    );
    cy.get("svg.w-8.cursor-pointer").eq(0).click();

    ///////////// Terms and Conditions ///////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Terms and Conditions") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".text-gray-dark").should("have.text", "Terms and Conditions");
    cy.get(".ql-editor").click();
    cy.get(".ql-editor").click();

    cy.get(".ql-editor").should(
      "have.text",
      '1.     ACCEPTANCE OF TERMSBy installing and utilizing the Pocket Mate.AI mobile application (the "App" or the “Company”), you are indicating your agreement to adhere to these Terms of Service ("Terms"). These Terms govern your use of the App and any services provided therein. If you do not consent to these Terms, please refrain from installing or using the App. Your continued use of the App constitutes acceptance of these Terms and any updates or modifications thereof.2.     DATA PROTECTION AND PRIVACYWe hold your privacy in high regard. All personal data you provide will be stored and processed in line with our Privacy Policy. We implement data encryption and security measures to safeguard your information. However, we cannot guarantee that unauthorized third parties will never breach our security measures.3.     EMERGENCY ASSISTANCEThe App is not designed to replace emergency medical care. While it provides support and resources for mental well-being, it is not intended to address medical emergencies or acute crises. In the event of a crisis or emergency situation, it is imperative to promptly contact a healthcare professional, such as a doctor, therapist, or counselor, or dial your local emergency number (e.g., 911 in the United States). Your safety and well-being are paramount, and timely access to appropriate medical care is essential in emergency situations.4.     RELATIONSHIPS WITH HEALTH PROVIDERSTo maintain professional boundaries and uphold the integrity of our services, it is strictly prohibited to engage in personal relationships with our health providers. This includes any conduct that may be perceived as an attempt to initiate a personal relationship, whether through direct communication or otherwise. Any violation of this policy will result in immediate termination of your access to the App. Our priority is to ensure a professional and supportive environment for all users and health providers, and adherence to this policy is essential in achieving that goal.5.     APPOINTMENT CANCELLATIONS AND NO-SHOWSFor appointment cancellations or rescheduling, you must provide us with at least 24 hours\' notice. Cancellations made with less than 24 hours\' notice will incur a charge equal to 50% of the scheduled service price. Should you cancel or miss 5 appointments within a 30-day period, your account will be blocked from scheduling further appointments for 30 days.6.     USER INPUTYou are solely responsible for any content you input into the App. By using the App, you agree not to input any content that is illegal, offensive, threatening, defamatory, obscene, or otherwise objectionable. This includes but is not limited to content that violates the rights of others, promotes discrimination, harassment, or violence, or is in violation of any applicable laws or regulations. We reserve the right to remove any content that we deem inappropriate or in violation of these Terms of Service. Your compliance with this provision is essential in maintaining a safe, respectful, and supportive environment for all users of the App.7.     CYBERSECURITY AND PERSONAL PROTECTIONWhile we strive to protect your personal information and privacy, we cannot guarantee the security of information you disclose online. By engaging online, you acknowledge the inherent security risks and agree not to hold us responsible for security breaches unless caused by our negligence or willful default.8.     REFUND POLICYWe are committed to providing the highest quality of service. Kindly visit our detailed Refund Policy for more information.9.     USER REPRESENTATIONS AND RESTRICTIONSBy utilizing the Service, you affirm and guarantee that:a.     You possess legal capacity and consent to adhere to these Terms.b.     You have reached the age of 18 or above.c.     Your access to the Service is void of automated or non-human means, encompassing bots, scripts, or comparable methodologies.d.     The Service will not be employed for unlawful or unauthorized purposes.e.     You do not reside in a country subject to a U.S. government embargo or designated as a "terrorist supporting" nation.f.      Your identity is not featured on any U.S. government list of proscribed or restricted entities.g.     Your utilization of the Service will not transgress any applicable laws or regulations.Providing false, inaccurate, outdated, or incomplete information renders us entitled to decline ongoing or future Service use (or any portion thereof).The Service may solely be accessed or employed for its intended purpose. Commercial utilization, except when specifically approved by us, is impermissible.In the capacity of a Service user, you are bound not to:a.     Systematically extract data or content from the Service to produce or amass collections, compilations, databases, or directories without written authorization from us.b.     Engage in unauthorized Service use.c.     Create alterations, adaptations, enhancements, translations, or derivative works stemming from the Service.d.     Employ the Service for purposes unrelated to its design or intent, including revenue generation or commercial ventures.e.     Provide the Service across a network or environment allowing simultaneous access by multiple devices or users.f.      Produce a product, service, or software directly or indirectly in competition with or as a substitute for the Service.g.     Exploit our proprietary information, interfaces, or other intellectual property in developing applications, accessories, or devices for use with the Service.h.     Elicit, deactivate, or otherwise impede security-related Service features.i.      Compromise, disrupt, or unduly burden the Service or associated networks and services.j.      Decrypt, disassemble, reverse engineer, or decompile any Service software.k.     Endeavor to bypass Service measures preventing or limiting access, or any segment thereof.l.      Transmit files containing viruses, worms, trojans, or analogous software detrimental to another\'s computer operation.m.   Develop, release, or distribute automated systems, such as spiders, robots, cheats, scrapers, or offline readers accessing the Service, or launch unauthorized scripts or software.n.     Exploit the Service to send automated queries to websites or unsolicited commercial emails.o.     Degrade, tarnish, or otherwise impair us or the Service as determined by us.p.     Engage in Service use contravening applicable laws or regulations.q.     Infringe these Terms or act in a manner inconsistent with them.10.  DISCLAIMER OF WARRANTIESThe App, Content, and other Service facets are furnished "AS IS" and "AS AVAILABLE." They are dispensed without any representation or warranty, be it express or implied. This encompasses implied warranties of title, non-infringement, integration, merchantability, and fitness for a specific purpose, as well as any warranties inferred from performance patterns or trade practices, all of which are expressly disavowed. Neither the Company nor its affiliates, licensors, or suppliers assure that:a.     The Service, Content, or other information will be timely, precise, dependable, or accurate.b.     The Service will be accessible, secure, or available at specific times or locations.c.     Defects or errors will be rectified.d.     The Service will be devoid of viruses or detrimental components.e.     Any specific outcome or achievement can be guaranteed.Users acknowledge and agree that they utilize the Service at their own risk, and the Company shall not be held liable for any damages or losses arising from the use of, or inability to use, the Service, including but not limited to direct, indirect, incidental, consequential, or punitive damages.11.  LIMITATION OF LIABILITYUnder no circumstances shall we (including our affiliates) be held liable to you or any third party for any loss of profit or any indirect, consequential, exemplary, incidental, special, or punitive damages arising from these Terms or your utilization of, or inability to utilize, the Service (including the App or Content), or Third-Party Ads. This holds true even if we have been informed of the potential for such damages. Your access to, and employment of, the Service (including the App, Content, and User Content), and Third-Party Ads are based on your individual discretion and risk. You bear full responsibility for any harm to your computing system or loss of data stemming from such use.Regardless of any conflicting provisions, you hereby acknowledge that the cumulative liability of the Company to you, concerning any and all claims resulting from App, Content, or Service usage, is restricted to the amounts you have remitted to the Company for Service access and utilization. The damage limitation set forth above constitutes an intrinsic aspect of the foundational principles of the agreement between the Company and you.In certain jurisdictions, the exclusion or limitation of liability for incidental or consequential damages may not be permissible. Consequently, the above-mentioned exclusion or limitation might not be applicable to you. Furthermore, you may possess distinct legal entitlements that deviate according to your jurisdiction.12.  INDEMNITYYou hereby commit to indemnify and absolve the Company, its successors, subsidiaries, affiliates, related entities, suppliers, licensors, partners, as well as the officers, directors, employees, agents, and representatives of each entity, from any claim or demand made by any third party resulting from or connected to:a.     your utilization of the Service,b.     your User Content, orc.     your violation of these Terms.The Company retains the prerogative, at your expense, to assume the exclusive defense and management of any matter for which you are required to indemnify us. In this context, you agree to collaborate with our defense efforts against such claims. You pledge not to resolve any matter without prior written consent from the Company. The Company will make reasonable endeavors to apprise you of any such claim, action, or litigation as soon as we become aware of it.13.  INTERNATIONAL USEThe Company does not assert that the Service is accessible, fitting, or legally permissible for utilization within your jurisdiction. The use of the Service is strictly prohibited in territories where such usage contravenes the law. Your access to the Service is undertaken at your own volition, and you are responsible for abiding by local regulations. By accessing or using the Service, you acknowledge and agree that you are solely responsible for ensuring compliance with all applicable laws and regulations in your jurisdiction. The Company disclaims any liability for any consequences arising from your failure to comply with local laws while using the Service.14.  MANDATORY BINDING ARBITRATION AND CLASS ACTION WAIVERWe urge you to carefully review this arbitration provision to fully comprehend your rights. Except in cases where prohibited by law, you consent that any future claim must be settled through final and binding confidential arbitration. By agreeing to this, you acknowledge and accept that you are relinquishing the right to a trial by jury. Certain rights, such as discovery or the right to appeal, which would be available in a court proceeding, may be limited or nonexistent.You agree that any claim must be brought solely in your individual capacity, not as a plaintiff (lead or otherwise) or as a member of a purported class or representative proceeding. Additionally, you agree that the arbitrator is prohibited from consolidating proceedings or claims or presiding over any form of representative or class proceeding.Both you and the Company, including its agents, corporate parents, subsidiaries, affiliates, predecessors in interest, successors, and assigns, mutually agree to arbitration (excluding matters that qualify for small claims court) as the exclusive means of dispute resolution, with the exception of jurisdictions that prohibit exclusive arbitration for dispute resolution.Arbitration provides a less formal avenue for dispute resolution compared to a court lawsuit. Arbitration employs a neutral arbitrator instead of a judge or jury, allowing for more limited discovery and subject to very restricted review by courts. Arbitrators can award the same damages and relief that a court can. Additional information about arbitration is available at http://www.adr.org. If a party intends to initiate arbitration, a written Notice of Intent to Arbitrate ("Notice") must first be sent to the other party. The Notice should be sent via an international courier with tracking or any other available method, including email. If an agreement is not reached within 30 days after receiving the Notice, either party may initiate arbitration proceedings or file an individual claim in small claims court.The American Arbitration Association ("AAA") will administer the arbitration following its Commercial Arbitration Rules and the Supplementary Procedures for Consumer-Related Disputes ("Rules"), as modified by these Terms.Should you commence arbitration against us, a second Notice must be provided to the Company within seven (7) days of arbitration commencement. Unless your Demand equals or exceeds $1,000 or is filed in bad faith, you will be responsible for the filing fee. In this case, we will reimburse your confirmed filing fee payment upon receiving the second Notice and evidence of payment.The arbitration will be conducted exclusively in English. A single arbitrator with a primary place of business in Orlando, Florida (if in the United States) or elsewhere (if outside the United States) will be appointed per the Rules, with certain streamlined rules for a more cost-effective process. Both parties agree that claims can only be brought in an individual capacity, not as part of a class or representative proceeding. If this provision is deemed unenforceable, the entire arbitration section becomes null and void.The arbitrator has exclusive authority to resolve disputes related to the interpretation, validity, applicability, or enforceability of these Terms and the arbitration provision. The FAA governs this Section, and any award rendered is final, subject to appeal under the FAA.This Section does not apply to claims seeking equitable relief for protecting copyrights, trademarks, patents, or other intellectual property. In the event of breach, your remedy is limited to monetary damages. Claims arising from these Terms must be initiated within one (1) year after the claim accrues. Otherwise, the cause of action is permanently barred. Claims must be resolved per this Section. Improperly filed claims may result in attorneys\' fees and costs. Changes to this arbitration provision can be rejected in writing within 30 days; otherwise, continued use of the Service implies acceptance. You have the right to opt-out of this provision within 30 days of using the Service.15.  GOVERNING LAWThese Terms, as well as your use of the Service, are governed by the laws of the United States of America, excluding its conflicts of law principles.If any action related to a dispute is permitted to be brought in a court of law, such action will be subject to the exclusive jurisdiction of either:The state and federal courts located in the City of Orlando, Florida, if you are a resident of the United States.If you are not a resident of the United States, you hereby irrevocably waive personal jurisdiction and venue in such courts, and waive any defense of improper venue or inconvenient forum.16.  MISCELLANEOUS PROVISIONSNo delay or omission by us in exercising any of our rights due to noncompliance or default on your part with respect to these Terms will impair any such right or be considered a waiver thereof. The Company\'s waiver of any covenants, conditions, or agreements on your part will not be deemed a waiver of any subsequent breach thereof or of any other covenant, condition, or agreement herein.Except for Section 12, if any provision of these Terms is found to be invalid or unenforceable, the Terms will remain in full force and effect. The provision will be reformed to be valid and enforceable while reflecting the intent of the parties to the maximum extent allowed by law.These Terms constitute the entire agreement between you and the Company regarding their subject matter, supplanting all prior written or oral promises, agreements, or representations concerning such subject matter.The Company may transfer or assign its rights and obligations under these Terms to another person, including by novation. By accepting these Terms, you grant the Company consent for such assignment and transfer. If the Service displays a version of these Terms indicating another party, it serves as valid notice to you of the transfer of the Company\'s rights and obligations under the Agreement.All communications on the Service are considered electronic. Your communication with us through the Service or other electronic means, such as email, constitutes electronic communication. You acknowledge that electronic communications, including notices, disclosures, agreements, and other communications we provide, are equivalent to written communications with the same legal force. By clicking buttons labeled "SUBMIT," "CONTINUE," "REGISTER," "I AGREE," or similar, you provide a legally binding electronic signature and enter a legally binding contract. You consent to the use of electronic signatures, contracts, orders, and other records, as well as electronic delivery of notices, policies, and transaction records through the Service.The Company shall not be liable for any failure to comply with these Terms to the extent such failure arises from factors beyond the Company\'s reasonable control.17.  CONTACTIf you need to send a notice under these Terms or have questions regarding the Service, contact us at: privacy@pocketmate.ai'
    );

    cy.get(".min-h-\\[calc\\(100vh-64px\\)\\]").click();

    cy.get(":nth-child(107)").should(
      "have.text",
      "No delay or omission by us in exercising any of our rights due to noncompliance or default on your part with respect to these Terms will impair any such right or be considered a waiver thereof. The Company's waiver of any covenants, conditions, or agreements on your part will not be deemed a waiver of any subsequent breach thereof or of any other covenant, condition, or agreement herein."
    );
    cy.get("svg.w-8.cursor-pointer").eq(0).click();

    ////////////// Privacy Policy ///////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Privacy Policy") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".text-black").should("have.value", "Privacy Policy");

    cy.get(".ql-editor").should(
      "have.text",
      'This Privacy Policy explains the collection and processing of personal data when you use the Pocket Mate.AI mobile application (the "App") and the associated services and products (together referred to as the "Service"). By using the Service, you agree to (I) read, understand, and accept this Privacy Policy, and (II) confirm that you are at least 18 years old (or have your parent/guardian read and accept the policy for you). If you disagree or cannot make this commitment, you must not use the Service. In this case, you should (a) contact us to request data deletion, (b) cancel subscriptions through Apple (iOS) or Google (Android) app stores, and (c) delete the App from your devices.In this Privacy Policy:"GDPR" refers to the General Data Protection Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons regarding personal data processing and data movement."EEA" includes current EU member states and the European Free Trade Association, encompassing the United Kingdom."Process" includes collecting, storing, and disclosing personal data to others. 1.     PERSONAL DATA CONTROLLERIf you’re in the UK, the controller of your personal data is Pocket Mate.AI LLC, a company registered under Florida laws, with its registered office at 924 N. Magnolia Ave suite 202 unit 5020, Orlando, Florida, 32803, United States of America.2.     CATEGORIES OF COLLECTED PERSONAL DATAWe gather personal data through voluntary submissions, from third-party sources, and automatically. This encompasses information you provide willingly, details received from external parties, and data collected without active input, such as your IP address.2.1. Data You ProvideWhen you utilize our Service, create an account, or interact with us, you may supply information about yourself, including Full Name, Email, Gender, Date of Birth (D.O.B), State, Country, Phone Number, and Profile Image. We collect this data to facilitate service provision, personalize experiences, and comply with applicable laws. Rest assured, we handle your information with care and in accordance with our Privacy Policy, prioritizing your privacy and data security at all times.2.2. Data Supplied by Third PartiesIn instances where you initiate a payment, we may obtain information from third-party payment service providers regarding transaction specifics like amount, date, and time.2.3. Automatically Collected Data:2.3.1. Referral InformationWe amass data about the origin of your interaction with us, such as the app or URL that led you to click on our advertisement.2.3.2. Device and Location InformationWe gather information from your mobile device, including language preferences, IP address, time zone, device type and model, settings, operating system, internet service provider, mobile carrier, hardware ID, and Facebook ID. Additionally, interactions with ads within our App and the corresponding web links are recorded.2.3.3. Usage PatternsWe log your interactions with our Service, encompassing taps on specific interface elements, engagement with features and content, App usage frequency, duration of App usage, and subscription orders.2.3.4. Advertising IDsWe collect Apple Identifier for Advertising (IDFA), Identifier for Vendor (IDFV), or Google Advertising ID (AAID), dependent on your device\'s operating system. Resetting these identifiers is generally feasible via your device\'s OS settings, although this is beyond our control. 2.4. Data We CollectWe may also collect User Specific Information such as intake assessment form responses, emergency phone numbers provided for safety purposes, and mood tracking data to enhance the personalized experience and effectiveness of our services. Additionally, we may gather Professional Specific Information, including the type of specialist, licenses, and years of experience, to ensure the quality and suitability of the services provided by our professionals. This data aids in matching users with the most appropriate and qualified specialists to address their specific needs effectively.3.     PURPOSES OF PERSONAL DATA PROCESSINGWe process your personal data for the following purposes:3.1. Providing the ServiceThis involves facilitating your use of the Service seamlessly and addressing any technical issues or errors that may arise. Additionally, we utilize OpenAI\'s API to generate AI-driven content. Further information on this can be found in OpenAI\'s Privacy Policy and API data usage policies.3.2. Offering Customer SupportYour personal data is processed to respond to your inquiries related to technical support, Service details, or other communications you initiate. As part of this, we may send you notifications or emails regarding Service performance, security, payment transactions, and updates on our Terms and Conditions of Use or this Privacy Policy.3.3. Communication Regarding Service UsageWe communicate with you, potentially through push notifications if you choose to opt-in. To discontinue receiving push notifications, you can modify the settings on your device. Services used for this purpose may gather data on when messages were viewed by users and their interactions, including clicking on embedded links.3.4. Research and Analysis of Service UsageThis aids in comprehending our business, analyzing operations, enhancing, innovating, planning, designing, and developing the Service and new products. The data is also utilized for statistical analysis and improvement, guiding decisions to enhance the Service based on insights obtained from this analysis.3.5. Marketing CommunicationsYour personal data is processed for marketing campaigns, ensuring you receive information about our products such as special offers or new features available on the App. Marketing efforts may include displaying advertisements on the App and sending push notifications. If you wish to cease receiving push notifications, you can modify your device settings.3.6. Personalized AdvertisingBoth we and our partners employ your personal data to customize advertisements, potentially showing them to you at pertinent moments. For instance, if you have the App installed, you may encounter ads for our products on your Facebook feed.HOW TO OPT OUT OR INFLUENCE PERSONALIZED ADVERTISINGiOS: On your iPhone or iPad, navigate to Settings > Privacy > Apple Advertising and opt out of Personalized Ads.Furthermore, you can access valuable information and opt out of some interest-based advertising by visiting the following links:We respect your right to influence the ads you encounter. Hence, we provide insight into the service providers we use for this purpose and how some of them enable you to manage your ad preferences.We utilize Facebook Ads Manager and Facebook Custom Audience, allowing us to select audiences that view our ads on Facebook or other affiliated products like Instagram. With Facebook Custom Audience, we may generate a user list with specific data sets, such as IDFA, targeting users who have completed particular actions within the Service (e.g., installing the App). Consequently, we can request Facebook to display ads to specific user groups. This may result in increased ad visibility while using Facebook or related products. Instructions on opting out of advertising via Facebook Custom Audience can be found here.Facebook also empowers its users to influence the types of ads displayed on the platform. To adjust the ads you see on Facebook, please refer to this link or modify your ad settings on Facebook.3.7. Processing PaymentsWe may offer paid products and/or services within the App, which involve utilizing third-party payment processing services (such as payment processors). This facilitates your ability to make payments, and we will receive notifications confirming successful payments.Payment information on both sides is securely handled by Stripe, a trusted third-party payment processor. We do not store any specific payment information, such as credit card details, on our servers.3.8. Enforcing Terms and Conditions and Fraud PreventionPersonal data is employed to uphold our agreements and contractual commitments, as well as to identify, prevent, and combat fraudulent activities. Consequently, we might share your information with relevant entities, including law enforcement agencies, especially if disputes arise in relation to our Terms and Conditions of Use.3.9. Compliance with Legal ObligationsWe may process, use, or share your data when mandated by law, particularly if requested by law enforcement agencies through legally permissible means.4.     LEGAL BASES FOR PERSONAL DATA PROCESSINGIn this section, we delineate the legal bases for each specific processing purpose. This section pertains exclusively to users within the European Economic Area (EEA). We process your personal data under the following legal bases:4.1. Your ConsentUnder this legal basis, we may communicate with you regarding your use of the Service, such as sending push notifications reminding you to engage with the App.4.2. Contractual PerformanceWe process data under this legal basis to:Provide the Service in accordance with our Terms and Conditions of UseTailor your experienceOffer customer supportCommunicate concerning your Service usageHandle payment processing4.3. Legitimate InterestsWe rely on legitimate interests for the following:Research and analysis of Service utilization: We seek to enhance the Service based on user preferences and experiences, introducing new features and improvements.Marketing communications: Promoting our Service, new offerings, and special deals in a reasonable and fitting manner.Personalized advertising: Delivering targeted promotions for the Service.Enforcement of Terms and Conditions and Fraud Prevention: Protecting our legal rights, preventing fraud, unauthorized Service use, and ensuring adherence to our Terms and Conditions of Use.4.4. Legal ObligationsPersonal data may be processed to fulfill legal obligations as mandated by applicable laws and regulations.5.     SHARING YOUR PERSONAL DATAWe share information with third parties that contribute to the operation, improvement, customization, support, and promotion of our Service. Certain sets of personal data may be shared, especially for the purposes outlined in Section 3 of this Privacy Policy. Third-party recipients encompass:5.1. Service ProvidersWe collaborate with third-party service providers hired to deliver services or perform business functions on our behalf, following our instructions.5.2. Law Enforcement and Public AuthoritiesPersonal data may be utilized and disclosed to enforce our Terms and Conditions of Use, safeguard our rights, privacy, safety, or property, respond to court requests, law enforcement agencies, regulatory bodies, and other government authorities, or as required by law.5.3. Merger or Acquisition PartiesAs our business evolves, we might acquire or divest assets or business components. Customer information is typically part of transferred business assets in such situations. We may also share this data with affiliated entities or transfer it during corporate transactions like business sales, mergers, consolidations, divestitures, or asset transfers, or in rare cases of bankruptcy.6.     MEDICAL INFORMATIONThis notice outlines how your medical information may be used and disclosed, as well as how you can access this information. Please review it carefully. Pocket Mate.AI is dedicated to safeguarding your health information. We are obligated by law to maintain the confidentiality of protected health information, inform individuals about our legal obligations and privacy practices concerning protected health information, and notify affected individuals in the event of a breach of unsecured protected health information.USES AND DISCLOSURES OF YOUR HEALTH INFORMATIONWe may use and disclose your health information for the following purposes:Treatment: Your health information may be used or disclosed to a physician or healthcare provider providing your treatment.Healthcare Operations: We may use and disclose your health information in connection with our healthcare operations, which encompass activities like quality assessment and improvement, practitioner evaluation, training programs, accreditation, and licensing activities.Your Authorization: Except as stated above, we will not use or disclose your health information unless you have provided written authorization. You have the right to revoke this authorization in writing.YOUR RIGHTS REGARDING YOUR HEALTH INFORMATIONYou possess various rights concerning your health information, including:The right to view and obtain copies of your health information.The right to request corrections or updates to your health information.The right to ask for limitations on how your health information is used and disclosed.The right to receive a list of specific disclosures we have made regarding your health information.7.     EXERCISING YOUR PRIVACY RIGHTSTo exercise control over your personal data, you possess the following rights:Access, review, update, and correct your personal data previously provided on the App.Request erasure of your personal data as permitted by law. We will make reasonable efforts to fulfill deletion requests, except when legal obligations require data retention.Object to or limit the use of your personal data, halting some or all data usage.For EEA-based users:Lodge a complaint with a data protection supervisory authority.Obtain your personal data in a machine-readable format through a request to us.To execute these privacy rights, contact us at privacy@pocketmate.ai.8.     AGE LIMITATIONWe do not knowingly process personal data from individuals under 16 years of age. If you are aware of anyone under 16 providing us with personal data, please notify us.9.     INTERNATIONAL DATA TRANSFERSPersonal data might be transferred to countries outside the initial collection jurisdiction to deliver the Service under the Terms and Conditions of Use and for purposes detailed in this Privacy Policy. For data transfers from the EEA, we use Standard Contractual Clauses or European Commission adequacy decisions for countries with inadequate data protection levels.10.  CHILDREN UNDER 13Pocket Mate.AI is dedicated to safeguarding the privacy of all our users, with particular emphasis on the protection of minors online. In alignment with this commitment, we strictly adhere to a policy against knowingly collecting personal information from individuals under the age of thirteen, in compliance with the Children\'s Online Privacy Protection Act (COPPA) and other relevant laws.Additionally, if you are under the age of 18, it is our policy that you may only use Pocket Mate.AI under the supervision and with the consent of a parent or guardian. This policy ensures that minors\' interaction with our content, resources, and services occurs in a manner that is both safe and compliant with the law, while fostering a responsible online environment. We encourage parents and guardians to play an active role in their children\'s online activities and interests, furthering our commitment to creating a secure and enriching online experience for users of all ages.11.  CHANGES TO THIS PRIVACY POLICYWe may alter this Privacy Policy periodically. Significant changes will be communicated via email, providing an opportunity to review the revised Privacy Policy. By continuing to use the Service post-change, you agree to the revised terms.12.  STATE-SPECIFIC DISCLOSURESThis additional state-specific privacy disclosure clause ("Disclosure") supplements the Privacy Policy and is effective as of the date above. Our Privacy Policy outlines the personal information we collect, the sources from which we collect it, the purposes for which we use it, the limited circumstances under which we share personal information, and with whom we share it. These additional disclosures are mandated by the California Privacy Rights Act, Colorado Privacy Act, Connecticut Data Privacy Act, Utah Consumer Privacy Act, and Virginia Consumer Data Protection Act, and serve as a Notice at Collection under the California Privacy Rights Act:      i.         Categories of personal information collected: The personal information that Pocket Mate.AI collects or has collected from consumers in the twelve months prior to the effective date of this Disclosure falls into the following categories established by the California Privacy Rights Act, depending on which Pocket Mate.AI Service is used:a.     Identifiers such as name, address, phone numbers, IP address, PocketMate.AI account log-in information, or government-issued identifiers.b.     Personal information, including credit card numbers or other payment information.c.     Information that may reveal age, gender, race, sexual orientation, or other protected classifications.d.     Internet or other electronic network activity information, including content interaction information and geolocation data.e.     Inference data, such as information about purchase preferences.     ii.         Categories of personal information disclosed for a business purpose: The personal information that Pocket Mate.AI disclosed to third parties identified in the "Sharing Information with Third Parties" section of our Privacy Policy about consumers for a business purpose in the twelve months prior to the effective date of this Disclosure falls into the categories outlined above.    iii.         Advertising: Pocket Mate.AI shares limited information for cross-context behavioral advertising purposes, as defined by the California Privacy Rights Act.    iv.         Your Data Rights: You may have certain data rights under state privacy laws, including the right to request information about the collection of your personal information, access your personal information, correct or delete your personal information, opt out of processing for targeted advertising, or opt out of sharing for cross-context behavioral advertising. Contact us here to exercise these rights.     v.         No sale of personal information: Pocket Mate.AI has not sold any personal information of consumers in the twelve months prior to the effective date of this Disclosure.    vi.         California Privacy Rights Act Sensitive Personal Information Disclosure: Pocket Mate.AI collects and discloses sensitive personal information as defined under the California Privacy Rights Act but does not use or disclose it for purposes not expressly permitted by the Act.  vii.         California Privacy Rights Act Retention Disclosure: We retain your personal information for as long as necessary to fulfill the purposes described in our Privacy Policy or as required by law. viii.         California Privacy Rights Act Non-discrimination Statement: Pocket Mate.AI does not discriminate against consumers for exercising their rights under the California Privacy Rights Act.    ix.         De-identified Data Disclosure: Pocket Mate.AI may use de-identified data or treat it as personal data subject to applicable law.     x.         Colorado Privacy Act Profiling Disclosure: Pocket Mate.AI does not engage in profiling of consumers for automated decisions that produce legal or similarly significant effects under the Colorado Privacy Act.13.  DATA RETENTIONWe retain your personal data as long as necessary for the purposes stated in this Privacy Policy, including Service provision, legal compliance, dispute resolution, and agreement enforcement.14.  "DO NOT TRACK" REQUESTSThis App generally does not support "Do Not Track" requests. For third-party services\' stance on "Do Not Track," refer to their respective privacy policies.15.  CONTACT USFor inquiries about this Privacy Policy or prior versions, reach out to us. Contact privacy@pocketmate.ai for questions about your account or personal data.'
    );

    cy.get("svg.w-8.cursor-pointer").eq(0).click();

    /////////////// Refund Policy ///////////
    cy.get("div.MuiDataGrid-cellContent")
      .contains("Refund Policy") // Find the cell with 'Help Desk' text
      .parents("div.MuiDataGrid-row") // Go up to the entire row
      .within(() => {
        cy.contains("span", "View") // Find the View button inside that row
          .should("be.visible")
          .click();
      });

    cy.get(".text-gray-dark").should("have.text", "Refund Policy");

    cy.get(".ql-editor").should(
      "have.text",
      'This Refund Policy outlines the terms and conditions for refunds provided by Pocket Mate.AI ("PocketMate," "we," or "us") for the use of our platform and services. Factors considered may include the nature of dissatisfaction, service quality, and the time elapsed since service delivery.1.     Eligibility for RefundsPocket Mate.AI provides refunds under the following circumstances:Technical Issues: If technical issues prevent the user from accessing our platform or using our services as intended, and these issues cannot be resolved within a reasonable timeframe, a full refund may be issued.Cancellation within Cooling-off Period: Users may cancel their subscription within the FTC’s designated cooling-off period, which basically lasts until the midnight of the third business day after the sale, and receive a full refund.Non-Delivery of Services: If a user has paid for a service but does not receive the promised service, they are entitled to a full refund.Dissatisfaction: If a user has paid for a service but is not satisfied with the promised service, they are entitled to a refund.2.     Refund ProcessTo request a refund, users must contact Pocket Mate.AI support within 7 days of the service date and provide sufficient details regarding the reason for the refund request. Refund requests may be submitted via email at support@pocketmate.ai or through our in-app support system. Requests received after the 7-day period may not qualify for a refund. Refunds for services rendered will be at the discretion of Pocket Mate.AI and will be evaluated on a case-by-case basis. 3.     Cancellation by TherapistIn the event of a therapist-initiated cancellation of a booking request or an accepted request, users will receive a 100% refund of the service fee. Therapists are limited to five rejections per month, and exceeding this limit will result in a three-day account block and a 25% penalty deducted from the subsequent cycle\'s payments. Following the account restoration, users will be eligible for a discount on their first session. Both therapists and users are expected to comply with these terms to ensure the fair and efficient use of the service.4.     Refund TimeframeRefunds will be processed within 3 to 10 business days from the date the refund request is approved. The time it takes for the refund to reflect in the user\'s account may vary depending on the user\'s financial institution.5.     Refund MethodRefunds will be issued using the same payment method used for the original transaction. If this is not feasible, Pocket Mate.AI will work with the user to arrange an alternative refund method.6.     Non-Refundable ItemsCertain items or services may not be eligible for refunds, including but not limited to:Services already rendered by therapists or service providers.Subscriptions that have already been utilized within the applicable billing cycle.Any other items explicitly designated as non-refundable at the time of purchase.Cancellations made with less than 24 hours’ notice or with only 12 hours remaining before the start of the session will incur a 50% charge of the service price, which is non-refundable.In the event that a user utilizes fifteen (15) days of the subscription provided by Pocket Mate.AI, it is understood and agreed that PocketMate.AI shall not issue any refunds for the remaining subscription period. Users are hereby obligated to initiate the cancellation of their subscription directly with the designated provider, namely Apple Inc. for iOS users or Google LLC for Android users, in accordance with the terms outlined in Clause 6 of our Subscription Terms. Upon cancellation, all future subscription cycles will be terminated accordingly.7.     Dispute ResolutionIf a user disagrees with a refund decision made by Pocket Mate.AI, they may request further review or mediation through our support channels.8.     Changes to the Refund PolicyPocket Mate.AI reserves the right to update or modify this Refund Policy at any time without prior notice. Any changes will be effective immediately upon posting on our website or within our app.9.     Contact UsIf you have any questions or concerns about this Refund Policy, please contact us at support@pocketmate.ai.'
    );

    cy.get("svg.w-8.cursor-pointer").eq(0).click();
  });
});
