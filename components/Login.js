
import React, { Component } from 'react';
import {StyleSheet,ImageBackground,Text,Image,View} from 'react-native';
import { Container,Item, Input, Icon,Content} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class Login extends Component {
     constructor(props) {
          super(props);
          this.state = {  }
     }
     render() { 
          return ( 

               <ImageBackground resizeMode="cover" source={require('../assets/bg/bgmain.png')} style={styles.imgBackground}>
                    <Content>

                         <Container style={[styles.wrapParent,styles.bgTransparent]}>
                              <Container style={[styles.header,styles.bgTransparent]}>
                                   {/* <Text>tesr content</Text> */}
                              </Container>
                              <Container style={[styles.middle]}>
                                  
                                   {/* <Content> */}
                                        <Image resizeMode="cover" style={styles.imageLogo} source={require('../assets/bg/logo1.png')}/>
                                        
                                        <Item regular style={{marginLeft:50,marginRight:50}}>
                                             <Icon active name='home' />
                                             <Input style={{fontSize:25}} placeholder='Icon Textbox'/>
                                        </Item>
                                   {/* </Content> */}
                              </Container>
                              <Container style={[styles.footer,styles.bgTransparent]}>
                                   {/* <Text>tesr content</Text> */}
                              </Container>
                         </Container>
                    </Content>
               </ImageBackground>
               
          );
     }
}

const styles = StyleSheet.create({
     imgBackground : 
     {
          width: '100%', height: '100%',
     },
     imageLogo:
     {
          width:'80%',
          height:100
     },
     wrapParent : 
     {
          flex:1
     },
     bgTransparent: 
     {
          backgroundColor:'transparent'
     },
     header:
     {
          flex:1,
          alignItems:'center',
          justifyContent: 'center',
     },
     middle:{
          flex:3,
          justifyContent: 'center',
          alignItems:'center',
          backgroundColor:'rgba(43, 42, 42,0.3)'
     },
     footer :{
          flex:1
     }
})
 
export default Login;