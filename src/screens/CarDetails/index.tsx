import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StatusBar } from 'react-native';
import Accessory from '../../components/Accessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import {Container, Header, CarImages, Content, Details, Description, Rent, Period, Price, Brand, Name, Accessories, About, Footer} from './styles';
import Button from '../../components/Button';
import {CarDTO} from '../../dtos/CarDTO'
import getAccessoryIcon from '../../utils/getAccessoryIcon';

interface Params {
    car: CarDTO;
}

const CarDetails = () => {
    const navigation = useNavigation<any>();
    const route = useRoute()//sao infromações que estao vindo da minha rota
    const {car} = route.params as Params

    const handlePressConfirmRental = () => {
        navigation.navigate('Scheduling', {
            car
        })
    }

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content'/>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={car.photos}/>
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {car.accessories.map((accessory) => (
                        <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
                    ))}
                </Accessories>
                <About>{car.about}</About>
            </Content>
            <Footer>
                <Button title='Escolher o período do aluguel' onPress={handlePressConfirmRental} />
            </Footer>
        </Container>
    )
}

export default CarDetails;