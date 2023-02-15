import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtomText } from '../../components/ButtomText';


export function Details(){
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtomText title="Excluir Nota" />

                    <h1>
                        Introdução a React
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis dapibus ipsum. Nullam imperdiet tortor 
                        sit amet sapien iaculis, nec hendrerit dui pharetra. 
                        Sed nec pretium nisl, et venenatis diam. Vestibulum eu quam sollicitudin, mollis tortor posuere, facilisis lacus. 
                        Duis at odio et ex efficitur dictum volutpat nec libero. Phasellus et arcu ac nisl sollicitudin eleifend. Morbi 
                        tincidunt ipsum ligula, a rutrum metus tristique eu. Morbi euismod lacus eu maximus lacinia. 
                        Vivamus rutrum elementum urna et aliquet. Aliquam sodales justo ac eros tincidunt, vulputate efficitur metus tincidunt. 
                        Aliquam tempus diam non elit suscipit auctor.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br</a></li> 
                            <li><a href="#">https://www.rocketseat.com.br</a></li> 
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="node"/>
                        <Tag title="csharp"/>
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    )
}

