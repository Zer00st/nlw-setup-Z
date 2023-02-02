//document.querySelector("input").click() // querySelector() é uma função de busca de seletor, e click() o próprio nome ja diz
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button') // É assim que se declara uma tag que esta dentro de outra tag, apenas o nome delas, com espaço entre

button.addEventListener("click", add) // Essafunção é uma função ouvinte, sempre que ela for executada ela necessita de 2 parametros, o primeiro é a ação condicional de ativação, nesse caso, o click do mouse, e o segundo é o que ela ira fazer ao ser executada, que nesse caso é executar a outra função chamada "add"
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) // Date(), é uma função que pega a data atual, toLocalDateString(), é uma função que organiza os caracteres de acordo com a nação especificada, slice(), é uma função que recorta parte de uma string, sendo o primeiro parametro o ponto d inicio, e o segundo o ponto final, ele ira recortar tudo alem desse parametro
    const dayExists = nlwSetup.dayExists(today)
    
    if(dayExists){
        alert("Dia ja incluso")
        return
    }

    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) // localStorage é uma função que acessa o armazenamento local do site, só que ele só armazena strings, então é pra isso que serve a função stringfy() da biblioteca JSON, transforma todos os meus objetos criados pelo JS em strings
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // Esse parse() é uma função que transforma strings em dados novamente, e esse {}, é basicamente um NULL, para evitar erros, pois sem ele o programa vai correr até o fim e dar erro na parte dos dados, pois não vai encontrar nada caso não aja nd, o || é o mesmo que com c++ o "ou"
nlwSetup.setData(data) //Função que utiliza a constante "data" para reproduzi-la no site
nlwSetup.load() // Carrega o programa