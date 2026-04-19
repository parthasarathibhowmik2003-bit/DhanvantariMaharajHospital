
export interface Department {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  services: string[];
  equipment: string[];
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  experience: number;
  deptId: string;
  deptName: string;
  fee: number;
  bio: string;
  awards: string[];
  image: string;
  availability: string;
}

export interface Surgery {
  id: string;
  name: string;
  description: string;
  risks: string[];
  cost: string;
  recoveryTime: string;
  category: string;
}

export interface MedicalTest {
  id: string;
  name: string;
  purpose: string;
  preparation: string;
  reportTime: string;
  category: 'Blood' | 'Imaging' | 'Advanced';
  cost: number;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  use: string;
  dosage: string;
  sideEffects: string;
  prescriptionRequired: boolean;
  price: number;
}

export const HOSPITAL_NAME = "DhanvantariMaharajHospital";

// --- 21 DEPARTMENTS ---
export const DEPARTMENTS: Department[] = [
  { id: '1', name: 'Cardiology', slug: 'cardiology', shortDesc: 'Heart & Vascular Care', description: 'Advanced cardiac care including bypass surgery, angioplasty, and heart rhythm management.', services: ['ECG', 'TMT', 'Angiography', 'Angioplasty'], equipment: ['Cath Lab', 'Holter Monitor', 'Echocardiogram'], image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Neurology', slug: 'neurology', shortDesc: 'Brain & Nervous System', description: 'Specialized care for stroke, epilepsy, migraine, and neurodegenerative disorders.', services: ['EEG', 'MRI', 'Nerve Conduction Study'], equipment: ['Advanced 3T MRI', 'CT Scan'], image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Orthopedics', slug: 'orthopedics', shortDesc: 'Bone & Joint Care', description: 'Joint replacement, spine surgery, and treatment for fractures and bone health.', services: ['Joint Replacement', 'Arthroscopy', 'Trauma Care'], equipment: ['Digital X-Ray', 'C-Arm System'], image: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Pediatrics', slug: 'pediatrics', shortDesc: 'Child Healthcare', description: 'Comprehensive medical care for infants, children, and adolescents.', services: ['Vaccination', 'NICU Care', 'Pediatric Surgery'], equipment: ['Neonatal Ventilators', 'Incubators'], image: 'https://images.unsplash.com/photo-1581594632750-717a02ac562a?auto=format&fit=crop&q=80&w=800' },
  { id: '5', name: 'Oncology', slug: 'oncology', shortDesc: 'Cancer Care Center', description: 'Integrated treatment plans including chemotherapy, radiation, and surgical oncology.', services: ['Chemotherapy', 'Radiation Therapy', 'Biopsy'], equipment: ['Linear Accelerator', 'Digital Mammography'], image: 'https://images.unsplash.com/photo-1579154235828-401982c60b3c?auto=format&fit=crop&q=80&w=800' },
  { id: '6', name: 'Gynecology', slug: 'gynecology', shortDesc: 'Womens Health', description: 'Maternity care, family planning, and treatment for gynecological disorders.', services: ['Pregnancy Care', 'IVF Treatment', 'Laparoscopy'], equipment: ['4D Ultrasound', 'Colposcope'], image: 'https://images.unsplash.com/photo-1590611357124-73682944b360?auto=format&fit=crop&q=80&w=800' },
  { id: '7', name: 'Dermatology', slug: 'dermatology', shortDesc: 'Skin & Hair Care', description: 'Treatment for skin diseases, hair loss, and aesthetic skin procedures.', services: ['Laser Therapy', 'Chemical Peels', 'Acne Treatment'], equipment: ['CO2 Laser', 'Dermatoscope'], image: 'https://images.unsplash.com/photo-1588195538326-c3b199f7f823?auto=format&fit=crop&q=80&w=800' },
  { id: '8', name: 'Psychiatry', slug: 'psychiatry', shortDesc: 'Mental Wellness', description: 'Counseling and pharmaceutical intervention for various mental health conditions.', services: ['Cognitive Therapy', 'Counseling', 'Rehabilitation'], equipment: ['TMS Technology'], image: 'https://images.unsplash.com/photo-1573497620053-ea5310f94a17?auto=format&fit=crop&q=80&w=800' },
  { id: '9', name: 'ENT', slug: 'ent', shortDesc: 'Ear, Nose & Throat', description: 'Medical and surgical management of ear, nose, and throat disorders.', services: ['Audiometry', 'Sinus Surgery', 'Cochlear Implant'], equipment: ['Operating Microscope', 'Endoscopes'], image: 'https://images.unsplash.com/photo-1583946227346-63e32a677efd?auto=format&fit=crop&q=80&w=800' },
  { id: '10', name: 'Ophthalmology', slug: 'ophthalmology', shortDesc: 'Eye & Vision Care', description: 'Advanced treatment for cataracts, glaucoma, and vision correction.', services: ['Cataract Surgery', 'LASIK', 'Retinal Care'], equipment: ['OCT Scanner', 'Laser Photocoagulator'], image: 'https://images.unsplash.com/photo-1580282121805-027581fb1849?auto=format&fit=crop&q=80&w=800' },
  { id: '11', name: 'Urology', slug: 'urology', shortDesc: 'Urinary Tract Care', description: 'Treatment for kidney stones, prostate issues, and urinary infections.', services: ['Lithotripsy', 'Prostate Surgery', 'Cystoscopy'], equipment: ['Urodynamic System'], image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800' },
  { id: '12', name: 'Nephrology', slug: 'nephrology', shortDesc: 'Kidney Health', description: 'Dialysis and management of chronic kidney disease and renal issues.', services: ['Hemodialysis', 'Peritoneal Dialysis', 'Renal Biopsy'], equipment: ['Latest Dialysis Units'], image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800' },
  { id: '13', name: 'Gastroenterology', slug: 'gastroenterology', shortDesc: 'Digestive Health', description: 'Liver, stomach, and intestinal health including endoscopy services.', services: ['Gastroscopy', 'Colonoscopy', 'Liver Fibroscan'], equipment: ['High-Def Endoscope'], image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' },
  { id: '14', name: 'Pulmonology', slug: 'pulmonology', shortDesc: 'Respiratory Care', description: 'Management of asthma, COPD, and advanced lung conditions.', services: ['PFT', 'Bronchoscopy', 'Sleep Medicine'], equipment: ['Spirometer', 'Sleep Lab'], image: 'https://images.unsplash.com/photo-1581056770661-394469f68413?auto=format&fit=crop&q=80&w=800' },
  { id: '15', name: 'Endocrinology', slug: 'endocrinology', shortDesc: 'Hormone Care', description: 'Management of diabetes, thyroid, and metabolic disorders.', services: ['Diabetes Hub', 'Thyroid Clinic', 'Obesity Care'], equipment: ['Continuous Glucose Monitor'], image: 'https://images.unsplash.com/photo-1532187875605-7fe359843668?auto=format&fit=crop&q=80&w=800' },
  { id: '16', name: 'Hematology', slug: 'hematology', shortDesc: 'Blood Disorders', description: 'Treatment for anemia, leukemia, and other blood-related issues.', services: ['Bone Marrow Biopsy', 'Transfusion'], equipment: ['Flow Cytometer'], image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800' },
  { id: '17', name: 'Radiology', slug: 'radiology', shortDesc: 'Diagnostic Imaging', description: 'Advanced imaging techniques for precise internal diagnoses.', services: ['PET-CT', 'MRI', 'Color Doppler Ultrasound'], equipment: ['128-Slice CT Scanner'], image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
  { id: '18', name: 'Rheumatology', slug: 'rheumatology', shortDesc: 'Joint & Autoimmune', description: 'Advanced care for arthritis, lupus, and autoimmune disorders.', services: ['Infusion Therapy', 'Joint Injection'], equipment: ['Polarizing Microscope'], image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800' },
  { id: '19', name: 'General Medicine', slug: 'general-medicine', shortDesc: 'Internal Medicine', description: 'Primary healthcare and management of viral, infectious, and non-communicable diseases.', services: ['Executive Wellness', 'Infectious Disease'], equipment: ['Point-of-Care Testing'], image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800' },
  { id: '20', name: 'General Surgery', slug: 'general-surgery', shortDesc: 'Surgical Solutions', description: 'Comprehensive surgical treatment for abdomen and digestive systems.', services: ['Appendectomy', 'Hernia Surgery', 'Laparoscopy'], equipment: ['Robotic Surgery Unit'], image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800' },
  { id: '21', name: 'Dental Sciences', slug: 'dentistry', shortDesc: 'Oral Health', description: 'Advanced dental services including implants, cosmetics, and orthodontics.', services: ['Root Canal', 'Implants', 'Orthodontics'], equipment: ['Digital RVG X-Ray'], image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800' },
];

export const DOCTORS: Doctor[] = (() => {
  const doctorNames = [
    'Arun Verma', 'Sneha Patel', 'Rahul Deshmukh', 'Priya Iyer', 'Vikram Singh',
    'Ananya Reddy', 'Deepak Gupta', 'Meera Nair', 'Sanjay Sharma', 'Kavita Joshi',
    'Amit Malhotra', 'Divya Kulkarni', 'Manish Pandey', 'Neha Singhal', 'Rohan Bhatia',
    'Shweta Chauhan', 'Varun Kapoor', 'Pooja Agarwal', 'Aditya Bansal', 'Ritika Soni'
  ];
  const allDocs: Doctor[] = [];
  let idIdx = 1;
  DEPARTMENTS.forEach(dept => {
    const count = 10 + Math.floor(Math.random() * 6); // 10-15 per dept
    for (let i = 0; i < count; i++) {
      const name = doctorNames[(idIdx - 1) % doctorNames.length];
      allDocs.push({
        id: `doc-${idIdx}`,
        name: `Dr. ${name}`,
        qualification: i % 2 === 0 ? 'MBBS, MD' : 'MBBS, MS, DNB',
        experience: 8 + Math.floor(Math.random() * 25),
        deptId: dept.id,
        deptName: dept.name,
        fee: 600 + Math.floor(Math.random() * 15) * 100,
        bio: `Specialist in ${dept.name} with a focus on advanced patient outcomes and innovative treatments.`,
        awards: ['Star Clinician', 'Excellence in Care'],
        image: `https://i.pravatar.cc/150?u=doc-${idIdx}`,
        availability: 'Mon-Sat, 10 AM - 5 PM'
      });
      idIdx++;
    }
  });
  return allDocs;
})();

export const LAB_TESTS: MedicalTest[] = (() => {
  const baseTests: MedicalTest[] = [
    { id: 't1', name: 'CBC (Complete Blood Count)', purpose: 'Screening for anemia and infection.', preparation: 'No preparation.', reportTime: '6 Hours', category: 'Blood', cost: 450 },
    { id: 't2', name: 'Lipid Profile', purpose: 'Cholesterol & Heart Health.', preparation: 'Fasting 12 hours.', reportTime: '8 Hours', category: 'Blood', cost: 1200 },
    { id: 't3', name: 'HbA1c', purpose: 'Average Blood Sugar (3 months).', preparation: 'N/A', reportTime: '12 Hours', category: 'Blood', cost: 650 },
    { id: 't4', name: 'Liver Function Test (LFT)', purpose: 'Liver health enzymes.', preparation: 'N/A', reportTime: '12 Hours', category: 'Blood', cost: 900 },
    { id: 't5', name: 'Kidney Function Test (KFT)', purpose: 'Renal health panel.', preparation: 'N/A', reportTime: '12 Hours', category: 'Blood', cost: 950 },
  ];
  const extras = ['Thyroid Panel', 'Vitamin D', 'Vitamin B12', 'Cardiac Risk', 'Allergy Screen', 'MRI Brain', 'CT Chest', 'USG Abdomen', 'ECG', 'PET Scan'];
  for (let i = 0; i < 45; i++) {
    const name = extras[i % extras.length] + ' ' + (i + 6);
    baseTests.push({
      id: `tx-${i}`,
      name,
      purpose: `Diagnostic evaluation for ${name}.`,
      preparation: 'Standard protocols.',
      reportTime: '24-48 Hours',
      category: i % 2 === 0 ? 'Blood' : 'Imaging',
      cost: 500 + Math.floor(Math.random() * 50) * 100
    });
  }
  return baseTests;
})();

export const PHARMACY_MEDS: Medicine[] = (() => {
  const medicineNames = [
    'Metformin', 'Glimepiride', 'Vildagliptin', 'Insulin Glargine', 'Sitagliptin',
    'Telmisartan', 'Amlodipine', 'Atenolol', 'Ramipril', 'Clopidogrel',
    'Atorvastatin', 'Rosuvastatin', 'Fenofibrate', 'Ezetimibe', 'Aspirin'
  ];
  const allMeds: Medicine[] = [];
  for (let i = 0; i < 110; i++) {
    const name = medicineNames[i % medicineNames.length] + ' ' + (i + 1) * 10 + 'mg';
    allMeds.push({
      id: `med-${i + 1}`,
      name,
      category: ['Cardiac', 'Diabetic', 'Antibiotic', 'Pain Relief', 'Gastro'][i % 5],
      use: `Effective for ${name} therapeutic requirements.`,
      dosage: 'As directed by the physician.',
      sideEffects: 'May cause mild dizziness.',
      prescriptionRequired: i % 3 !== 0,
      price: 50 + Math.floor(Math.random() * 50) * 10
    });
  }
  return allMeds;
})();

export const SURGERIES: Surgery[] = [
  { id: 's1', name: 'Coronary Artery Bypass Grafting (CABG)', description: 'Advanced surgical procedure to improve blood flow to the heart.', risks: ['Bleeding', 'Heart Attack', 'Stroke'], cost: '₹2,50,000 - ₹5,00,000', recoveryTime: '6-12 Weeks', category: 'Cardiology' },
  { id: 's2', name: 'Total Knee Replacement', description: 'Replacing a damaged knee joint with an artificial one.', risks: ['Infection', 'Blood Clots'], cost: '₹1,50,000 - ₹3,00,000', recoveryTime: '3-6 Months', category: 'Orthopedics' },
  { id: 's3', name: 'Laparoscopic Cholecystectomy', description: 'Minimally invasive removal of the gallbladder.', risks: ['Bile Leak', 'Infection'], cost: '₹60,000 - ₹1,20,000', recoveryTime: '1-2 Weeks', category: 'General Surgery' },
  { id: 's4', name: 'Cataract Surgery with Lens Implant', description: 'Removing the clouded lens and replacing it with an artificial IOL.', risks: ['Inflammation', 'Retinal Detachment'], cost: '₹30,000 - ₹90,000', recoveryTime: '1 Week', category: 'Ophthalmology' },
  { id: 's5', name: 'Brain Tumor Craniotomy', description: 'Surgical removal of a tumor from the brain via opening the skull.', risks: ['Neurological Deficit', 'Seizures'], cost: '₹3,00,000 - ₹8,00,000', recoveryTime: '2-4 Months', category: 'Neurology' },
  { id: 's6', name: 'Hip Replacement Surgery', description: 'Replacement of the hip joint with a prosthetic implant.', risks: ['Dislocation', 'Fracture'], cost: '₹2,00,000 - ₹4,00,000', recoveryTime: '3-4 Months', category: 'Orthopedics' },
  { id: 's7', name: 'Kidney Transplant', description: 'Surgical procedure to place a healthy kidney from a donor into a patient.', risks: ['Rejection', 'Infection'], cost: '₹5,00,000 - ₹10,00,000', recoveryTime: '6-12 Months', category: 'Nephrology' },
  { id: 's8', name: 'Spinal Fusion', description: 'Surgery to join two or more vertebrae in the spine permanently.', risks: ['Nerve Damage', 'Hardware Failure'], cost: '₹1,50,000 - ₹4,50,000', recoveryTime: '3-6 Months', category: 'Orthopedics' },
  { id: 's9', name: 'Bariatric Gastric Bypass', description: 'Weight loss surgery that involves creating a small stomach pouch.', risks: ['Nutritional Deficiencies', 'Dumping Syndrome'], cost: '₹2,50,000 - ₹5,00,000', recoveryTime: '4-6 Weeks', category: 'Gastroenterology' },
  { id: 's10', name: 'Mastectomy', description: 'Surgical removal of one or both breasts, usually to treat breast cancer.', risks: ['Lymphedema', 'Seroma'], cost: '₹1,00,000 - ₹2,50,000', recoveryTime: '4-6 Weeks', category: 'Oncology' },
  { id: 's11', name: 'Appendectomy', description: 'Emergency surgical removal of the appendix.', risks: ['Abcess', 'Peritonitis'], cost: '₹40,000 - ₹80,000', recoveryTime: '2-3 Weeks', category: 'General Surgery' },
  { id: 's12', name: 'Hysterectomy', description: 'Surgical removal of the uterus.', risks: ['Early Menopause', 'Bladder Injury'], cost: '₹80,000 - ₹1,80,000', recoveryTime: '6-8 Weeks', category: 'Gynecology' },
  { id: 's13', name: 'Hemorrhoidectomy', description: 'Surgical removal of severe or recurring hemorrhoids.', risks: ['Urinary Retention', 'Anal Stenosis'], cost: '₹30,000 - ₹60,000', recoveryTime: '2-3 Weeks', category: 'General Surgery' },
  { id: 's14', name: 'Cochlear Implant', description: 'Electronic medical device that replaces the function of the damaged inner ear.', risks: ['Meningitis', 'Facial Nerve Injury'], cost: '₹5,00,000 - ₹12,00,000', recoveryTime: '4-6 Weeks', category: 'ENT' },
  { id: 's15', name: 'Rhinoplasty', description: 'Surgery that changes the shape of the nose.', risks: ['Difficulty Breathing', 'Numbness'], cost: '₹70,000 - ₹2,00,000', recoveryTime: '2-4 Weeks', category: 'General Surgery' },
  { id: 's16', name: 'Angioplasty & Stenting', description: 'Widening narrowed or obstructed arteries with a stent.', risks: ['Restenosis', 'Blood Clots'], cost: '₹1,20,000 - ₹2,50,000', recoveryTime: '1-2 Weeks', category: 'Cardiology' },
  { id: 's17', name: 'Arthroscopic Rotator Cuff Repair', description: 'Fixing a torn tendon in the shoulder using an arthroscope.', risks: ['Stiffness', 'Re-tear'], cost: '₹80,000 - ₹1,50,000', recoveryTime: '4-6 Months', category: 'Orthopedics' },
  { id: 's18', name: 'Inguinal Hernia Repair', description: 'Repairing a bulge in the groin area.', risks: ['Chronic Pain', 'Infection'], cost: '₹40,000 - ₹90,000', recoveryTime: '2-4 Weeks', category: 'General Surgery' },
  { id: 's19', name: 'Thyroidectomy', description: 'Removal of all or part of the thyroid gland.', risks: ['Vocal Cord Paralysis', 'Hypocalcemia'], cost: '₹60,000 - ₹1,20,000', recoveryTime: '2-3 Weeks', category: 'General Surgery' },
  { id: 's20', name: 'Tonsillectomy', description: 'Surgical removal of the tonsils.', risks: ['Post-operative Bleeding'], cost: '₹20,000 - ₹40,000', recoveryTime: '1-2 Weeks', category: 'ENT' },
  { id: 's21', name: 'C-Section Delivery', description: 'Surgical delivery of a baby through incisions in the abdomen and uterus.', risks: ['Infection', 'Blood Loss'], cost: '₹70,000 - ₹1,50,000', recoveryTime: '6-8 Weeks', category: 'Gynecology' },
  { id: 's22', name: 'Colon Resection', description: 'Surgery to remove part of the large intestine.', risks: ['Anastomotic Leak', 'Obstruction'], cost: '₹1,50,000 - ₹3,50,000', recoveryTime: '4-8 Weeks', category: 'General Surgery' },
  { id: 's23', name: 'Vitreoretinal Surgery', description: 'Specialized eye surgery to treat disorders of the retina and vitreous.', risks: ['Glaucoma', 'Blindness'], cost: '₹80,000 - ₹2,00,000', recoveryTime: '2-4 Weeks', category: 'Ophthalmology' },
  { id: 's24', name: 'Cystoscopy & TURBT', description: 'Looking into the bladder and removing abnormal tissue.', risks: ['Hematuria', 'UTI'], cost: '₹40,000 - ₹1,00,000', recoveryTime: '1-2 Weeks', category: 'Urology' },
  { id: 's25', name: 'Mastoidectomy', description: 'Surgery to remove disease from the air cells in the hollow bone behind the ear.', risks: ['Hearing Loss', 'Dizziness'], cost: '₹50,000 - ₹1,20,000', recoveryTime: '2-4 Weeks', category: 'ENT' },
  { id: 's26', name: 'Robotic Radical Prostatectomy', description: 'Robotic-assisted removal of the prostate gland.', risks: ['Incontinence', 'Erectile Dysfunction'], cost: '₹3,50,000 - ₹6,00,000', recoveryTime: '4-6 Weeks', category: 'Urology' },
  { id: 's27', name: 'Liver Lobectomy', description: 'Surgical removal of a lobe of the liver.', risks: ['Liver Failure', 'Bleeding'], cost: '₹3,00,000 - ₹6,00,000', recoveryTime: '6-12 Weeks', category: 'Gastroenterology' },
  { id: 's28', name: 'Cranioplasty', description: 'Surgical repair of a bone defect in the skull.', risks: ['Infection', 'Implant Misplacement'], cost: '₹1,50,000 - ₹3,00,000', recoveryTime: '4-8 Weeks', category: 'Neurology' },
  { id: 's29', name: 'Sentinel Lymph Node Biopsy', description: 'Procedure to see if cancer has spread into the lymphatic system.', risks: ['Lymphedema'], cost: '₹50,000 - ₹1,20,000', recoveryTime: '1-2 Weeks', category: 'Oncology' },
  { id: 's30', name: 'Heart Valve Repair/Replacement', description: 'Fixing or replacing a diseased heart valve.', risks: ['Arrhythmia', 'Stroke'], cost: '₹3,50,000 - ₹7,00,000', recoveryTime: '8-12 Weeks', category: 'Cardiology' },
  { id: 's31', name: 'Pediatric Cardiac Surgery', description: 'Surgery on the heart or great vessels of a child.', risks: ['Developmental Delays', 'Infection'], cost: '₹3,00,000 - ₹6,00,000', recoveryTime: '6-12 Weeks', category: 'Pediatrics' },
  { id: 's32', name: 'Skin Grafting', description: 'Surgical procedure that involves moving healthy skin to a site in need.', risks: ['Graft Failure', 'Scarring'], cost: '₹40,000 - ₹1,50,000', recoveryTime: '2-4 Weeks', category: 'Dermatology' }
];
