let jedi = 'Luke Skywalker';

function changeNameOne() {
  jedi = 'Qui-Gon Jinn';
	
  function changeNameTwo() {
    let jedi = 'Obi-Wan Kenobi';
  }
	
  changeNameTwo();
}

jedi = 'Anakin Skywalker';
changeNameOne();

console.log(jedi);