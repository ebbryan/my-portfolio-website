export interface PersonalDetails {
  name: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  socials: Record<string, string>;
  skills: string[];
  experience: {
    currentRole: string;
    years: number;
    availableFor: string;
  };
  resume: {
    url: string;
    label: string;
  };
  profileImage: string;
  languages: string[];
  certifications: string[];
  basicInfo: Record<string, string | number>;
  contactInfo: Record<string, string | number>;
}
