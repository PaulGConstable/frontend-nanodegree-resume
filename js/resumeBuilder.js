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
	},
	'welcomeMessage':'BAFTA-winning Online Assistant Producer currently commissioning engaging TV programme support (video and digital) for All 4. Additionally, a recent graduate of the Front-End Nanodegree with Udacity with expertise in developing client-side mobile responsive web applications using HTML, CSS and JavaScript. I have a strong background in JavaScript’s core concepts including object-oriented programming patterns, and developing performant applications that focus on the critical rendering path and 60 frames per second.',
	'skills': [
		'Social Media Management', 'Content Strategy', 'HTML', 'CSS', 'JavaScript'
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
		var formattedTwitter = HTMLtwitter;
		var formattedGithub = HTMLgithub;
		var formattedLinkedIn = HTMLlinkedin;
		var formattedPortfolio = HTMLPortfolio;
		/** Contact info - append/prepend technique  */
		$('#footerContacts').append(formattedTwitter, formattedGithub, formattedLinkedIn);
		$('#footerContacts1').append(formattedEmail, formattedMobile, formattedPortfolio);
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
			'description':['<ul class="job-desc"><li>Produced video that has generated over a 100,000 views online for brands such as Father Ted;</li><li>Successfully coordinated and project managed delivery of 30 programmes on to VOD on All 4 – working with production companies, commercial sponsors and internal stakeholders;</li><li>Produced, managed and curated content (text, video, images) across All 4 on brands such as Big Fat Quiz Of The Year, Virtually Famous, Hunted, Made in Cheslea  and Take Part;</li><li>Created social promotions and campaigns for priority shows that trended number 1 in the UK, which involved managing social media chats on platforms such as Periscope and Twitter, with key talent including Kevin Mchale for Virtually Famous and Sharon Rooney for My Mad Fat Diary</li><li>Coordinated the whole life cycle, including selecting a developer, to build the All 4 Games website;</li><li>Conduct the competition process and communications with winners for Online – ensuring they all run correctly and follow the compliance process. To date I have managed over 60 online competitions;</li><li>Optimised pages/sections on All 4 using HTML, CSS and Java Script;</li><li>Contribute on Channel 4’s, E4’s and other key brand social media accounts;</li><li>Social media editor for C4TakePart and manager of the process for shows looking for contributors;</li><li>Analyse Adobe Omniture reports and work with Audience Insight to inform editorial judgement;</li><li>Understanding of Channel 4’s CMS and platforms; PIPE, EDAM , TeamSite, MediaBin, Brightcove.</li></ul>'
			],
		},
		{
			'employer':'Channel 4 Televison',
			'title': 'Online Production Coordinator',
			'location': 'London, UK',
			'dates': 'October 2012 - December 2014',
			'description': '<ul class="job-desc"><li>Produced, managed and curated content across C4.com and multiple social platforms;</li><li>Helped deliver the process for online video content across over 200 priority programmes;</li><li>Administered the production schedule and priorities for the team, sharing with the business;</li><li>Engaged with, managed and cultivated the user community for Channel 4 Take Part on social media;</li><li>Conducted the competition process and communications with winners for Online;</li><li>Handled public announcement requests for broadcast, liaising with the Marketing and Presentation;</li><li>Implemented a system to help migrate 2,000 programme brands to a new CMS;</li><li>Analysed daily Adobe Omniture reports to enhance editorial judgement of content on All 4.</li></ul>'
		},
		{
			'employer':'Channel 4 Televison',
			'title': 'Paralympics Online Assistant',
			'location': 'London, UK',
			'dates': 'March 2011 - October 2012',
			'description': '<ul class="job-desc"><li>Produced digital content for London 2012, which won a BAFTA for Digital Creativity;</li><li>Social editor for C4Paralympics during the live London 2012 games. Over 130,000 fans at its peak;</li><li>Administered stand-alone projects such as putting subtitles onto over 400 video assets;</li><li>Social Media Editor of C4Athletics in the build-up to the World Athletics Championships 2011;</li><li>Analysed social media performance and managed a digital filing system to back-up over 3,000 assets;</li><li>Researched and shared content to strengthen the live broadcast of the Paralympics. Example here;</li></ul>'
		},
		{
			'employer':'John Lewis PLC',
			'title': 'Assistant Editor & PR & Marketing Assistant',
			'location': 'Greenhithe, Kent, UK',
			'dates': 'October 2009 - March 2011',
			'description': '<ul class="job-desc"><li>Produced content and designed the layout for a weekly, multi award-winning staff magazine;</li><li>Liaised with local press, external companies and internal staff to promote marketing activities. Also organised and managed live chef demonstrations with Waitrose.</li></ul>'
		},
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


