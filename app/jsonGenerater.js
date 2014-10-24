var fs = require('fs');

function cat(){
	this.name = '';
	this.description = ''; 
	this.img = '';
	this.id;
}

function song(){
	this.name = '';
	this.singer = '';
	this.img = '';
	this.id;
}
/*fs.readdir('.',function (err, file){
	for (x in file){
		console.log(file[x]);
	}
	
});*/

var dataDir = './MusicDataBase/';
var i = 1;
var j = 1;
var categry = new Array();

while(fs.existsSync(dataDir+i))
{
	//console.log(i);
	categry[i-1] = new cat();
	var data = fs.readFileSync(dataDir+i+'/'+i+'.txt','UTF-8');
	var line = data.toString().split("\r\n");
	for (x in line){
		switch(line[x][0]){
			case 'n': categry[i-1].name = line[x].slice(2); break;
			case 'd': categry[i-1].description = line[x].slice(2); break;
		}
	}
	
	categry[i-1].img = 'MusicDataBase/'+i+'/1/1.png';
	categry[i-1].id = i;

	fs.writeFileSync(dataDir+i+'/categry.json', JSON.stringify(categry[i-1]));

			var song = new Array();
			j = 1;
			while(fs.existsSync(dataDir+i+'/'+j)){
				song[j-1] = new Object();

				var data2 = fs.readFileSync(dataDir+i+'/'+j+'/'+j+'.txt','utf8');
				var line2 = data2.toString().split("\r\n");
				console.log(line2);
				for (y in line2){
					var str = line2[y];
					//console.log(str[0]);
					switch(str[0]){
						case 's': song[j-1].singer = line2[y].slice(2);break;
						case 'n': song[j-1].name = line2[y].slice(2);break;
					}
				}
				//console.log(song[j-1]);
				song[j-1].img = 'MusicDataBase/'+i+'/'+j+'/'+j+'.png';
				song[j-1].id = j;
				song[j-1].music = 'MusicDataBase/'+i+'/'+j+'/'+j+'.mp3';

				fs.writeFileSync(dataDir+i+'/'+j+'/song.json', JSON.stringify(song[j-1]));

				j++;
			}

			fs.writeFileSync(dataDir+i+'/songs.json', JSON.stringify(song));

	i++;
}

//console.log(categry);

fs.writeFileSync(dataDir+'categrys.json', JSON.stringify(categry));