// Placeholder data — replace with a real fetch from your Node API once
// the /api/classes and /api/students endpoints exist.
// Shape kept deliberately close to what that response will probably look like.

export const mockClasses = [
  { id: 'grade7-blue', name: 'Grade 7 Blue' },
  { id: 'grade7-green', name: 'Grade 7 Green' },
  { id: 'grade8-blue', name: 'Grade 8 Blue' },
];

export const mockSubjects = [
  { id: 'math', name: 'Mathematics' },
  { id: 'english', name: 'English' },
  { id: 'biology', name: 'Biology' },
];

export const mockTerms = [
  { id: 'term1', name: 'Term 1' },
  { id: 'term2', name: 'Term 2' },
  { id: 'term3', name: 'Term 3' },
];

// Keyed by classId so switching classes swaps the roster.
export const mockStudentsByClass = {
  'grade7-blue': [
    { id: 's1', admissionNumber: '2024/0142', name: 'Amani Otieno' },
    { id: 's2', admissionNumber: '2024/0143', name: 'Brenda Wanjiru' },
    { id: 's3', admissionNumber: '2024/0144', name: 'Cynthia Achieng' },
    { id: 's4', admissionNumber: '2024/0145', name: 'Dennis Mwangi' },
    { id: 's5', admissionNumber: '2024/0146', name: 'Esther Njeri' },
  ],
  'grade7-green': [
    { id: 's6', admissionNumber: '2024/0201', name: 'Felix Kiprotich' },
    { id: 's7', admissionNumber: '2024/0202', name: 'Grace Adhiambo' },
    { id: 's8', admissionNumber: '2024/0203', name: 'Hassan Ali' },
  ],
  'grade8-blue': [
    { id: 's9', admissionNumber: '2023/0311', name: 'Irene Chebet' },
    { id: 's10', admissionNumber: '2023/0312', name: 'James Odhiambo' },
    { id: 's11', admissionNumber: '2023/0313', name: 'Kevin Mutua' },
    { id: 's12', admissionNumber: '2023/0314', name: 'Lilian Wambui' },
  ],
};