/*
* @name jchat-options.js
* @package cBB Chat
* @style: pbTech
* @version v1.1.0 02/02/2015 $
*
* @copyright (c) 2015 CaniDev
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*/

var jchat_style_options = {
	positions: {
		faq: {
			top		: ['#faqlinks', 'before'],
			bottom	: ['.panel:last', 'after']
		},
		index: {
			top		: ['[id^="category-"]:first', 'before'],
			bottom	: ['.online-list:first', 'before']
		},
		mcp: {
			top		: ['#tabs', 'before'],
			bottom	: ['#page-body', 'append']
		},
		memberlist: {
			top		: ['h2:first', 'after'],
			bottom	: ['#jumpbox', 'before']
		},
		search: {
			top		: ['h2:first', 'after'],
			bottom	: ['#page-body', 'append']
		},
		ucp: {
			top		: ['#tabs', 'before'],
			bottom	: ['#page-body', 'append']
		},
		viewforum: {
			top		: ['.action-bar.top', 'before'],
			bottom	: ['.action-bar.bottom', 'after']
		},
		viewonline: {
			top		: ['.action-bar.top', 'before'],
			bottom	: ['.action-bar.bottom', 'after']
		},
		viewtopic: {
			top		: ['.action-bar.top', 'before'],
			bottom	: ['.action-bar.bottom', 'after']
		},
		undefined: {
			top		: ['#page-body', 'prepend'],
			bottom	: ['#page-body', 'append']
		}
	}
};
