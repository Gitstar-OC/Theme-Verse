// Components/AllProjectsSection.js

import { projects } from '../Constants/index';

const AllProjectsSection = () => {
  const renderProject = (project, index) => {
    const isEven = index % 2 === 1;
    return (
      <div
        key={project.name}
        className={`projectCard flex ${isEven ? 'flex-row-reverse' : ''} items-center space-x-6 my-6`}
      >
        <div className='projectIframeContainer'>
          <iframe
            src={project.url}
            title={project.name}
            className='projectIframe no-scrollbar'
          />
        </div>
        <div className='projectDetails'>
          <h3 className='text-xl font-bold font-cF dark:text-white'>{project.name}</h3>
          <p className='text-md'>{project.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='theme-bg flex flex-col items-center justify-start space-y-6 mb-20' id='section'>
      <div className='space-y-10'>
        {projects.slice(0, 8).map((project, index) => renderProject(project, index))}
      </div>
    </div>
  );
};

export default AllProjectsSection;
