const selectOptions = [
	'Application Logicielle',
	'Application Mobile',
	'Application Web',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				Tous les projets
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" value={option} key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
