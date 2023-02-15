import { TiDocumentAdd } from 'react-icons/ti';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtomText } from '../../components/ButtomText';

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rafa Notes</h1>
            </Brand>

            <Header />

            <Menu>
              <li><ButtomText title="Todos" isActive /></li>
              <li><ButtomText title="React" /></li>
              <li><ButtomText title="Notejs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React', 
                        tags: [
                            {id: '1', name:'react'},
                            {id: '2', name:'rocketseat'}
                        ]
                    }}
                    />
                </Section>
                    
            </Content>

            <NewNote to="/new">
                <TiDocumentAdd />
                    Criar Nota
            </NewNote>

        </Container>
    );
}