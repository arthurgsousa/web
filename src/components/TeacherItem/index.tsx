import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import '.styles.css';

function TeacherItem() {
    return (
        <article className= 'teacher-item'>
        <header>
            <img src="https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/60195630_2603280689695761_5393319806592090112_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Vu7mHixhp4UAX-F8A5X&_nc_ht=scontent.fbsb8-2.fna&oh=667d3d77a8d61977b86363a72456e920&oe=5F76F655" alt="Arthur Melo" />
            <div>
                <strong>Arthur Melo</strong>
                <span>Química</span>
            </div>
        </header>
        
        <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br /> <br />
            Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas através de experiências.
        </p>

        <footer>
            <p>
                <strong> R$ 80,00</strong>
            </p>
            <button type="button">
                <img src="{whatsappIcon}" alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article> 
    );
}

export default TeacherItem;