export interface TEducation {
  degree: string;
  field: string;
  school: string;
  date: string;
  props: string[];
}

const education: TEducation[] = [
  {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    school: 'Yale-NUS College',
    date: 'May 2025',
    props: [
      'Minor in Economics',
      'CAP: 4.80/5.00',
      'Kewalram Chanrai Scholarship Recipient'
    ]
  },
];

export default education;