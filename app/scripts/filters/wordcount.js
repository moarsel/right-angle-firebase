'use strict';

angular.module('angnewsApp').filter('wordCount', function ($filter){
	return function (str) {

		var wordcount = str.split(' ').length;
		var readingSpeed = 200;

		var readTimeInMinutes = wordcount / readingSpeed;
		readTimeInMinutes = $filter('number')(readTimeInMinutes, 0);
		var readTime;
		if (readTimeInMinutes < 1) {
			readTime = 'quick read';
		} else {
			readTime = readTimeInMinutes + ' minute read';
		}

		return readTime;
	};
});