// Add nodes into the blog
// const mainArticle = document.querySelector(".main__article");

// for (let i = 0; i < 0; i++) {
//   const mainBlog = document.querySelector(".content__slides");
//   let child = mainArticle.cloneNode(true);
//   mainBlog.appendChild(child);
// }

//======= FullPageJS=============

new fullpage('#fullpage', {
	autoScrolling: false,
	fitToSection: false,
	scrollHorizontally: true,

	navigation: true,
	navigationPosition: 'right',

	fitToSectionDelay: 200,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	easingcss3: 'ease-out',
	css3: true,
	verticalCentered: false,
	
	// fixedElements: '#nav',

	anchors: ['inicio', 'blog', 'contacto'],
	credits: { enabled: false, label: 'Made with Love for Em40a', position: 'right'},
});

