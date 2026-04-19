import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          app_name: 'DhanvantariMaharajHospital',
          find_doctor: 'Find a Doctor',
          book_appointment: 'Book Appointment',
          emergency: 'Emergency Services',
          departments: 'Medical Departments',
          labs: 'Labs & Diagnostics',
          pharmacy: 'E-Pharmacy',
          ai_checker: 'AI Symptom Checker',
          footer_desc: 'Pioneering the future of digital healthcare in India. 25+ years of excellence in multi-specialty patient care.',
          emergency_call: 'Call Emergency',
        }
      },
      hi: {
        translation: {
          app_name: 'धन्वंतरिमहाराज अस्पताल',
          find_doctor: 'डॉक्टर खोजें',
          book_appointment: 'अपॉइंटमेंट बुक करें',
          emergency: 'आपातकालीन सेवाएं',
          departments: 'चिकित्सा विभाग',
          labs: 'लैब और डायग्नोस्टिक्स',
          pharmacy: 'ई-फार्मेसी',
          ai_checker: 'एआई लक्षण जांचकर्ता',
          footer_desc: 'भारत में डिजिटल स्वास्थ्य सेवा के भविष्य का नेतृत्व। बहु-विशेषता रोगी देखभाल में 25+ वर्षों की उत्कृष्टता।',
          emergency_call: 'आपातकालीन कॉल करें',
        }
      },
      bn: {
        translation: {
          app_name: 'ধন্বন্তরী মহারাজ হাসপাতাল',
          find_doctor: 'ডাক্তার খুঁজুন',
          book_appointment: 'অ্যাপয়েন্টমেন্ট বুক করুন',
          emergency: 'জরুরী পরিষেবা',
          departments: 'চিকিৎসা বিভাগ',
          labs: 'ল্যাব ও ডায়াগনস্টিক্স',
          pharmacy: 'ই-ফার্মাসি',
          ai_checker: 'এআই উপসর্গ পরীক্ষক',
          footer_desc: 'ভারতে ডিজিটাল স্বাস্থ্যসেবার ভবিষ্যতের পথিকৃৎ। মাল্টি-স্পেশালিটি রোগী যত্নে ২৫+ বছরের শ্রেষ্ঠত্ব।',
          emergency_call: 'জরুরী কল করুন',
        }
      }
    }
  });

export default i18n;
