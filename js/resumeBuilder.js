$(document).click(function(loc) {
 	var x = loc.pageX;
 	var y = loc.pageY;

 	logClicks(x,y)
});

/**
This is empty on purpose! Your code to build the resume will go here.
 */

/**
Navigation Start
 */
jQuery(function(menu){
    	$('#menu-btn').click(function(){
    		$ ('.responsive-menu').slideToggle();
    	})

  	})
 /*
Navigation Ends
 */

/** Page scrolling feature. Please note I used this: 'https://css-tricks.com/snippets/jquery/smooth-scrolling'  */

jQuery(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

/** Page scrolling feature ENDS  */

var bio = {
	'name': 'Paul Constable',
	'role': 'Front-end Web Developer',
	'contacts':  {
		'mobile': '07545305582',
		'email': 'paulgconstable@btinternet.com',
		'github': 'PaulGConstable',
		'twitter': '@PaulGConstable',
		'location': 'Crayford',
		'blog': '#'
	},
	'welcomeMessage': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque diam eu pulvinar blandit.',
	'skills': [
		'Social Media', 'Content Strategy', 'HTML', 'Digital Media', 'CMS'
	],
	'bioPic': 'images/paul-c.jpg',

	'display': function() {
		/** Name/role replace technique  */
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		/** Name/role - append/prepend technique  */
		$('#header').prepend(formattedName, formattedRole);
		/** Contact info replace technique  */
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedLinkedIn = HTMLlinkedin.replace('%data%', bio.contacts.linkedin);
		/** Contact info - append/prepend technique  */
		$('#footerContacts').append(formattedTwitter, formattedGithub, formattedLinkedIn);
		$('#footerContacts1').append(formattedMobile, formattedEmail);
		/** Mugshot/bio desc replace technique  */
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		/** Mugshot/bio desc - append/prepend technique  */
		$('#header').append(formattedBioPic, formattedWelcomeMsg);
		/** Skills at a glance - If statement  */
		$('#header').append(HTMLskillsStart);
		for (var i=0; i < bio.skills.length; i++) {
			if (i in bio.skills) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
			}
		}
	}
};

var education = {
	'schools': [
		{
			'name': 'Wilmington Grammar School For Boys',
			'city': 'Wilmington, Dartford, UK',
			'qualifications': [
				'11 A* - Bs at GCSE', ' A - Media Studies, B - Geography, C - English Literature at A Levels'
				],
			'dates': '2001 - 2008',
			'url': 'http://www.wgsb.org.uk/'
		},
		{
			'name': 'Ravensbourne',
			'city': 'Greenwich, London, UK',
			'qualifications': [
				'NVQ Level 3 Diploma in Creative and Digital Media Competence', 'NVQ Level 3 certificate for Creative iMedia'
				],
			'dates': '2011',
			'url': 'http://www.ravensbourne.ac.uk/'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-end Nanodegree',
			'school': 'Udacity',
			'dates': '2015',
			'url': 'http://www.udacity.com'
		}
	],
	/** Function to display education */
	'display': function () {
		var len = education.schools.length;
		for (var school = 0; len > school; school++) {
			$('#education').append(HTMLschoolStart);

			var formattedURL = HTMLschoolURL.replace('%data%', education.schools[school].url);
			var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedAName = formattedURL + formattedName;
			$('.education-entry:last').append(formattedAName);
			var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			$ ('.education-entry:last').append(formattedDates);
			var formattedCity = HTMLschoolLocation.replace('%data%', education.schools[school].city);
			$ ('.education-entry:last').append(formattedCity);
			for(var qualification in education.schools[school].qualifications){
				var formattedQualification = HTMLschoolMajor.replace('%data%', education.schools[school].qualifications[qualification]);
				$('.education-entry:last').append(formattedQualification);
			}
		};

		if (education['onlineCourses'].length > 0) {
        $('#education').append(HTMLonlineCourses);
			for (var course in education.onlineCourses) {
				$('#education').append(HTMLschoolStart);
				var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
				var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
				var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
				var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
				var formattedOnlineCourse = formattedURL + formattedTitle + formattedSchool + formattedDates;
				$('.education-entry:last').append(formattedOnlineCourse);
			}
		}
	}
};

var work = {
	'jobs': [
		{
			'employer':'Channel 4 Televison',
			'title': 'Assistant Online Producer',
			'location': 'London, UK',
			'dates': 'December 2014 - Present',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque diam eu pulvinar blandit.'
		},
		{
			'employer':'Channel 4 Televison',
			'title': 'Online Production Coordinator',
			'location': 'London, UK',
			'dates': 'October 2012 - December 2014',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque diam eu pulvinar blandit.'
		},
		{
			'employer':'Channel 4 Televison',
			'title': 'Paralympics Online Assistant',
			'location': 'London, UK',
			'dates': 'March 2011 - October 2012',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque diam eu pulvinar blandit.'
		},
		{
			'employer':'John Lewis PLC',
			'title': 'PR & Marketing Assistant',
			'location': 'Greenhithe, Kent, UK',
			'dates': 'June 2010 - March 2011',
			'description': 'Liaised with local press, external companies and internal members to promote marketing activities.'
		},
		{
			'employer':'John Lewis PLC',
			'title': 'Chronicle Assistant',
			'location': 'Greenhithe, Kent, UK',
			'dates': 'October 2009 - March 2011',
			'description': 'Produced content and designed the layout for a weekly, multi award-winning staff magazine.'
		}
	],

	'display': function () {
		var len = work.jobs.length;
		for (var job = 0; len > job; job++) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$ ('.work-entry:last').append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			$ ('.work-entry:last').append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$ ('.work-entry:last').append(formattedDescription);
		}
	}
};

var projects = {
	'projects': [
		{
			'title': 'Sample Project 1',
			'dates': '2014',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque diam eu pulvinar blandit.',
			'images': ['images/197x148.gif']
		},
		{
			'title': 'Sample Project 2',
			'dates': '2013',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque diam eu pulvinar blandit.',
			'images': ['images/197x148.gif']
		}
	],

	'display': function () {
		var len = projects.projects.length;
		for (var project = 0; len > project; project++) {
			$('#projects').append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			$ ('.project-entry:last').append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			$ ('.project-entry:last').append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			$ ('.project-entry:last').append(formattedDescription);
			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
					$ ('.project-entry:last').append(formattedImage);
					console.log(image);
					console.log(projects.projects[project].images[image]);
				}
			}
		}
	}

};


function inName(name) {
    name = bio.name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +' '+ name[1];
};

/** Build the resume  */
bio.display();
work.display();
projects.display();
education.display();

/** Here's a map!  */

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);


