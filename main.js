var app = angular.module('music', []);

app.controller('MusicController', function(artist, song){
	var vm = this;

	vm.songList = [];
	vm.artistSongs = [];
	artist.all().then(function(artists){
			vm.artists = artists;
	});


	/*vm.search = function(){
		console.log("Searching...");		
		vm.loading = true;
		artist.all().then(function(songs){
			vm.songs = songs;
			vm.loading = false;
			vm.artistSearch = '';
		});

	};*/
	vm.allSongs = song.all().then(function(song){
		//console.log(song);
	}); 
//for loops in services, less inc onreoller
	vm.listSongs = function(targetArtist){
		vm.songList = [];
		if(!vm.songList.length)
		{
			vm.songList = [];
		}
		console.log(targetArtist);
		vm.allSongs = song.all().then(function(songs){
			songs.forEach(function(song){
				if(targetArtist.id == song.artistId){
					console.log(song.title);
					vm.songList.push(song);
				}
			});

		});

	};
});

app.factory('artist', function($http){
	return{
		all: function(){
			var url = 'https://itp-api.herokuapp.com/artists';
			return $http.get(url).then(function(response){
				//console.log(response);
			return response.data.artists;
		
		});

		}
	};

});

app.factory('song', function($http){
	return{
		all: function(){
			var url = 'https://itp-api.herokuapp.com/songs';
			return $http.get(url).then(function(response){
				//console.log(response);
			return response.data.songs;
		
		});

		}
	};

});