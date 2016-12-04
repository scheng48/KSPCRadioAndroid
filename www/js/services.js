angular.module('starter.services', [])

.factory('Days', function() {
  var days = [{
    id: 0,
    DOW: 'Sunday'
  }, {
    id: 1,
    DOW: 'Monday'
  }, {
    id: 2,
    DOW: 'Tuesday'
  }, {
    id: 3,
    DOW: 'Wednesday'
  }, {
    id: 4,
    DOW: 'Thursday'
  }, {
    id: 5,
    DOW: 'Friday'
  }, {
    id: 6,
    DOW: 'Saturday'
  }];

  return {
    all: function() {
      return days;
    },
    remove: function(day) {
      days.splice(days.indexOf(day), 1);
    },
    get: function(dayId) {
      for (var i = 0; i < days.length; i++) {
        if (days[i].id === parseInt(dayId)) {
          return days[i];
        }
      }
      return null;
    }
  };
})

.factory('DirectoryService', ['$q', DirectoryService]);

function DirectoryService($q) {
  var _db;
  var _shows;

  return {
    initDB: initDB,
    getDaySchedule: getDaySchedule,
    getLastUpdated: getLastUpdated,
    getFavorites: getFavorites,
    addShow: addShow,
    updateShow: updateShow,
    destroyDB: destroyDB
  };

  function initDB() {
    // Creates the database or opens it if it already exists
    _db = new PouchDB('shows');
  };

  function addShow(show) {
    return $q.when(_db.post(show));
  };

  function updateShow(show) {
    return $q.when(_db.put(show));
  };

  function destroyDB() {
    return $q.when(_db.destroy());
  };

  function getDaySchedule(day) {
    return $q.when(_db.allDocs({
      startkey: day.DOW + '0',
      endkey: day.DOW + '99',
      include_docs: true
    })).then(function(docs) {
      _shows = docs.rows

      // Listen for changes on the database
      _db.changes({live:true, since: 'now', include_docs: true})
      .on('change', onDatabaseChange);

      return _shows;
    });
  };

  function getLastUpdated() {
    return $q.when(_db.get('lastUpdated')).then(function(doc) {
      return doc.updatedAt;
    });
  };

  function getFavorites() {
    return $q.when(_db.allDocs({
      startkey: 'favoriteDJ',
      endkey: 'favoriteDJ\uffff',
      include_docs: true
    })).then(function(docs) {
      _shows = docs.rows

      // Listen for changes on the database
      _db.changes({live:true, since: 'now', include_docs: true})
      .on('change', onDatabaseChange);

      return _shows;
    });
  };

  function onDatabaseChange(change) {
    var index = findIndex(_shows, change.id);
    var show = _shows[index];

    if (change.deleted) {
      if (show) {
        _shows.splice(index, 1);
      }
    } else {
      if (shows && show._id == change.id) {
        _shows[index] = change.doc;
      } else {
        _shows.splice(index, 0, change.doc);
      }
    }
  };

  function findIndex(array, id) {
    var low = 0, high = array.length, mid;

    while (low < high) {
      mid = (low + high) >>> 1;
      array[mid]._id < id ? low = mid + 1 : high = mid
    }

    return low;
  };
}
