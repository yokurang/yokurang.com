export interface TCourse {
  course: string;
  institution: string;
}

const courses: TCourse[] = [
  {
    course: 'Linear Algebra',
    institution: 'Yale-NUS College',
  },
  {
    course: 'Probability',
    institution: 'Yale-NUS College',
  },
  {
    course: 'POSIX Threads and Programming',
    institution: 'Yale-NUS College',
  },
  {
    course: 'Parallel, Concurrent, and Distributed Programming',
    institution: 'Yale-NUS College',
  },
  {
    course: 'Functional Programming and Proving',
    institution: 'Yale-NUS College',
  },
  {
    course: 'Programming for Data Science',
    institution: 'Yale-NUS College',
  },
  {
    course: 'Data Structures and Algorithms',
    institution: 'Yale-NUS College',
  },
  {
    course: 'Econometrics',
    institution: 'Yale-NUS College',
  }
];

export default courses;