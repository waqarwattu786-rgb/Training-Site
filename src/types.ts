export type ScreenTab = 'home' | 'courses' | 'placements' | 'campuses';

export interface CourseModule {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'web' | 'security' | 'design' | 'marketing';
  categoryLabel: string;
  track: 'bootcamp' | 'fast';
  trackLabel: string;
  duration: string;
  badge?: string;
  placementRate?: string;
  targetSalary: string;
  mode: string;
  campuses: string;
  startDate: string;
  icon: string;
  accentColor: string;
  skills: string[];
  modules: CourseModule[];
  fee: {
    total: number;
    monthly: number;
    currency: string;
  };
  seatsStatus: 'open' | 'limited' | 'closing_soon';
}

export interface Campus {
  id: string;
  name: string;
  tag?: string;
  address: string;
  timings: string;
  phone: string;
  cleanPhone: string;
  gmapsUrl: string;
  isOpen: boolean;
  amenities: { icon: string; label: string }[];
  highlight?: boolean;
}

export interface AlumniPlacement {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  jump: string;
  photoUrl: string;
  verified: boolean;
}

export interface PartnerOrg {
  name: string;
  type: string;
}
