import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Container,
  Select,
  MenuItem,
  useMediaQuery,
  Fade,
  Card,
  IconButton,
  Chip,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "../key-components/Footer";
import CallToAction from "../key-components/CallToAction";
import Contact from "../key-components/Contact";
import QuickLinks from "../key-components/QuickLinks";


const faqConfig = {
  "window-tint": [
    {
      question: "What makes Llumar window film superior to other brands?",
      answer: `<ul>
          <li>At Tint Tek Plus, we exclusively offer LLumar window films! American made and manufactured, known for their exceptional quality and performance. Unlike many competitors, LLumar films are rigorously third-party tested to ensure they meet the highest standards in heat rejection, UV protection, and durability. Many companies claim high-performance numbers, but without proper third-party validation, those claims can’t be trusted. With LLumar, you get verified, proven results backed by independent testing.</li>
          <li>LLumar films effectively block infrared heat, keeping your vehicle cooler without requiring overly dark tints. Plus, they block 99% of harmful UV rays, protecting you from skin cancer, premature aging, and skin cell damage. When you choose LLumar at Tint Tek Plus, you're choosing products that offer real, reliable protection and comfort for your vehicle.</li>
        </ul>`,
    },
    {
      question: "How is Window Film installed? ",
      answer:
        "At Tint Tek Plus, we use a precise installation process for our window tint. The tint film is first carefully shrunk to fit on the exterior of your vehicle's windows, allowing it to conform to the natural curves of the glass. Once perfectly shaped, the film is then installed on the inside of the glass using its own specialized adhesive. This ensures a seamless, smooth finish that not only looks great but also provides long-lasting durability",
    },
    {
      question: "Do you remove anything when tinting a car? ",
      answer:
        "At Tint Tek Plus, we use a precise installation process for our window tint. The tint film is first carefully shrunk to fit on the exterior of your vehicle's windows, allowing it to conform to the natural curves of the glass. Once perfectly shaped, the film is then installed on the inside of the glass using its own specialized adhesive. This ensures a seamless, smooth finish that not only looks great but also provides long-lasting durability.",
    },
    {
      question:
        "Will window tinting affect the clarity of my windows or impair visibility, especially at night?",
      answer:
        "While window tinting reduces glare and improves comfort, darker tints can make it harder to see at night. We offer a range of tint options to ensure a balance between privacy, UV protection, and clear visibility, even in low-light conditions.",
    },
    {
      question: "How to clean windows once tinted?",
      answer: `
      <ul>
        <li><strong>Wait 3-5 days</strong> for the tint to cure before cleaning. </li>
        <li><strong>Use a soft microfiber cloth </strong> to avoid scratching</li>
        <li><strong> Use a mild, non-ammonia cleaner</strong> or a vinegar-water solution.</li>
        <li><strong> Wipe gently in circular motions</strong> to avoid damaging the tint.</li>
        <li><strong> Dry with a clean cloth</strong> to prevent water spots.</li>
      </ul>`,
    },
  ],
  "paint-correction": [
    {
      question: "What is Paint Correction?",
      answer:
        "Paint correction is a process used to restore the appearance of a vehicle’s paint by removing imperfections such as swirl marks, scratches, oxidation, water spots, and other imperfections that can make the paint look dull or damaged. It’s a highly effective way to bring back the original shine and depth of your vehicle's paint, ensuring it looks as good as new.",
    },
    {
      question: "How Long Does Paint Correction Last?",
      answer:
        "The results of paint correction can last for a long time, but they depend on how well the vehicle is maintained. The process removes imperfections in the paint, but it doesn’t protect against future scratches or damage. Applying a protective layer, like ceramic coating or wax, will help maintain the corrected finish longer.",
    },
    {
      question: "How Do You Fix Swirl Marks and Scratches on Car Paint?",
      answer:
        "Swirl marks and light scratches can be removed through the paint correction process. A combination of specialized polishing compounds and a machine polisher are used to gently remove the damaged layer of paint, restoring the surface to its original smoothness and gloss.",
    },
    {
      question: "Can Paint Correction Remove Deep Scratches?",
      answer:
        "Paint correction is effective at removing light to moderate imperfections, but deep scratches that penetrate the clear coat may require additional repair or touch-up painting. In some cases, the scratch may only be minimized, not fully eliminated.",
    },
    {
      question: "How Can I Maintain My Vehicle After Paint Correction?",
      answer:
        "To maintain your vehicle’s appearance after paint correction, regular washing with pH-neutral car shampoo and a microfiber towel is essential. Additionally, applying a ceramic coating or wax will help protect the paint and keep it looking pristine for longer.",
    },
    {
      question: "Can Paint Correction Be Done on New Cars?",
      answer:
        "Absolutely! Even new cars can benefit from paint correction to remove any imperfections caused during the manufacturing process or from transportation. In fact, many car owners opt for paint correction shortly after purchasing their vehicle to ensure it looks its best from day one.",
    },
  ],
  "paint-protection": [
    {
      question: "What is Paint Protection Film (PPF)?",
      answer: "PPF is made from a durable, clear urethane material. This advanced polymer film is engineered to protect a vehicle’s paint from scratches, stone chips, UV damage, and contaminants. The film is designed to be both flexible and tough, allowing it to conform seamlessly to the contours of the vehicle. The key feature of STEk PPF is its self-healing technology, which allows light scratches or swirl marks to disappear when exposed to heat, either from sunlight or a warm surface. This unique ability helps maintain the film’s smooth, flawless appearance over time.",
    },
    {
      question: "How much coverage do I receive with Paint Protection Film?",
      answer: `
      While we aim for 99%+ coverage with our Paint Protection Films and it's important to note that these materials are not paint, and achieving 100% perfect coverage is not always possible. Minor imperfections such as slight lifting on sharp curves, rivets, seams, or edges—even on flat surfaces—can occasionally occur. These are natural characteristics of the material, and some flaws are to be expected. </br>
      </br> We carefully place seams in the material to reduce issues like bubbling or lifting as much as possible, but some areas may still show minor signs. To ensure you're comfortable with the final result, we encourage you to ask a Tint Tek Plus team member to give you a better understanding of how your vehicle will look once PPF is applied.
      `,
    },
    {
      question: "Does PPF Damage Paint?",
      answer: "Paint Protection Film (PPF)  should not cause damage to your vehicle's factory paint or repainted surfaces. However, if your paint is already chipped or the panels have been repainted, there’s a chance that the film may lift the paint or clear coat during installation or removal. Since we cannot control the condition or quality of your vehicle’s paint—whether it’s original or repainted—we are not liable for any peeling or damage that might occur during the process. We recommend ensuring that your paint is in good condition before applying PPF or vinyl wrap to avoid any potential issues.",
    },
    {
      question: "Will Paint Protection Film (PPF) look perfect?",
      answer: `
      Our goal is to always provide you with the highest-quality installation, and we are continuously evolving to be the best in the industry. However, achieving a perfectly flawless look can be challenging due to PPF being an 8mm film, not paint. Common irregularities, such as tack marks, stretch marks, or seams, are normal and necessary to ensure proper adhesion and a secure, long-lasting installation. </br>
      </br> Even with our skilled installation team, small imperfections may still occur, especially on sharp corners or concave areas of your vehicle. While we are always working to minimize these issues and improve our techniques, it's important to understand that eliminating every wrinkle or bubble completely can be difficult. </br>
      </br>In short, while we strive for perfection and are constantly evolving to reduce these imperfections, the nature of working with PPF means that some slight irregularities may still be present. Rest assured, you will still receive a top-quality result that significantly enhances and protects your vehicle. </br>
      `,
    },
    {
      question: "Do you remove any parts from my vehicle?",
      answer: "In some cases, yes, it may be necessary to remove certain parts of your vehicle to ensure a clean and seamless installation. Parts like mirrors, badges, or trim pieces are sometimes taken off to achieve a perfect wrap or film application. This step helps us ensure that the film fits precisely and avoids any potential lifting or wrinkles. Our goal is to ensure your vehicle looks flawless, and part of that process can involve removing parts to provide a more thorough and professional finish",
    },
    {
      question: "Do you do any corrections before installing PPF?",
      answer: `
      Yes, we perform a light polish on the vehicle before applying the Paint Protection Film (PPF). This is important because PPF encapsulates the condition of the paint, meaning any imperfections in the paint will be visible once the film is applied. Ensuring that the paint is in the best possible condition is key to achieving the highest-quality result. </br>
      </br> Once the vehicle arrives, we carefully inspect the condition of the paint. If any additional corrections, such as deeper polishing or paint repair, are needed to optimize the surface for PPF application, we will recommend those before proceeding. Our goal is to make sure the paint is in top condition so that the PPF adheres properly and looks flawless once applied.
      `,
    },
    {
      question: "Do you check the PPF after installation?",
      answer: "Yes, we schedule a post-installation check-up to ensure everything is perfect. After the PPF is applied, we carefully inspect the entire vehicle to make sure the film is properly adhered and that any bubbles, wrinkles, or imperfections are minimized. If any adjustments are needed, we take care of them promptly. We also provide guidance on proper care and maintenance, ensuring your PPF continues to protect and enhance your vehicle for years to come. Your satisfaction is our pr",
    },
    {
      question: "Can I PPF my car after a collision or having it repainted? ",
      answer:`
      While we always strive for perfection and take every precaution during installation, it’s important to understand that Paint Protection Film (PPF) can potentially cause damage to certain surfaces, especially if the vehicle has had previous aftermarket repairs, such as repainting, Bondo, dent repair, or work involving carbon fiber or fiberglass. During installation, the film is often aligned multiple times on the painted panel, and the strong adhesive on the back of the film can sometimes lift paint or clear coat—this can happen even with factory paint. </br>
      </br> We make every effort to avoid this, but if your vehicle has been repainted or has existing damage like chips, there’s a chance that the film could pull up the paint or clear coat during installation or removal, particularly in areas where the paint or clear coat is not well bonded or has been poorly applied. </br>
      </br> As a result, Tint Tek Plus cannot be held responsible for any damage caused to repainted surfaces or factory paint during installation or when the film is removed later. This includes any peeling of paint, removal of existing clear bra, emblems, or vinyl that might be necessary for the installation. By proceeding with the service, you agree to release us from all liability related to peeling paint or clear coat damage.</br>
      </br> To minimize any risks, we highly recommend ensuring your paint is in good condition before applying PPF or vinyl wrap. If your vehicle has been repainted, it’s best to check the quality of the paint job and confirm it’s fully cured and bonded to avoid any potential issues.</br>
      `
    },
  ],
  "windshield-protection": [
    {
      question: "What is ExoShield GT3 Windshield Protection Film?",
      answer:
        "ExoShield GT3 is a high-performance windshield protection film designed to protect your vehicle's windshield from chips, cracks, and other road debris damage. Made from a durable, optically clear polyurethane material, ExoShield is applied directly to the windshield to provide an extra layer of defense while maintaining clarity and functionality.",
    },
    {
      question: "Can I Wash My Car Normally After Installing ExoShield?",
      answer:
        "Yes! ExoShield is designed to withstand regular car washes. You can wash your car as usual, but it's recommended to avoid harsh chemicals or abrasive scrubbing materials that could damage the protective film. Hand washing or touchless car washes are ideal for maintaining the integrity of the film.",
    },
    {
      question: "Does ExoShield GT3 Change the Look of My Windshield?",
      answer:
        "ExoShield is clear and nearly invisible once applied, so it won't alter the appearance of your windshield. It offers protection without changing the look of your vehicle or obstructing your view in any way.",
    },
    {
      question: "Is ExoShield GT3 Easy to Maintain?",
      answer:
        "Yes, ExoShield is low-maintenance. Regular cleaning with a soft microfiber towel and pH-neutral cleaner is all that’s needed to keep the film looking great. The film is also self-healing, which means minor scratches can disappear over time when exposed to heat, such as sunlight.",
    },
    {
      question: "Can an ExoShield GT3 Be Removed?",
      answer:
        "ExoShield GT3 is designed to be permanent, but if it ever needs to be removed (e.g., when replacing a damaged windshield), the film can be safely removed by a professional without damaging the glass underneath.",
    },
    {
      question: "Does ExoShield GT3 protect against all types of damage?",
      answer:
        "ExoShield GT3 significantly reduces the risk of damage from road debris, such as rocks, gravel, and other hazards. However, it is not a guarantee against all types of damage, such as large impacts or severe accidents. It provides additional protection but doesn't replace the need for careful driving.",
    },
    {
      question: "Can Windshield Wipers Damage My Windshield?",
      answer: `Yes, windshield wipers can damage your windshield in several ways:
       <ul>
        <li><strong> Scratches from debris:</strong> Wipers can drag dirt or road debris across the glass, causing micro-scratches.</li>
        <li><strong> Wiper blade wear:</strong> Damaged or old wiper blades can cause friction and scratching on the windshield.</li>
        <li><strong> Dry windshield use:</strong> Wiping a dry windshield can cause excessive friction, leading to scratches.</li>
      </ul>`,
    },
  ],
  "ceramic-coating": [
    {
      question: "What is Ceramic Coating? ",
      answer:
        "Ceramic coating is a liquid polymer applied to the exterior surfaces of a vehicle, such as the paint, glass, wheels, and trim, that creates a hydrophobic (water-repellent) surface. This coating bonds chemically with the vehicle's surface, forming a protective layer that provides several benefits.",
    },
    {
      question: "How Do I Maintain My Ceramic Coating?",
      answer: `Ceramic coatings require annual maintenance to keep the hydrophobic properties refreshed. Over time, the coating's sacrificial layer will wear down, so we recommend bringing your vehicle in for its annual checkup after one year.
      <ul>
       <li><strong>Cost of Annual Maintenance: </strong> Starting at $225</li>
     </ul>`,
    },
    {
      question: "Can I Wash My Car Normally After a Ceramic Coating?",
      answer:`
        Yes! But never use an automated car wash. The harsh chemicals, brushes, or cloths used in automated car washes can degrade the coating and cause micro-scratching. </br>
        </br> <strong>Best Practice: </strong>Always hand wash your vehicle using pH-neutral car shampoo and soft microfiber towels or a wash mitt to gently remove dirt. Avoid using any abrasive materials that could damage the coating.        `,
    },
    {
      question: "How Should I Protect My Vehicle from Contaminants?",
      answer: `Though ceramic coatings create a strong protective layer, contaminants like tree sap, bird droppings, or road tar can still affect the surface.
      <ul>
       <li><strong> Quick Action: </strong> If you notice contaminants, clean them off as soon as possible to avoid damaging the coating.</li>
       <li><strong> Use Detail Spray: </strong>  A ceramic-safe quick detail spray can be used to help remove contaminants gently without harming the coating.</li>
     </ul>`,
    },
    {
      question: "Can I Use My Vehicle in the Rain After Getting Ceramic Coating?",
      answer: `
      Yes! In fact, rain will actually showcase the benefits of your ceramic coating, as the water will bead up and roll off the surface.
      <ul>
        <li><strong>Note: </strong> The hydrophobic effect is at its best when the coating has had time to cure fully (typically 24-48 hours after application).</li>
      </ul>`,
    },
    {
      question: "Does the Ceramic Coating Protect Against Scratches?",
      answer: `
        While the ceramic coating offers excellent protection against minor scratches and swirl marks, it is not entirely scratch-proof. It helps prevent surface damage from contaminants and environmental factors, but rough or heavy impacts can still harm the paint.
        <ul>
          <li><strong>Tip: </strong> Always avoid contact with harsh or abrasive materials on the surface, and regularly clean your vehicle to prevent damage from debris.</li>
        </ul>`,
    },
  ],
  "paint-disclosure": [
    {
      question: "What is the policy on paint damage?",
      answer: `Tint Tek Plus is not liable for any paint-related issues, including but not limited to peeling, lifting, or damage, that may occur during the installation of film or when the film is removed at a later time.
       <ul>
        <li><strong>Paint Condition: </strong>  We are not the manufacturer or previous repairer of your vehicle, and therefore, we cannot assess any potential underlying paint issues that may exist.</li>
        <li><strong>Inherent Risks: </strong>  Installing any type of film or vinyl on a vehicle involves inherent risks to the paint, such as potential damage, especially if the paint is already compromised, previously repaired, or aged.</li>
        <li><strong>Customer Responsibility: </strong>  By proceeding with the installation, you fully accept responsibility for any risks associated with the application of the film, including any damage that may occur to the paint during or after the installation.</li>
      </ul>`,
    },
  ],
  "warrany-for-services": [
    {
      question: "Automotive Window Tint Warranty",
      answer: `<strong> Warranty Duration: </strong> LLumar window films come with a lifetime warranty for the original owner of the vehicle, covering defects in materials and craftsmanship. Coverage: The warranty includes protection against: </br>
     </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>

      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage caused by improper care or cleaning, including the use of abrasive materials or harsh chemicals.</li>
        <li>Damage from accidents or or external impacts (e.g., Animals,chips, scratches, or punctures).</li>
      </ul>
      `,
    },
    {
      question: "Residential Window Tint Warranty",
      answer: `<strong> Warranty Duration: </strong> LLumar offers a lifetime warranty for residential window tinting, which is valid for the original purchaser and applies as long as you reside in the same home.</br>
      </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>

      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage from improper care, such as the use of harsh chemicals, abrasive cleaning tools, or automated cleaning systems.</li>
        <li>Damage from external impacts, including scratches, abrasions, or punctures from accidents or physical force.</li>
        <li>Issues caused by environmental factors, such as extreme weather conditions, improper window preparation, or improper installation of the film.</li>
      </ul>
      <strong>Proper Care: </strong> To keep the warranty active, follow the manufacturer’s recommendations for cleaning and maintenance. Avoid harsh chemicals, abrasive tools, and automated window cleaning systems to prevent film damage.
      `,
    },
    {
      question: "Commercial Window Tint Warranty",
      answer: `<strong> Warranty Duration: </strong> LLumar offers a limited warranty for commercial window tinting, which is valid for up to 15-years.</br>
      </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>

      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage caused by improper cleaning methods, including the use of abrasive tools, harsh chemicals, or automated cleaning systems.</li>
        <li>Damage from physical impact, such as scratches, abrasions, or punctures caused by accidents or external factors.</li>
      </ul>
      `,
    },
    {
      question: "Paint Protection Film (STEK PPF) Warranty & Care Guidelines",
      answer: `<strong> Warranty Duration: </strong> The STEK Paint Protection Film (PPF) applied to your vehicle is covered by a 10-year limited warranty against defects in material and workmanship, including delamination, bubbling, and peeling under normal use.</br>
      </br><strong>Coverage: </strong> The warranty covers defects in materials or workmanship, including:
      <ul>
        <li>Peeling</li>
        <li>Cracking</li>
        <li>Blistering</li>
        <li>Discoloration</li>
      </ul>
      <strong>Hydrophobic Properties: </strong> Over time, the hydrophobic properties of the PPF may diminish. 
      <strong>Exclusions: </strong> The warranty does not cover:
      <ul>
        <li>Damage from improper cleaning, including using abrasive materials or harsh chemicals.</li>
        <li>Scratches, chips, or abrasions caused by road debris, impacts, or other external factors.</li>
        <li>Damage from pre-existing conditions on the vehicle's paint, such as cracks, imperfections, or other surface issues.</li>
      </ul>
       <strong>Proper Care: </strong>  To maintain your warranty, it's important to properly care for the PPF. Automated car washes should be avoided, as the harsh chemicals and brushes used in these systems can damage the film and cause micro-abrasions. We highly recommend hand washing your vehicle using mild, pH-balanced products to preserve the film’s integrity.
      `,
    },
    {
      question: "Ceramic Coating Warranty & Care Guidelines",
      answer: `<strong> Warranty Duration: </strong> The warranty for our ceramic coatings is valid for the entire lifespan of the coating you choose, provided proper care is followed.</br>
      </br><strong>Proper Care: </strong> To maintain your warranty, it is crucial to properly maintain the coating. Automated car washes should never be used, as the harsh chemicals and machines can damage the coating and cause micro-scratching, especially if brushes or abrasive materials are involved. We recommend hand washing your vehicle with appropriate products to preserve the coating.</br>
      </br><strong>Hydrophobic Properties: </strong> Over time, the hydrophobic properties of the coating may decrease. This doesn’t mean the coating is no longer effective; it’s simply a sign that the pores of the coating may be clogged. A decontamination wash will restore the coating’s performance and hydrophobic qualities.</br>
      </br><strong>Decontamination Wash: </strong> We offer a decontamination wash for $225, which we recommend every 12-24 months to keep the coating performing optimally.
      `,
    },
    {
      question: "Darken PPF Headlights/Taillights Warranty",
      answer: `<strong> Warranty Coverage: </strong> The STEK Paint Protection Film (PPF) applied to your taillights is covered by a 7-year limited warranty against defects in material and workmanship. This warranty includes protection against delamination, bubbling, or peeling of the film under normal conditions.</br>
      `,
    },
    {
      question: "Windshield Protection Warranty",
      answer: `
        ExoShield GT3 Windshield Protection comes with a 36-month manufacturer's warranty covering defects related to film delamination. This warranty does not cover issues such as pitting, chipping, cracking, or scratches caused by washing or windshield wipers. For optimal performance, the film should be removed if it becomes hazy or difficult to see through. </br>\
        </br> Any warranty claims or issues must be addressed at our location. If you notice any defects or concerns with the film, please contact Tint Tek Plus by phone or email within 7 days of discovery, so we can promptly work to resolve the issue.</br>
        </br>Additionally, for $150, you can opt for an additional insurance policy that provides up to $1,000 toward the cost of windshield replacement if necessary during the coverage period</br>
      `,
    },
  ],
  "videography/Photography": [
    {
      question: "Videography/Photography Policy",
      answer: `
        At Tint Tek Plus, we take detailed photos of your vehicle before, during, and after the installation/Service. This helps us document the condition of your vehicle, the steps of the installation, and the final result. Throughout the process, we may showcase your vehicle on our social media platforms, such as Instagram, Facebook, and others, to highlight our work and promote our services.</br>
        </br>At Tint Tek Plus, we take detailed photos of your vehicle before, during, and after the installation/Service. This helps us document the condition of your vehicle, the steps of the installation, and the final result. Throughout the process, we may showcase your vehicle on our social media platforms, such as Instagram, Facebook, and others, to highlight our work and promote our services.</br>
      `,
    },
  ],
  "customer-satisfaction": [
    {
      question: "Customer Satisfaction",
      answer: "At Tint Tek Plus, customer satisfaction is the cornerstone of our success. We strive to not only meet but exceed your expectations with every service. If any issue arises or something doesn’t meet your expectations, we ask that you reach out to us directly so we can address your concerns and resolve the situation. We believe most issues are simply misunderstandings that can be easily fixed. Please give us the opportunity to make things right before leaving feedback on platforms like Facebook, Google, Reddit, etc. We truly appreciate your understanding and the chance to resolve any concerns before negative comments are posted.",
    },
  ],
};

const faqSections = Object.entries(faqConfig).map(([key, questions]) => ({
  id: key,
  title: key
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" "),
  questions: questions.map((q, index) => ({
    id: `${key}-q${index + 1}`,
    question: q.question,
    answer: q.answer,
  })),
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  
  const currentSection = faqSections[selectedServiceIndex];
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const handleServiceSelect = (index) => {
    setAnimateIn(false);
    
    // Add a small delay for the animation effect
    setTimeout(() => {
      setSelectedServiceIndex(index);
      setExpanded(false);
      setAnimateIn(true);
    }, 300);
  };

  const navigateSection = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedServiceIndex + 1) % faqSections.length
      : (selectedServiceIndex - 1 + faqSections.length) % faqSections.length;
      
    handleServiceSelect(newIndex);
  };

  return (
    <Box sx={{ 
      backgroundColor: "#0f0f13", 
      color: "#fff",
    }}>
      {/* Hero Header */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "40vh", md: "40vh" },
          background: "linear-gradient(135deg, #111118 0%, #2794d2 50%, #1a1a25 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          overflow: "hidden",
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at 30% 70%, rgba(45, 60, 136, 0.15), transparent 50%)",
            zIndex: 1
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at 70% 30%, rgba(66, 135, 245, 0.08), transparent 50%)",
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "4rem",
                lg: "4.5rem",
              },
              textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
              mb: 1,
              letterSpacing: "-0.02em"
            }}
          >
            USER ESSENTIALS
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              fontSize: {
                xs: "1.25rem",
                sm: "1.5rem",
                md: "1.75rem",
              },
              maxWidth: "800px",
              mx: "auto",
              fontWeight: "bold"
            }}
          >
            Everything you need to know about our services & warranties
          </Typography>
        </Container>
      </Box>

      {/* Service Selector Section */}
      <Container sx={{ 
        py: { xs: 5, md: 8 }, 
        maxWidth: "1400px", 
        position: "relative"
      }}>
        <Box 
          sx={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            mb: 6
          }}
        >
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{
              color: "#fff",
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-12px",
                left: 0,
                width: "290px",
                height: "4px",
                background: "#2794d2",
                borderRadius: "2px"
              }
            }}
          >
            Browse by Service
          </Typography>
          
          {!isMobile && (
            <Box>
              <IconButton 
                onClick={() => navigateSection('prev')}
                sx={{ 
                  color: "#fff", 
                  backgroundColor: "rgba(255,255,255,0.05)",
                  mr: 1,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton 
                onClick={() => navigateSection('next')}
                sx={{ 
                  color: "#fff", 
                  backgroundColor: "rgba(255,255,255,0.05)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>

        {isMobile ? (
          <Select
            fullWidth
            value={selectedServiceIndex}
            onChange={(e) => handleServiceSelect(Number(e.target.value))}
            sx={{
              mb: 4,
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "#fff",
              borderRadius: 2,
              fontWeight: "600",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              "& .MuiSelect-select": {
                p: 2,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none"
              },
              "& .MuiSelect-icon": {
                color: "rgba(255,255,255,0.7)"
              },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              }
            }}
          >
            {faqSections.map((section, index) => (
              <MenuItem key={section.id} value={index}>
                {section.title}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <Grid container spacing={2} mb={6}>
            {faqSections.map((section, index) => (
              <Grid item key={section.id}>
                <Box
                  onClick={() => handleServiceSelect(index)}
                  sx={{
                    py: 1.5,
                    px: 3,
                    cursor: "pointer",
                    borderRadius: "8px",
                    fontWeight: 600,
                    color: selectedServiceIndex === index ? "#fff" : "#fff",
                    border: selectedServiceIndex === index 
                      ? "1px solid #2794d2" 
                      : "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: selectedServiceIndex === index 
                      ? "rgba(58, 98, 242, 0.15)" 
                      : "rgba(255,255,255,0.03)",
                    "&:hover": {
                      backgroundColor: selectedServiceIndex === index 
                        ? "rgba(58, 98, 242, 0.2)" 
                        : "rgba(255,255,255,0.06)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {section.title}
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
        
        {/* Current section display chip */}
        {/* <Chip 
          label={currentSection.title}
          sx={{
            backgroundColor: "rgba(58, 98, 242, 0.15)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: 600,
            fontSize: "0.9rem",
            mb: 2
          }}
        /> */}
      </Container>

      {/* FAQ Accordion Section */}
      <Box sx={{ 
        backgroundColor: "#0f0f13", 
        py: 8, 
        position: "relative",
      }}>
        <Container sx={{ maxWidth: "1000px" }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h4"
              fontWeight="700"
              mb={2}
              color="#fff"
              sx={{
                position: "relative",
                display: "inline-block",
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              color="rgba(255,255,255,0.7)"
              sx={{ maxWidth: "700px", mx: "auto", fontSize: "1.1rem" }}
            >
              Find answers to common questions about {currentSection.title.toLowerCase()}. 
              Can't find what you're looking for? Contact our support team.
            </Typography>
          </Box>

          <Fade in={animateIn} timeout={500}>
            <Grid container spacing={3}>
              {currentSection.questions.map(({ id, question, answer }, index) => (
                <Grid item xs={12} key={id}>
                  <Fade in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                    <Card
                      elevation={expanded === id ? 4 : 0}
                      sx={{
                        borderRadius: "16px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        backgroundColor: expanded === id ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.015)",
                        backdropFilter: "blur(10px)",
                        border: expanded === id 
                          ? "1px solid #2794d2" 
                          : "1px solid rgba(255,255,255,0.06)",
                        "&:hover": {
                          backgroundColor: expanded === id 
                            ? "rgba(255,255,255,0.04)" 
                            : "rgba(255,255,255,0.025)",
                          transform: expanded === id ? "translateY(-2px)" : "none",
                          boxShadow: expanded === id 
                            ? "0 8px 25px rgba(0,0,0,0.15)" 
                            : "0 4px 15px rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      <Accordion
                        expanded={expanded === id}
                        onChange={() => setExpanded(expanded === id ? false : id)}
                        disableGutters
                        elevation={0}
                        sx={{
                          backgroundColor: "transparent",
                          "&:before": {
                            display: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon
                              sx={{ 
                                color: expanded === id ? "#3a62f2" : "rgba(255,255,255,0.7)",
                                transition: "transform 0.3s ease",
                                transform: expanded === id ? "rotate(180deg)" : "rotate(0deg)",
                              }}
                            />
                          }
                          sx={{
                            "& .MuiAccordionSummary-content": {
                              display: "flex",
                              alignItems: "center",
                            },
                            p: 2.5,
                          }}
                        >
                          <QuestionAnswerOutlinedIcon
                            sx={{
                              mr: 2,
                              color: expanded === id ? "#2794d2" : "rgba(255,255,255,0.6)",
                              fontSize: "1.25rem",
                            }}
                          />
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            sx={{
                              color: expanded === id ? "#fff" : "rgba(255,255,255,0.9)",
                              fontSize: { xs: "1rem", md: "1.125rem" },
                              lineHeight: 1.4,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {question}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ p: 3, pt: 0, pb: 4 }}>
                          <Divider sx={{ 
                            mb: 3, 
                            backgroundColor: "rgba(255,255,255,0.1)",
                            opacity: 0.6
                          }} />
                          <Box
                            sx={{
                              borderLeft: "3px solid #2794d2",
                              pl: 3,
                              ml: { xs: 0, sm: 6 },
                              position: "relative",
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: -3,
                                width: 3,
                                height: "100%",
                                background: "#2794d2",
                                borderRadius: "3px"
                              }
                            }}
                          >
                            <Typography
                              component="div"
                              sx={{
                                color: "rgba(255,255,255,0.8)",
                                lineHeight: 1.8,
                                fontSize: "1rem",
                                "& ul": {
                                  pl: 2,
                                  "& li": {
                                    mb: 1.5,
                                  },
                                },
                                "& strong": {
                                  color: "#fff",
                                  fontWeight: 600,
                                },
                              }}
                              dangerouslySetInnerHTML={{ __html: answer }}
                            />
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Fade>
        </Container>
      </Box>

      <CallToAction />
      <Contact />
      <QuickLinks />
      <Footer />
    </Box>
  );
};

export default FAQ;