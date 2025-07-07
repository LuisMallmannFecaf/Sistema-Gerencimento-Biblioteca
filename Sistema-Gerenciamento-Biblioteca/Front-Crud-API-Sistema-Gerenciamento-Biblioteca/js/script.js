const cardContainer = document.getElementById('cardContainer');
const toogleThemeBtnc = document.getElementById('toggleThemeBtn');

let books = [];
let search = "AutoAjuda";
let searchfoundboolean = false;

//Carregar os livro do servidor 
async function loadCards(){
    try {
        const response = await fetch('http://localhost:8080/api/livros/listarLivros');
        books = await response.json();
        renderCards();
    } catch (error) {
        console.error('Erro ao carregar livro:',error);
    }
}
async function searchBooksForGenre(){
    search = document.getElementById('textoDigitadoinput').value;

    clearCards();
    renderCards();
}

function clearCards(){
    cardContainer.innerHTML = '';
}


//Renderiza os livro na tela 
function renderCards(){
    cardContainer.innerHTML = '';
  
    books.forEach((book) => {
        if( search == book.titulo || search == book.autor || search == book.npaginas || 
            search == book.editora || search == book.anopublicacao || search == book.generolivro){
           
            console.log(book);

            const card = document.createElement('div');
            card.className = 'card';

            bookgenre = document.createElement('h2');
            bookgenre.textContent = "GÊNERO DO LIVRO: "+ book.generolivro;
            card.appendChild(bookgenre);

            const cover = document.createElement('img');
            cover.src = book.capa || 'https://via.placeholder.com/150';
            card.appendChild(cover);
 
            const title = document.createElement('h3');
            title.textContent = "Título: " + book.titulo;
            card.appendChild(title);

            const author = document.createElement('p');
            author.textContent = "Autor: " +  book.autor;
            card.appendChild(author);

            const nPages = document.createElement('p');
            nPages.textContent = "Número Páginas: " + book.npaginas;
            card.appendChild(nPages);

            const publisher = document.createElement('p');
            publisher.textContent =  "Editora: " + book.editora;
            card.appendChild(publisher);

            const yearPublication = document.createElement('p');
            yearPublication.textContent =  "Ano Publicação: " + book.anopublicacao;
            card.appendChild(yearPublication);

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => editContact(book);
            card.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () => deleteContact(book.id);
            card.appendChild(deleteButton);

            cardContainer.appendChild(card);
            
        }
        /*
        if( search != book.titulo || search != book.autor || search != book.npaginas || 
            search != book.editora || search != book.anopublicacao || search != book.generolivro){
            console.log("Pesquisa não encontrada");
        }

        if( search != book.titulo && search != book.autor && search != book.npaginas && 
            search != book.editora && search != book.anopublicacao && search != book.generolivro){
            console.log("Pesquisa não encontrada");
        }


        */
      
    });
}

//Adicionar um no livro
async function addLivro(){
    const title = document.getElementById('tituloInput').value;
    const author = document.getElementById('autorInput').value;
    const nPages = document.getElementById('npaginasInput').value;
    const publisher = document.getElementById('editoraInput').value;
    const yearPublication = document.getElementById('anopublicacao').value;
    const bookgenre = document.getElementById('generoLivroInput').value;
    const cover = document.getElementById('capaInput').value;

    if(title && author && nPages){
        const newBook = {
            titulo: title,
            autor: author,
            npaginas: nPages,
            editora: publisher,
            anopublicacao: yearPublication,
            generolivro: bookgenre, 
            capa: cover
        };
    
        try {
            const response = await fetch('http://localhost:8080/api/livros/cadastrarLivro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook),
            });
            if(response.ok){
                loadCards();
                cleanForm();
            }else{
                console.error('>>Erro ao cadastrar livro<<: ', await response.text());
            }
        } catch (error) {
            console.error('Erro ao cadastrar livro: ', error);
        }
    }else{
        alert('Por favor, preencha todos os campos. ');
    }

}

//Editar um livro existente 
async function editContact(book) {
    document.getElementById('tituloInput').value = book.titulo;
    document.getElementById('autorInput').value = book.autor;
    document.getElementById('npaginasInput').value = book.npaginas;
    document.getElementById('editoraInput').value = book.editora;
    document.getElementById('anopublicacao').value = book.anopublicacao;
    document.getElementById('generoLivroInput').value = book.generolivro;
    document.getElementById('capaInput').value = book.capa;   

    //Substituir o botão de "Adicionar" por um de "Salvar"
    const addButton = document.querySelector('.form-container button');
    addButton.textContent = 'Salvar Alterações';
    addButton.onclick = () => saveEdit(book.id); 
}

//Salvar as alterações de um livro 
async function saveEdit(id) {
    const title = document.getElementById('tituloInput').value;
    const author = document.getElementById('autorInput').value;
    const nPages = document.getElementById('npaginasInput').value;
    const publisher = document.getElementById('editoraInput').value;
    const yearPublication = document.getElementById('anopublicacao').value;
    const bookgenre = document.getElementById('generoLivroInput').value;
    const cover = document.getElementById('capaInput').value;    

    const updateContact = {
        titulo: title,
        autor: author,
        npaginas: nPages,
        editora: publisher,
        anopublicacao: yearPublication,
        generolivro: bookgenre,
        capa: cover
    };
    try {
        const response = await fetch(`http://localhost:8080/api/livros/atualizarLivros/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateContact),
        });
        if(response.ok){
            loadCards();
            cleanForm();
            const addButton = document.querySelector('.form-container button');
            addButton.textContent = 'Adicionar Livro';
            addButton.onclick = addLivro;
        }else{
            console.error('Erro ao editar livro', await response.text());
        }
    } catch (error) {
        console.error('Erro ao editar livro', error);
    }       
}

//Deletar um livro 
async function deleteContact(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/livros/deletarLivro/${id}`, {
            method: 'DELETE',
        });
        if(response.ok){
            loadCards();
        }else{
            console.error('Erro ao deletar livro', await response.text());
        }
    } catch (error) {
        console.error('Erro ao deletar livro', error);
    }
}

//limpar o formulario após adc ou editar um livro
function cleanForm(){
    document.getElementById('tituloInput').value;
    document.getElementById('autorInput').value;
    document.getElementById('npaginasInput').value;
    document.getElementById('editoraInput').value;
    document.getElementById('anopublicacao').value;
    document.getElementById('generoLivroInput').value;
    document.getElementById('capaInput').value;    
}

//Alternar entre tema claro e escuro 
toogleThemeBtnc.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

//inicializar com os cards carregados 
loadCards();


