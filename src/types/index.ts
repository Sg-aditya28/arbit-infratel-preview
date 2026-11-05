export interface UnitItem {
  id: string;
  unitNumber: string;
  floor: 'Ground Floor' | 'First Floor' | 'Typical Floor';
  areaSqFt: number;
  type: string;
  facing: string;
  status: 'Available' | 'Booked' | 'Reserved';
  priceEstimate?: string;
  features: string[];
}

export interface EPCCapability {
  id: string;
  title: string;
  category: 'civil' | 'telecom' | 'turnkey';
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  machinery: string[];
  keyClients: string[];
  specs: { label: string; value: string }[];
}

export interface StatutoryDoc {
  id: string;
  title: string;
  identifier: string;
  issuingAuthority: string;
  dateOfIssue: string;
  status: 'Active & Verified' | 'Permanent' | 'Annual Compliant';
  fileSize: string;
  docCode: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  unitType: string;
  preferredDate?: string;
  projectOrInterest: string;
  message?: string;
}

