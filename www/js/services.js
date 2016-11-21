angular.module('starter.services', [])

.factory('DirectoryService', ['$q', DirectoryService]);

function DirectoryService($q) {
  var _db;
  var _shows;

  return {
    initDB: initDB,

    getAllShows: getAllShows,
    addShow: addShow,
    updateShow: updateShow,
    deleteShow: deleteShow
  };

  function initDB() {
    // Creates the database or opens it if it already exists
    _db = new PouchDB('shows');
    // TODO: use actual key and password
    var username = 'afterentersorelyheassurs';
    var password = 'b0f7af9d5ffbecc8e221b53c159f839e613dd14e';
    var remote = 'https://66e6d49c-59f9-40b7-b52b-2874ff4f02f6-bluemix.cloudant.com/shows';

    var options = {
      live: true,
      retry: true,
      continuous: true,
      auth: {
        username: username,
        password: password
      }
    };

    _db.sync(remote, options);
  };

  function addShow(show) {
    return $q.when(_db.post(show));
  };

  function updateShow(show) {
    return $q.when(_db.put(show));
  };

  function deleteShow(show) {
    return $q.when(_db.remove(show));
  };

  function getAllShows() {
    if (!_shows) {
      return $q.when(_db.allDocs({include_docs: true})).then(function(docs) {

        _shows = docs.rows

        // Listen for changes on the database
        _db.changes({live:true, since: 'now', include_docs: true})
          .on('change', onDatabaseChange);

        return _shows;
      });
    } else {
      return $q.when(_shows);
    }
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
