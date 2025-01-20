import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div>
      <p className="text-3xl sm:text-5xl mb-3 mt-20 font-bold text-primary text-center">
        {title}
      </p>
    </div>
  );
};

export default PageTitle;
