/*Implementare la funzione firstUncompletedNote che, dato un array di note,
 restituisce la prima nota non completata. Una nota viene considerata completata se
  tutti i todo presenti hanno il flag done impostato a true.
 
*/
const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },

  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

function firstUncompletedNote(array) {
  // Use a more appropriate variable name, e.g., 'note'
  let uncompletedNote = array.find(note => note.todos.some(todo => todo.done === false));
  return uncompletedNote;
}

let result = firstUncompletedNote(notes);
console.log(result);