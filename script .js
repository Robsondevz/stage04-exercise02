/*Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se**
 cada aluno obteve sucesso ou não em entrar no concurso e mostre uma
  mensagem na tela.*/

const students = [{name: "RobertoCarlos",
    age: 16,
    firstNote: 4,
    secondNote: 10,
  },
    {name:"DrauzioVarela",
      age: 17,
      firstNote: 4,
      secondNote: 5,
    },
    
    {name:" AntonioNunes",
      age: 17,
      firstNote: 9,
      secondNote: 10,
    },

    {name: "Zina",
      age: 17,
      firstNote: 7,
      secondNote: 8},

    {name: "Emmy",
      age: 16,
      firstNote: 5,
      secondNote: 4},

    {name: "Chicarito",
      age: 16,
      firstNote: 9,
      secondNote: 6}
  ]
  
 






function average (firstNote, secondNote) { return (firstNote + secondNote) / 2}

function printStudentNote (student ){return `A média ${student.name} é ${average (student.firstNote, student.secondNote)}`}


for (let student of students) { 
let noteMsg = printStudentNote (student)
alert (noteMsg ) 

if (average(student.firstNote, student.secondNote) >= 7 ) {alert(`Parabéns voce esta indo bem no curso`)}
else {alert(`Ainda da tempo de melhorar, vamos focar mais nos estudos! `)}
}


  

