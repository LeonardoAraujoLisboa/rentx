import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import Load from '../../components/Load';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import getAccessoryIcon from '../../utils/getAccessoryIcon';
import {Container, Header, HeaderContent, TotalCars, CarList, MyCarsButton} from './styles';
import {Ionicons} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const Home = () => {
   const theme = useTheme();
   const navigation = useNavigation<any>();
   const [cars, setCars] = useState<CarDTO[]>([]);
   const [loading, setLoading] = useState(Boolean)

   const handlePress = (car: CarDTO) => {
      navigation.navigate('CarDetails', {car})
   }

   const getCars = async () => {
      try {
         setLoading(true);
         const res = await api.get('/cars');
         setCars(res.data);
         setLoading(false);
         console.log('ola', res)
      } catch(error) {
         setLoading(false);
         console.log(error);
      }
   }

   const handleOpenMyCars = () => {
      navigation.navigate('MyCars');
   }

   useEffect(() => {
      getCars();
   }, [])

   return (
      <Container>
         <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />{/* o translucent ele começa onde o statusbar começa e nao depois ai a barra dele sobre */}
         <Header>
            <HeaderContent>
               <Logo width={RFValue(108)} height={RFValue(12)}/>
               <TotalCars>Total: {cars.length} carros</TotalCars>
            </HeaderContent>
         </Header>
         {loading ? <Load /> : <CarList data={cars} keyExtractor={item => item.id} renderItem={({item}) => <Car data={item} icon={getAccessoryIcon(item.fuel_type)} onPress={() => handlePress(item)} />}/>}
         <MyCarsButton onPress={handleOpenMyCars}>
            <Ionicons name='ios-car-sport' size={32} color={theme.colors.background_secondary}/>
         </MyCarsButton>
      </Container>
   );
}

export default Home;