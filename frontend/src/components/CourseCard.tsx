import React from 'react';
// If you're using a specific UI library, ensure to import Box from that library.

type CourseType = {
  code: string;
  name: string;
};

interface CourseCardProps {
  course: CourseType;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className='w-52 h-48 rounded-lg overflow-hidden shadow-sm shadow-slate-500 hover:cursor-pointer'>
      <div className='h-2/6 hover:h-1/2 transition-all ease-in-out bg-primary'></div>
      <div className='p-2'>
        <p className='text-2xl' style={{ fontFamily: 'MetropolisSemiBold' }}>
          {course.code} {/* Access code from the course object */}
        </p>
        <p className='text-xs' style={{ fontFamily: 'MetropolisRegular' }}>
          {course.name} {/* Access name from the course object */}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
