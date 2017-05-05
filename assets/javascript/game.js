$(function() {


var character1 = {
				name:'Obi Wan Kenobi',
				HP: '180',
				baseAtkPwr:'8',
				counterAtk:'17'
				};

var character2 = {
				name:'Luke Skywalker',
				HP: '200',
				baseAtkPwr:'7',
				counterAtk:'19'
				};

var character3 = {
				name:'Mace Windu',
				HP: '170',
				baseAtkPwr:'6',
				counterAtk:'20'
				};

var character4 = {
				name: 'Yoda',
				HP: '160',
				baseAtkPwr:'7',
				counterAtk:'22'
				};

console.log(character1);
console.log(character2);
console.log(character3);
console.log(character4);

var hero = {};

var heroImg = $('#obiWan');
var enemyImg1 = $('#obiWan');
var enemyImg2 = $('#obiWan');
var enemyImg3 = $('#obiWan');


$('#obiWan').click(function()
{
	hero = character1;
	heroImg = $('#obiWan');
	enemyImg1 = $('#lukeSkywalker');
	enemyImg2 = $('#maceWindu');
	enemyImg3 = $('#yoda');
	charSelect(hero);

});

$('#lukeSkywalker').click(function()
{
	hero = character2;
	heroImg = $('#lukeSkywalker');
	enemyImg1 = $('#obiWan');
	enemyImg2 = $('#maceWindu');
	enemyImg3 = $('#yoda');
	charSelect(hero);
});

$('#maceWindu').click(function()
{
	hero = character3;
	heroImg = $('#maceWindu');
	enemyImg1 = $('#lukeSkywalker');
	enemyImg2 = $('#obiWan');
	enemyImg3 = $('#yoda');
	charSelect(hero);
});

$('#yoda').click(function()
{
	hero = character4;
	heroImg = $('#yoda');
	enemyImg1 = $('#lukeSkywalker');
	enemyImg2 = $('#maceWindu');
	enemyImg3 = $('#obiWan');
	charSelect(hero);

});




function charSelect(hero)
{
	console.log("you've chosen "+ hero.name);
	var baseATK = hero.baseAtkPwr;
	var totalATK = hero.baseAtkPwr;
	var heroHP = hero.HP;

	console.log("this character has a base attack power of "+baseATK);
	console.log("this character has a total of "+heroHP+" hit points");

	$('#availableCharacters').html("");

	$('#yourCharacter').append(heroImg);

	$('#availableEnemies').append(enemyImg1);
	$('#availableEnemies').append(enemyImg2);
	$('#availableEnemies').append(enemyImg3);


	


}



});