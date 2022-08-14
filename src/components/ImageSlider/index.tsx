import React, {useRef, useState} from 'react';
import { FlatList, ViewToken } from 'react-native';
import {ImageIndexes, ImageIndex, CarImageWrapper, CarImage, Container} from './styles';

interface Props {
    imagesUrl: string[]
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

const ImageSlider = ({imagesUrl}: Props) => {
    const [imageIndex, setImageIndex] = useState(0)

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!
        setImageIndex(index)
    })

    return (
        <Container>
            <ImageIndexes>
                {
                    imagesUrl.map((item, index) => (
                        <ImageIndex key={String(index)} active={imageIndex === index} />
                    ))
                }
            </ImageIndexes>
                <FlatList 
                    data={imagesUrl}
                    keyExtractor={key => key}
                    renderItem={({item}) => (
                        <CarImageWrapper>
                            <CarImage source={{uri: item}} resizeMode="contain" />
                        </CarImageWrapper>
                    )}
                    horizontal//para deixar as imagens na horizontal
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={indexChanged.current}
                />
       </Container>
    );
}

export default ImageSlider;