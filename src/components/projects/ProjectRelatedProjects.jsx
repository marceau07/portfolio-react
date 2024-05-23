// Projets liés

import { useContext, useEffect, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [projectName, setProjectName] = useState('');

	useEffect(() => {
		const url = new URL(window.location.href);
		const pathnameParts = url.pathname.split('/');
		const projectNameFromUrl = pathnameParts[pathnameParts.length - 1];
		setProjectName(projectNameFromUrl);
	}, []);

	if (projectName && singleProjectData.hasOwnProperty(projectName) && singleProjectData[projectName].hasOwnProperty("RelatedProject")) {
		return (
			<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
					{singleProjectData[projectName].RelatedProject.title}
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
					{singleProjectData[projectName].RelatedProject.Projects.map((project) => {
						return (
							<img
								src={project.img}
								className="rounded-xl cursor-pointer"
								alt={project.title}
								key={project.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
};

export default ProjectRelatedProjects;
