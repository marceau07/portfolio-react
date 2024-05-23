import { useContext, useEffect, useState } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [projectName, setProjectName] = useState('');

	useEffect(() => {
		const url = new URL(window.location.href);
		const pathnameParts = url.pathname.split('/');
		const projectNameFromUrl = pathnameParts[pathnameParts.length - 1];
		setProjectName(projectNameFromUrl);
	}, []);

	if (projectName && singleProjectData.hasOwnProperty(projectName)) {
		return (
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{singleProjectData[projectName].ProjectHeader.title}
				</p>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{singleProjectData[projectName].ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{singleProjectData[projectName].ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>
		);
	} else {
		return (<div><p className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">Aucun projet associé à cette URL !</p></div>);
	}
};

export default ProjectSingleHeader;
