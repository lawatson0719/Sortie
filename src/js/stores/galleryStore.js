var EventEmitter = require('eventemitter3');

// Create a new EventEmitter object.
// EventEmitters can registe callback functions to run whenever they trigger an event
// e.g
// 		store.om('update', function () {
// 			console.log('Test')
//  	});
// 		store.trigger('update');

// galleryStore is going to be our source for gallery items.
//
// Each gallery item will be represented by an object. e.g:
//
//	{ url: 'http://....', likes: 0 }

// We need a way to add gallery items.
// We need a way to remove gallery items.
// We need a way to like galley items.

// We also need a way to update any views that are listening for changes in our data
// 		(EventEmitter to emit the "update" event).

var galleryStore = Object.create(EventEmitter.prototype);
EventEmitter.call(galleryStore);

var galleryItems = [];

// Add a photo item to our data. 
galleryStore.add = function (text) {
	todoItems.push({ text: text, completed: false, id: Math.random() });
	galleryStore.emit('update');
};

galleryStore.remove = function () {
	
};

// Complete a todo item (set it's completed to false)
galleryStore.like = function (id) {
	var todoItem = todoItems.find( function (item) {
		return item.id === id;
	});
	todoItem.completed = !todoItem.completed;
	galleryStore.emit('update');
};



module.exports = galleryStore;