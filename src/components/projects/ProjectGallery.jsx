/* Charge les images du projet selectionné */
import { useContext, useEffect, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectGallery = () => {
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
			<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 mt-12">
				<img
					src={singleProjectData[projectName].ProjectHeader.logo}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none border"
					alt={singleProjectData[projectName].ProjectHeader.alt}
					key={singleProjectData[projectName].ProjectHeader.id}
					style={{ width: 200, height: 200 }}
				/>

				{singleProjectData[projectName].ProjectImages.length > 0 &&
					<PhotoProvider maskOpacity={0.5} photoClosable={true}>
						{singleProjectData[projectName].ProjectImages.map((project, index) => {
							return (
								<div className="flex mb-10 sm:mb-0" key={project.id}>
									<PhotoView src={project.img}>
										<img
											src={project.img}
											className="rounded-xl cursor-pointer shadow-lg sm:shadow-none border"
											alt={project.title}
											key={project.id}
											style={{display: index === 0 ? 'block' : 'none'}}
										/>
									</PhotoView>
								</div>
							);
						})}
					</PhotoProvider>
				}
			</div>
		);
	}
};

export default ProjectGallery;
