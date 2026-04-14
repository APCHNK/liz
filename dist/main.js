/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss"
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/scss/main.scss?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/burger */ \"./src/js/burger.js\");\n/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/player */ \"./src/js/player.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n/* harmony import */ var _js_iframe_lazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/iframe-lazy */ \"./src/js/iframe-lazy.js\");\n/* harmony import */ var _js_booking_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/booking-video */ \"./src/js/booking-video.js\");\n/* harmony import */ var _js_text_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/text-slider */ \"./src/js/text-slider.js\");\n/* harmony import */ var _js_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/faq */ \"./src/js/faq.js\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_js_burger__WEBPACK_IMPORTED_MODULE_1__.initBurger)();\n  (0,_js_player__WEBPACK_IMPORTED_MODULE_2__.initPlayer)();\n  (0,_js_modal__WEBPACK_IMPORTED_MODULE_3__.initModal)();\n  (0,_js_iframe_lazy__WEBPACK_IMPORTED_MODULE_4__.initLazyIframes)();\n  (0,_js_booking_video__WEBPACK_IMPORTED_MODULE_5__.initBookingVideo)();\n  (0,_js_text_slider__WEBPACK_IMPORTED_MODULE_6__.initTextSliders)();\n  window.initTextSliders = _js_text_slider__WEBPACK_IMPORTED_MODULE_6__.initTextSliders;\n  (0,_js_faq__WEBPACK_IMPORTED_MODULE_7__.initFaq)();\n\n  // Reveal on scroll\n  document.querySelectorAll('.page .img-wrap').forEach(el => {\n    new IntersectionObserver(([e]) => {\n      if (e.isIntersecting) { el.classList.add('is-visible'); }\n    }, { threshold: 0.1 }).observe(el);\n  });\n});\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/index.js?\n}");

/***/ },

/***/ "./src/js/booking-video.js"
/*!*********************************!*\
  !*** ./src/js/booking-video.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initBookingVideo: () => (/* binding */ initBookingVideo)\n/* harmony export */ });\nfunction initBookingVideo() {\r\n  const section = document.querySelector('.booking-hero');\r\n  if (!section) return;\r\n\r\n  const video = section.querySelector('.booking-hero__video');\r\n  if (!video) return;\r\n\r\n  let progress = 0;\r\n  let targetProgress = 0;\r\n\r\n  function update() {\r\n    const videoRect = video.getBoundingClientRect();\r\n    const startPoint = window.innerHeight * 0.9;\r\n    const endPoint = 100;\r\n    const currentTop = videoRect.top;\r\n\r\n    if (currentTop >= startPoint) {\r\n      targetProgress = 0;\r\n    } else if (currentTop <= endPoint) {\r\n      targetProgress = 1;\r\n    } else {\r\n      targetProgress = 1 - (currentTop - endPoint) / (startPoint - endPoint);\r\n    }\r\n\r\n    progress += (targetProgress - progress) * 0.15;\r\n\r\n    const width = 70 + (progress * 45);\r\n    const borderRadius = 40 - (progress * 30);\r\n\r\n    video.style.width = `${width}%`;\r\n    video.style.borderRadius = `${borderRadius}px`;\r\n\r\n    requestAnimationFrame(update);\r\n  }\r\n\r\n  requestAnimationFrame(update);\r\n}\r\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/booking-video.js?\n}");

/***/ },

/***/ "./src/js/burger.js"
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initBurger: () => (/* binding */ initBurger)\n/* harmony export */ });\nfunction initBurger() {\n  const burger = document.querySelector('.toggle-menu');\n  if (!burger) return;\n\n  burger.addEventListener('click', () => {\n    const header = document.querySelector('header');\n    const menu = document.querySelector('.menu');\n    const isOpen = menu.classList.contains('open');\n\n    if (isOpen) {\n      menu.classList.remove('open');\n      header.classList.remove('open-menu');\n      document.body.classList.remove('menu-open');\n    } else {\n      menu.classList.add('open');\n      header.classList.add('open-menu');\n      document.body.classList.add('menu-open');\n    }\n  });\n\n  // Submenu toggle on mobile\n  const submenuIndicators = document.querySelectorAll('.menu .has-submenu > a .submenu-indicator');\n  submenuIndicators.forEach((indicator) => {\n    indicator.addEventListener('click', (e) => {\n      if (window.innerWidth < 1024) {\n        e.preventDefault();\n        e.stopPropagation();\n        const li = e.currentTarget.closest('li');\n        if (li) {\n          li.classList.toggle('expanded');\n        }\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/burger.js?\n}");

/***/ },

/***/ "./src/js/faq.js"
/*!***********************!*\
  !*** ./src/js/faq.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFaq: () => (/* binding */ initFaq)\n/* harmony export */ });\nfunction initFaq() {\n  const faqItems = document.querySelectorAll('.faq__item');\n  if (!faqItems.length) return;\n\n  // Open first item by default\n  const firstItem = faqItems[0];\n  const firstAnswer = firstItem.querySelector('.faq__answer');\n  firstItem.classList.add('active');\n  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';\n\n  faqItems.forEach(item => {\n    const question = item.querySelector('.faq__question');\n    const answer = item.querySelector('.faq__answer');\n\n    question.addEventListener('click', () => {\n      const isActive = item.classList.contains('active');\n\n      // Close all\n      faqItems.forEach(i => {\n        const a = i.querySelector('.faq__answer');\n        i.classList.remove('active');\n        a.style.maxHeight = null;\n      });\n\n      // Open clicked if it wasn't active\n      if (!isActive) {\n        item.classList.add('active');\n        answer.style.maxHeight = answer.scrollHeight + 'px';\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/faq.js?\n}");

/***/ },

/***/ "./src/js/iframe-lazy.js"
/*!*******************************!*\
  !*** ./src/js/iframe-lazy.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLazyIframes: () => (/* binding */ initLazyIframes)\n/* harmony export */ });\nfunction initLazyIframes() {\n  const iframes = document.querySelectorAll('iframe[data-src]');\n  if (iframes.length === 0) return;\n\n  const observer = new IntersectionObserver(\n    (entries) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          const iframe = entry.target;\n          iframe.src = iframe.dataset.src;\n          observer.unobserve(iframe);\n        }\n      });\n    },\n    { rootMargin: '100px' }\n  );\n\n  iframes.forEach((iframe) => observer.observe(iframe));\n}\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/iframe-lazy.js?\n}");

/***/ },

/***/ "./src/js/modal.js"
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModal: () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const modalWrap = document.querySelector('.modal-wrap');\n  if (!modalWrap) return;\n\n  const mask = modalWrap.querySelector('.mask');\n  const closeBtn = modalWrap.querySelector('.close');\n  const form = modalWrap.querySelector('form');\n  const successMessage = modalWrap.querySelector('.success-message');\n  const formContent = modalWrap.querySelector('.form-content');\n  const modalTitle = modalWrap.querySelector('.modal-title');\n\n  function openModal() {\n    modalWrap.classList.add('active');\n    document.body.style.overflow = 'hidden';\n  }\n\n  function closeModal() {\n    modalWrap.classList.remove('active');\n    document.body.style.overflow = 'auto';\n    // Reset success state\n    if (successMessage) successMessage.style.display = 'none';\n    if (formContent) formContent.style.display = 'block';\n    if (modalTitle) modalTitle.textContent = 'Request';\n  }\n\n  // Open triggers\n  document.querySelectorAll('[data-open-modal]').forEach(btn => {\n    btn.addEventListener('click', (e) => {\n      e.preventDefault();\n      openModal();\n    });\n  });\n\n  // Close triggers\n  if (mask) mask.addEventListener('click', closeModal);\n  if (closeBtn) closeBtn.addEventListener('click', closeModal);\n\n  // Success close button\n  const successCloseBtn = modalWrap.querySelector('.success-message .btn button');\n  if (successCloseBtn) {\n    successCloseBtn.addEventListener('click', closeModal);\n  }\n\n  // Form submission\n  if (form) {\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n\n      // Validation\n      let isValid = true;\n      const fields = {\n        city: form.querySelector('[name=\"city\"]'),\n        name: form.querySelector('[name=\"person-name\"]'),\n        person: form.querySelector('[name=\"person-private\"]'),\n        email: form.querySelector('[name=\"email\"]'),\n        phone: form.querySelector('[name=\"phone\"]'),\n      };\n\n      // Clear previous errors\n      form.querySelectorAll('.error-msg').forEach(el => el.textContent = '');\n\n      if (fields.city && !fields.city.value.trim()) {\n        showError(fields.city, '*Enter your city');\n        isValid = false;\n      }\n      if (fields.name && !fields.name.value.trim()) {\n        showError(fields.name, '*Enter your name');\n        isValid = false;\n      }\n      if (fields.person && !fields.person.value.trim()) {\n        showError(fields.person, '*Enter your role');\n        isValid = false;\n      }\n      if (fields.email) {\n        if (!fields.email.value.trim()) {\n          showError(fields.email, '*Enter your email');\n          isValid = false;\n        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(fields.email.value)) {\n          showError(fields.email, '*Enter a valid email');\n          isValid = false;\n        }\n      }\n      if (fields.phone && !fields.phone.value.trim()) {\n        showError(fields.phone, '*Enter your number');\n        isValid = false;\n      }\n\n      if (!isValid) return;\n\n      const submitBtn = form.querySelector('[type=\"submit\"]');\n      const spinner = form.querySelector('.spinner');\n      if (submitBtn) submitBtn.disabled = true;\n      if (submitBtn) submitBtn.value = 'Sending...';\n      if (spinner) spinner.style.display = 'flex';\n\n      const body = new FormData(form);\n\n      fetch(form.action, {\n        method: 'POST',\n        body,\n      })\n        .then(res => res.json())\n        .then(data => {\n          if (submitBtn) submitBtn.disabled = false;\n          if (submitBtn) submitBtn.value = 'Send Request';\n          if (spinner) spinner.style.display = 'none';\n\n          if (data.status === 'mail_sent') {\n            if (formContent) formContent.style.display = 'none';\n            if (successMessage) successMessage.style.display = 'flex';\n            if (modalTitle) modalTitle.textContent = 'Boney M. feat Liz Mitchell';\n            form.reset();\n          } else {\n            const errEl = form.querySelector('.form-error');\n            if (errEl) errEl.style.display = 'block';\n          }\n        })\n        .catch(() => {\n          if (submitBtn) submitBtn.disabled = false;\n          if (submitBtn) submitBtn.value = 'Send Request';\n          if (spinner) spinner.style.display = 'none';\n          const errEl = form.querySelector('.form-error');\n          if (errEl) errEl.style.display = 'block';\n        });\n    });\n  }\n\n  function showError(field, message) {\n    const wrap = field.closest('.field-wrap');\n    if (wrap) {\n      let errEl = wrap.querySelector('.error-msg');\n      if (!errEl) {\n        errEl = document.createElement('span');\n        errEl.className = 'error-msg';\n        wrap.appendChild(errEl);\n      }\n      errEl.textContent = message;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/modal.js?\n}");

/***/ },

/***/ "./src/js/player.js"
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initPlayer: () => (/* binding */ initPlayer)\n/* harmony export */ });\nfunction initPlayer() {\n  const playerEl = document.querySelector('.player-wrap');\n  if (!playerEl) return;\n\n  const audio = document.getElementById('audio-player');\n  if (!audio) return;\n\n  const songs = JSON.parse(playerEl.dataset.tracks || '[]');\n  if (songs.length === 0) return;\n\n  let currentSongIndex = 0;\n  let isPlaying = false;\n\n  const coverImg = playerEl.querySelector('.cover');\n  const currentSongEl = playerEl.querySelector('.current-song');\n  const currentArtistEl = playerEl.querySelector('.current-artist');\n  const timeCurrentEl = playerEl.querySelector('.time-current');\n  const timeDurationEl = playerEl.querySelector('.time-duration');\n  const animateTrack = playerEl.querySelector('.animate-track');\n  const rangeInput = playerEl.querySelector('input[type=\"range\"]');\n  const playBtn = playerEl.querySelector('.play-btn');\n  const prevBtn = playerEl.querySelector('.skip-back');\n  const nextBtn = playerEl.querySelector('.skip-forward');\n  const librarySongs = playerEl.querySelectorAll('.library-song');\n\n  const defaultCover = playerEl.dataset.defaultCover || '';\n\n  function formatTime(time) {\n    if (isNaN(time)) return '0:00';\n    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);\n  }\n\n  function animateCoverChange() {\n    if (!coverImg) return;\n    coverImg.classList.remove('is-changing');\n    void coverImg.offsetWidth;\n    coverImg.classList.add('is-changing');\n    coverImg.addEventListener('animationend', () => {\n      coverImg.classList.remove('is-changing');\n    }, { once: true });\n  }\n\n  function updateUI(trackChanged) {\n    const song = songs[currentSongIndex];\n    if (!song) return;\n\n    if (coverImg) {\n      const coverUrl = song.cover ? (song.cover.url || song.cover) : defaultCover;\n      if (trackChanged) animateCoverChange();\n      coverImg.src = coverUrl || defaultCover;\n    }\n\n    if (currentSongEl) {\n      if (trackChanged) {\n        currentSongEl.style.opacity = '0';\n        setTimeout(() => {\n          currentSongEl.textContent = song.track_name || '';\n          currentSongEl.style.opacity = '1';\n        }, 150);\n      } else {\n        currentSongEl.textContent = song.track_name || '';\n      }\n    }\n\n    if (currentArtistEl) {\n      if (trackChanged) {\n        currentArtistEl.style.opacity = '0';\n        setTimeout(() => {\n          currentArtistEl.textContent = song.artist || '';\n          currentArtistEl.style.opacity = '0.7';\n        }, 200);\n      } else {\n        currentArtistEl.textContent = song.artist || '';\n      }\n    }\n\n    // Play/pause icon\n    if (playBtn) {\n      playBtn.src = isPlaying ? playBtn.dataset.pauseIcon : playBtn.dataset.playIcon;\n      playBtn.alt = isPlaying ? 'pause' : 'play';\n      playBtn.classList.toggle('is-playing-anim', isPlaying);\n    }\n\n    // Library highlight\n    librarySongs.forEach((el, i) => {\n      el.classList.toggle('is-playing', i === currentSongIndex);\n      const icon = el.querySelector('.song-play-icon');\n      if (icon) {\n        icon.src = (isPlaying && i === currentSongIndex) ? icon.dataset.pauseIcon : icon.dataset.playIcon;\n      }\n    });\n\n    // Duration displays\n    librarySongs.forEach((el, i) => {\n      const dur = el.querySelector('.duration');\n      if (dur && i === currentSongIndex && audio.duration) {\n        dur.textContent = formatTime(audio.duration);\n      } else if (dur && i !== currentSongIndex) {\n        dur.textContent = '--:--';\n      }\n    });\n  }\n\n  function loadSong(index) {\n    const song = songs[index];\n    if (!song) return;\n    audio.src = song.audio;\n    audio.load();\n  }\n\n  function playSong() {\n    if (!audio.src || audio.src === window.location.href) {\n      loadSong(currentSongIndex);\n    }\n    audio.play().catch(() => { isPlaying = false; updateUI(false); });\n    isPlaying = true;\n    updateUI(false);\n  }\n\n  function pauseSong() {\n    audio.pause();\n    isPlaying = false;\n    updateUI(false);\n  }\n\n  function togglePlay() {\n    isPlaying ? pauseSong() : playSong();\n  }\n\n  function skipTo(index) {\n    if (index === currentSongIndex) {\n      togglePlay();\n      return;\n    }\n    currentSongIndex = index;\n    loadSong(currentSongIndex);\n    if (isPlaying) {\n      audio.addEventListener('canplay', function handler() {\n        audio.play().catch(() => {});\n        audio.removeEventListener('canplay', handler);\n      });\n    } else {\n      playSong();\n    }\n    updateUI(true);\n  }\n\n  // Events\n  if (playBtn) playBtn.addEventListener('click', togglePlay);\n\n  if (prevBtn) {\n    prevBtn.addEventListener('click', () => {\n      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;\n      loadSong(currentSongIndex);\n      if (isPlaying) {\n        audio.addEventListener('canplay', function handler() {\n          audio.play().catch(() => {});\n          audio.removeEventListener('canplay', handler);\n        });\n      }\n      updateUI(true);\n    });\n  }\n\n  if (nextBtn) {\n    nextBtn.addEventListener('click', () => {\n      currentSongIndex = (currentSongIndex + 1) % songs.length;\n      loadSong(currentSongIndex);\n      if (isPlaying) {\n        audio.addEventListener('canplay', function handler() {\n          audio.play().catch(() => {});\n          audio.removeEventListener('canplay', handler);\n        });\n      }\n      updateUI(true);\n    });\n  }\n\n  librarySongs.forEach((el, i) => {\n    el.addEventListener('click', () => skipTo(i));\n  });\n\n  // Smooth progress bar — interpolate between timeupdate ticks\n  let rafId = null;\n  let knownTime = 0;\n  let knownAt = 0;\n  let lastTextUpdate = 0;\n\n  audio.addEventListener('timeupdate', () => {\n    knownTime = audio.currentTime;\n    knownAt = performance.now();\n  });\n\n  function updateProgress() {\n    const duration = audio.duration;\n\n    if (duration && !isNaN(duration) && isPlaying) {\n      // Predict current position based on last known time + elapsed\n      const elapsed = (performance.now() - knownAt) / 1000;\n      const predicted = Math.min(knownTime + elapsed, duration);\n      const percentage = (predicted / duration) * 100;\n\n      if (animateTrack) {\n        animateTrack.style.transform = `translateX(${percentage}%)`;\n      }\n      if (rangeInput) {\n        rangeInput.value = predicted;\n        rangeInput.max = duration;\n      }\n\n      const now = Date.now();\n      if (now - lastTextUpdate > 250) {\n        if (timeCurrentEl) timeCurrentEl.textContent = formatTime(predicted);\n        if (timeDurationEl) timeDurationEl.textContent = formatTime(duration);\n        const activeSong = librarySongs[currentSongIndex];\n        if (activeSong) {\n          const dur = activeSong.querySelector('.duration');\n          if (dur) dur.textContent = formatTime(duration);\n        }\n        lastTextUpdate = now;\n      }\n    }\n\n    rafId = requestAnimationFrame(updateProgress);\n  }\n\n  audio.addEventListener('play', () => {\n    knownTime = audio.currentTime;\n    knownAt = performance.now();\n    if (!rafId) rafId = requestAnimationFrame(updateProgress);\n  });\n  audio.addEventListener('pause', () => {\n    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }\n  });\n  audio.addEventListener('seeked', () => {\n    knownTime = audio.currentTime;\n    knownAt = performance.now();\n  });\n\n  audio.addEventListener('ended', () => {\n    currentSongIndex = (currentSongIndex + 1) % songs.length;\n    loadSong(currentSongIndex);\n    audio.addEventListener('canplay', function handler() {\n      audio.play().catch(() => { isPlaying = false; updateUI(false); });\n      audio.removeEventListener('canplay', handler);\n    });\n    updateUI(true);\n  });\n\n  if (rangeInput) {\n    rangeInput.addEventListener('input', (e) => {\n      audio.currentTime = e.target.value;\n    });\n  }\n\n  updateUI(false);\n}\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/player.js?\n}");

/***/ },

/***/ "./src/js/text-slider.js"
/*!*******************************!*\
  !*** ./src/js/text-slider.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTextSliders: () => (/* binding */ initTextSliders)\n/* harmony export */ });\nfunction initTextSliders() {\n  const el = document.querySelector('.description-swiper');\n  if (!el || typeof Swiper === 'undefined') return;\n\n  const swiper = new Swiper('.description-swiper', {\n    loop: true,\n    speed: 600,\n    autoHeight: true,\n    grabCursor: true,\n  });\n}\n\n\n//# sourceURL=webpack://twentytwentyfive/./src/js/text-slider.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;