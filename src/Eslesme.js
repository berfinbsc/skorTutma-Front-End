import React, { useEffect, useState } from 'react';
import {Header, Image, Table,Input, Grid, Segment,Divider} from 'semantic-ui-react';



function Eslesme() {

    const [users, setMatches] = useState([]);

    useEffect(() => {
   
        fetch('/ceyrekmac/1/1')
        .then(response => response.json())
        .then(data => {
            setMatches(data) // Alınan veriyi işle
        })
        .catch(error => {
          console.error('Hata oluştu:', error);
        });
    }, []);

  



//userlerı lıstleme
    return (
        <div>


<Segment >
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
  <Segment basic='very'>
  <Header as='h3' disabled  >
    Çeyrek Maç
  </Header>
  </Segment>

  <Table  celled collapsing padded >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell style={{ width: '20%' }}>Player One</Table.HeaderCell>
        <Table.HeaderCell style={{ width: '20%' }}>Skor </Table.HeaderCell>
        <Table.HeaderCell style={{ width: '20%' }}>Skor </Table.HeaderCell>
        <Table.HeaderCell style={{ width: '20%' }}>Player Two</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
{ users.map((user) => (
    <Table.Row>
    <Table.Cell>
      <Header as='h4' image>
        <Image src='src/images/avatar/lena.png' rounded size='mini' />
        <Header.Content>
          {user.userOneName}
          <Header.Subheader>150</Header.Subheader>
        </Header.Content>
      </Header> 
    </Table.Cell>
    <Table.Cell>0</Table.Cell>

  
    <Table.Cell>0</Table.Cell>
    <Table.Cell>
      <Header as='h4' image>
        <Image src='./images/avatar/lena.png' rounded size='mini' />
        <Header.Content>
          {user.userTwoName}
          <Header.Subheader>200</Header.Subheader>
        </Header.Content>
      </Header>
    </Table.Cell>
  </Table.Row>
))}


       </Table.Body>

       </Table>
           
     
           </Grid.Column>
     
           <Grid.Column verticalAlign='middle'>
           <Table  basic='very'  collapsing>
         <Table.Header>
           <Table.Row>
           <Table.HeaderCell>Kendi Skor</Table.HeaderCell>
           <Table.HeaderCell>Rakip Skor</Table.HeaderCell>
     
           </Table.Row>
         </Table.Header>
         <Table.Body>
           <Table.Row>
             <Table.Cell>
             <Input  placeholder='skor'/>
     
             </Table.Cell>
             <Table.Cell>
             <Input  placeholder='skor'/>
     
             </Table.Cell>
           </Table.Row>
         </Table.Body>
       </Table>
           </Grid.Column>
         </Grid>

<Divider vertical></Divider>
</Segment>

</div>
);

}

export default Eslesme;