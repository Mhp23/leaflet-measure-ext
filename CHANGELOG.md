leaflet-measure Changelog
=========================

## 3.2.1 (2022-08-05)

* Solved issue with auto-panning on Leaflet 1.8.0.

## 3.2.0 (2020-10-29)

* Improved translations
* Added option to show decimal or degree based coordinates
* Solved issue when setting custom translations


## 3.1.0 (2018-04-08)

* Adds new languages cz, hu, ro, sk, and sl

## 3.0.3 (2018-02-19)

* Fixes error caused by canvas renderer:w

## 3.0.0 (2018-02-14)

* Updated build from Grunt/Browserify to [Webpack](https://webpack.js.org/)
* Moves from jshint/jscs to [ESLint](https://eslint.org/)
* Reduced the number of external dependencies to get build down to under 40KB
* Now using better maintained [Turf.js](http://turfjs.org/) instead of [geocrunch](https://github.com/brandoncopeland/geocrunch) for distance and area calculations.
* Updates styles to better match the styles applied to `.leaflet-bar`. Previous styles were based on the Leaflet layer control.